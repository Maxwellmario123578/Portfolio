import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, effect } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../core/models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { LanguageService } from '../../core/services/language.service';
import { HeaderComponent } from '../../layout/header/header.component';

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
  private isInitialized = false;
  
  languageService = inject(LanguageService);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioDataService: PortfolioDataService
  ) {
    // Écouter les changements de langue avec effect
    effect(() => {
      // Lire le signal pour déclencher l'effect
      const currentLang = this.languageService.currentLanguage();
      
      // Recharger le projet seulement si déjà initialisé
      if (this.isInitialized && this.projectId) {
        console.log('Language changed to:', currentLang, '- Reloading project');
        this.loadProject();
      }
    });
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    // Charger le projet initial
    this.loadProject();
    // Marquer comme initialisé après le premier chargement
    this.isInitialized = true;
  }

  private loadProject(): void {
    if (this.projectId) {
      this.loading = true;
      this.portfolioDataService.getProjectById(this.projectId).subscribe({
        next: (project) => {
          this.project = project;
          this.loading = false;
          console.log('Project loaded:', project?.title);
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
}

