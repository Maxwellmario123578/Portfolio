import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Project } from '../../core/models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  loading = true;
  selectedImage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioDataService: PortfolioDataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.portfolioDataService.getProjectById(id).subscribe({
        next: (project) => {
          this.project = project;
          this.loading = false;
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

