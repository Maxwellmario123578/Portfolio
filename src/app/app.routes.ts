import { Routes } from '@angular/router';
import { IntroComponent } from './features/intro/intro.component';

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
    path: '**',
    redirectTo: '',
  },
];

