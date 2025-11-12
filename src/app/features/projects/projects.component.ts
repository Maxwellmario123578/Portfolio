import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../core/models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private portfolioDataService: PortfolioDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.portfolioDataService.getProjects().subscribe(
      projects => this.projects = projects
    );
  }

  navigateToProject(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }
}
