import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const BASE_URL = 'https://masewellmathurin.fr';
const DEFAULT_TITLE =
  'Masewell Mathurin KONMENECK — Élève-ingénieur Data Science & IA (EFREI Paris) | Portfolio';
const DEFAULT_DESCRIPTION =
  "Masewell Mathurin KONMENECK, élève-ingénieur Data Science & IA à EFREI Paris (double diplôme Saint Jean Ingénieur). Certifié IBM Data Science. Projets : MLOps, RAG, Machine Learning, Angular, Spring Boot.";

/** Met à jour title, description, canonical et og:url à chaque navigation. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);
  private router = inject(Router);

  init(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const path = (e as NavigationEnd).urlAfterRedirects.split(/[?#]/)[0];
      this.setCanonical(BASE_URL + (path === '/' ? '/' : path));
      // Les pages projet fixent leur propre titre via setPage()
      if (!path.startsWith('/project/')) this.setPage(DEFAULT_TITLE, DEFAULT_DESCRIPTION);
    });
  }

  setPage(title: string, description: string): void {
    const desc = description.length > 160 ? description.slice(0, 157).trimEnd() + '…' : description;
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: desc });
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;
    this.meta.updateTag({ property: 'og:url', content: url });
  }
}
