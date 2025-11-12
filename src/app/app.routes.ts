import { Routes } from '@angular/router';
import { ProjectDetailComponent } from './features/project-detail/project-detail.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
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
