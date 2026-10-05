import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PERSON_NAME, SeoService } from '../../core/services/seo.service';

/**
 * Page 404. Pré-rendue en /404.html : Vercel la sert avec un vrai statut 404
 * pour toute URL inconnue (au lieu de renvoyer l'accueil en 200).
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center bg-white dark:bg-gray-900">
      <h1 class="font-syne font-bold text-6xl text-black dark:text-white">404</h1>
      <p class="font-syne text-lg text-gray-700 dark:text-gray-300">Cette page n'existe pas ou a été déplacée.</p>
      <nav class="flex flex-wrap justify-center gap-4">
        <a routerLink="/" class="start-button inline-flex px-8 py-2 font-medium text-sm rounded-full bg-[#1e5543] text-white">Accueil</a>
        <a routerLink="/portfolio" class="inline-flex px-8 py-2 font-medium text-sm rounded-full border border-[#1e5543] text-[#1e5543] dark:text-white dark:border-white">Voir le portfolio</a>
      </nav>
    </section>
  `,
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: `Page introuvable | ${PERSON_NAME}`,
      description: `Cette page n'existe pas. Retrouvez le portfolio de ${PERSON_NAME} : projets, compétences et CV.`,
      path: '/404',
      noindex: true,
    });
  }
}
