import { Routes } from '@angular/router';
import { IntroComponent } from './features/intro/intro.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('./features/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent
      ),
  },
  {
    // Pré-rendue en 404.html (servie par Vercel avec un statut 404)
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

