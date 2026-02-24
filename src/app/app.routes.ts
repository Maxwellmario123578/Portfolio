import { Routes } from '@angular/router';
import { ProjectDetailComponent } from './features/project-detail/project-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './features/intro/intro.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'portfolio',
    component: HomeComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

