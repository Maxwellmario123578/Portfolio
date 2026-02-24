import { Component, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../../../core/services/portfolio-data.service';
import { SkillCategory, TimelineItem, Project, Volunteer, Certification } from '../../../../core/models';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from '../../../../core/services/theme.service';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-main-content',
    standalone: true,
    imports: [CommonModule, HttpClientModule, TranslateModule],
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    skills: SkillCategory[] = [];
    education: TimelineItem[] = [];
    projects: Project[] = [];
    volunteers: Volunteer[] = [];
    certifications: Certification[] = [];

    activeSection = 'whoami';
    mobileMenuOpen = false;
    selectedEducationId: string | null = null;

    themeService = inject(ThemeService);
    languageService = inject(LanguageService);

    constructor(private portfolioDataService: PortfolioDataService) {
        // Écouter les changements de langue et recharger les données
        effect(() => {
            const currentLang = this.languageService.currentLanguage();
            this.loadAllData();
        });
    }

    displayedText = '';
    fullText = '';

    ngOnInit(): void {
        this.loadAllData();

        // Attendre que les traductions soient chargées
        setTimeout(() => {
            this.startTypingEffect();
        }, 200);
    }

    loadAllData(): void {
        this.portfolioDataService.getTimeline().subscribe(data => this.education = data);
        this.portfolioDataService.getCertifications().subscribe(data => this.certifications = data);
        this.portfolioDataService.getSkills().subscribe(data => this.skills = data);
        this.portfolioDataService.getProjects().subscribe(data => this.projects = data);
        this.portfolioDataService.getVolunteers().subscribe(data => this.volunteers = data);
    }

    loadEducationData(): void {
        this.portfolioDataService.getTimeline().subscribe(data => this.education = data);
        this.portfolioDataService.getCertifications().subscribe(data => this.certifications = data);
    }

    startTypingEffect() {
        this.displayedText = '';
        this.languageService.translate.get('whoami.intro3').subscribe((text: string) => {
            this.fullText = text;
            let i = 0;
            const typeWriter = () => {
                if (i < this.fullText.length) {
                    this.displayedText += this.fullText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            typeWriter();
        });
    }

    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    toggleEducation(id: string) {
        this.selectedEducationId = this.selectedEducationId === id ? null : id;
    }

    scrollTo(sectionId: string): void {
        this.activeSection = sectionId;
        this.mobileMenuOpen = false;
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

    openCredential(url: string): void {
        window.open(url, '_blank', 'noopener');
    }

    toggleTheme(): void {
        console.log('Toggle theme clicked, current:', this.themeService.isDarkMode());
        this.themeService.toggleTheme();
    }

    toggleLanguage(): void {
        this.languageService.toggleLanguage();
        // Redémarrer l'effet de frappe avec le nouveau texte
        setTimeout(() => {
            this.startTypingEffect();
        }, 100);
    }

    t(key: string): string {
        return key;
    }
}
