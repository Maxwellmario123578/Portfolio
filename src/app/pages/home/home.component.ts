import { Component } from '@angular/core';
import { AboutComponent } from '../../features/about/about.component';
import { CertificationsComponent } from '../../features/certifications/certifications.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { EducationComponent } from '../../features/education/education.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { VolunteersComponent } from '../../features/volunteers/volunteers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    CertificationsComponent,
    VolunteersComponent,
    ContactComponent
  ],
  template: `
    <app-hero />
    <app-about />
    <app-projects />
    <app-skills />
    <app-education />
    <app-certifications />
    <app-volunteers />
    <app-contact />
  `,
  styles: []
})
export class HomeComponent {}
