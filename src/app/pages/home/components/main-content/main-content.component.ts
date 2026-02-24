import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SkillCategory, TimelineItem, Project, Volunteer, Certification } from '../../../../core/models';
import { HttpClientModule } from '@angular/common/http';
// Import other necessary modules if needed

@Component({
    selector: 'app-main-content',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    skills: SkillCategory[] = [];
    education: TimelineItem[] = [];
    projects: Project[] = [];
    volunteers: Volunteer[] = [];

    activeSection = 'whoami';
    mobileMenuOpen = false;
    selectedEducationId: string | null = null;

    certifications: any[] = []; // Using any/Certification for now

    constructor(private portfolioDataService: PortfolioDataService) { }

    displayedText = '';
    fullText = "Mon objectif est de créer des applications performantes et utiles, tout en continuant à apprendre et à innover.";

    ngOnInit(): void {
        this.portfolioDataService.getSkills().subscribe(data => this.skills = data);
        this.portfolioDataService.getTimeline().subscribe(data => this.education = data);
        this.portfolioDataService.getProjects().subscribe(data => this.projects = data);
        this.portfolioDataService.getVolunteers().subscribe(data => this.volunteers = data);
        this.portfolioDataService.getCertifications().subscribe(data => this.certifications = data);

        this.startTypingEffect();
    }

    startTypingEffect() {
        let i = 0;
        const typeWriter = () => {
            if (i < this.fullText.length) {
                this.displayedText += this.fullText.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Adjust speed here (lower is faster)
            }
        };
        typeWriter();
    }

    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    toggleEducation(id: string) {
        this.selectedEducationId = this.selectedEducationId === id ? null : id;
    }

    scrollTo(sectionId: string): void {
        this.activeSection = sectionId;
        this.mobileMenuOpen = false; // Close mobile menu after navigation
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getTechsForProject(projectTitle: string): string[] {
        const techMap: { [key: string]: string[] } = {
            'Modèle de prédiction d\'audience basé sur des données générées par l\'IA': ['Scikit-learn', 'Pandas', 'Numpy', 'Python'],
            'Application de gestion des Emplois du Temps dans un établissement': ['Scikit-learn', 'Pandas', 'Numpy', 'Python'],
            'WillBank': ['React', 'Node.js', 'MongoDB'],
            'Tableau de bord': ['Angular', 'TailwindCSS', 'TypeScript'],
            'ML audience': ['Python', 'Scikit-learn', 'Pandas'],
            'Gestion notes': ['React', 'Firebase'],
        };
        return techMap[projectTitle] || [];
    }
}
