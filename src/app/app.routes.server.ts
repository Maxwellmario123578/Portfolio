import { RenderMode, ServerRoute } from '@angular/ssr';
import portfolioData from '../../public/portfolio-data.json';

/**
 * Toutes les pages sont pré-rendues en HTML au build : les moteurs de recherche
 * et les crawlers IA (qui n'exécutent pas le JavaScript) lisent ainsi le vrai contenu.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'project/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return portfolioData.projects.fr.map((project) => ({ id: project.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
