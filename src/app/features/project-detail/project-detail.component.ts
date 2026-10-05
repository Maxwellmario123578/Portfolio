import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, effect } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project } from '../../core/models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { LanguageService } from '../../core/services/language.service';
import { HeaderComponent } from '../../layout/header/header.component';
import { PERSON_NAME, SeoService, absoluteUrl, truncate } from '../../core/services/seo.service';
import { breadcrumb, projectSchema } from '../../core/services/structured-data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  loading = true;
  selectedImage: string | null = null;
  private projectId: string | null = null;
  private skipFirstLoad = true;
  
  languageService = inject(LanguageService);
  translateService = inject(TranslateService);
  private seo = inject(SeoService);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioDataService: PortfolioDataService
  ) {
    // Écouter les changements de langue avec effect
    effect(() => {
      // Lire le signal pour déclencher l'effect
      const currentLang = this.languageService.currentLanguage();
      
      // Ignorer le premier appel (au chargement initial)
      if (this.skipFirstLoad) {
        this.skipFirstLoad = false;
        return;
      }
      
      // Recharger le projet quand la langue change
      if (this.projectId) {
        console.log('Language changed to:', currentLang, '- Reloading project');
        this.loadProject();
      }
    });
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    // Charger le projet initial
    this.loadProject();
  }

  private loadProject(): void {
    if (this.projectId) {
      this.loading = true;
      this.portfolioDataService.getProjectById(this.projectId).subscribe({
        next: (project) => {
          this.project = project;
          this.loading = false;
          if (project) this.updateSeo(project);
          console.log('Project loaded:', project?.title, 'Category:', project?.category);
          if (!project) {
            this.router.navigate(['/']);
          }
        },
        error: () => {
          this.loading = false;
          this.router.navigate(['/']);
        }
      });
    }
  }

  private updateSeo(project: Project): void {
    const path = `/project/${project.id}`;
    // Les projets en cours ou confidentiels affichent une page d'attente : on ne les indexe pas
    const hidden = project.status !== 'terminé' || !!project.isConfidential;
    const image = !hidden && project.imageUrl ? project.imageUrl : '/og-image.jpg';
    this.seo.setPage({
      title: `${project.title} | ${PERSON_NAME}`,
      description: truncate(project.description),
      path,
      image,
      type: 'article',
      noindex: hidden,
      jsonLd: hidden
        ? []
        : [
            projectSchema(project, absoluteUrl(image)),
            breadcrumb([
              { name: 'Accueil', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: project.title, path },
            ]),
          ],
    });
  }

  goBack(): void {
    this.router.navigate(['/portfolio'], { fragment: 'projects' }).then(() => {
      // Attendre que la navigation soit terminée, puis scroller vers la section projets
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  isInProgress(): boolean {
    return this.project?.status === 'en cours';
  }

  getStatusTranslationKey(): string {
    return this.isInProgress() ? 'projects.inProgress' : 'projects.completed';
  }
}

