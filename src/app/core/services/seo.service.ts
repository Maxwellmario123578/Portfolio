import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_URL = 'https://www.masewellmathurin.fr';
export const PERSON_NAME = 'Masewell Mathurin KONMENECK';
export const PERSON_ID = `${SITE_URL}/#person`;
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface SeoPage {
  title: string;
  description: string;
  /** Chemin de la page, ex. '/portfolio' */
  path: string;
  /** Image de partage (chemin ou URL absolue) */
  image?: string;
  type?: 'website' | 'profile' | 'article';
  /** Entités schema.org propres à la page (Person et WebSite sont déjà dans index.html) */
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
}

/**
 * Met à jour les balises SEO de la page courante. Comme le site est pré-rendu,
 * ces balises sont écrites dans le HTML statique de chaque route.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  setPage(page: SeoPage): void {
    const url = absoluteUrl(page.path);
    const image = page.image ? absoluteUrl(page.image) : DEFAULT_IMAGE;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({
      name: 'robots',
      content: page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: page.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
    this.setJsonLd(page.jsonLd ?? []);
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(entities: Record<string, unknown>[]): void {
    let script = this.document.head.querySelector<HTMLScriptElement>('script#page-jsonld');
    if (!entities.length) {
      script?.remove();
      return;
    }
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': entities });
  }
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}/${path.replace(/^\//, '')}`;
}

/** Coupe un texte à ~160 caractères sans couper un mot, pour les meta descriptions */
export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[\s,;:.–-]+$/, '') + '…';
}
