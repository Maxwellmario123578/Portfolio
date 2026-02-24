import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<Language>('fr');

  constructor(public translate: TranslateService) {
    // Définir la langue par défaut
    this.translate.setDefaultLang('fr');
    
    // Charger les traductions manuellement
    this.translate.setTranslation('fr', this.getFrenchTranslations());
    this.translate.setTranslation('en', this.getEnglishTranslations());
    
    // Charger la langue depuis localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      this.currentLanguage.set(savedLang);
      this.translate.use(savedLang);
    } else {
      this.translate.use('fr');
    }
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLanguage() === 'fr' ? 'en' : 'fr';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  private getFrenchTranslations() {
    return {
      nav: {
        whoami: 'Whoami ?',
        education: 'Formation & Certificats',
        skills: 'Compétences',
        projects: 'Projets',
        volunteers: 'Bénévolats',
        contact: 'Contact'
      },
      whoami: {
        title: 'Whoami ?',
        intro1: 'Etudiant en ingénierie de conception en informatique à Saint Jean Ingénieur, passionné par la science de données et le développement logiciel.',
        intro2: 'J\'aime concevoir des solutions intelligentes mêlant analyse de données, IA et la technologie web modernes.',
        intro3: 'Mon objectif est de créer des applications performantes et utiles, tout en continuant à apprendre et à innover.'
      },
      education: {
        title: 'Formations et Certificats',
        selectItem: 'Sélectionnez une formation ou certification',
        viewCredential: 'Voir le certificat'
      },
      skills: {
        title: 'Compétences',
        languages: 'Langages',
        frameworks: 'Frameworks',
        dataScience: 'Data Science',
        toolsPlatforms: 'Outils et Plateformes'
      },
      projects: {
        title: 'Projets',
        inProgress: 'En cours',
        completed: 'Terminé',
        projectInProgress: 'PROJET EN COURS'
      },
      volunteers: {
        title: 'Bénévolats',
        subtitle: 'Mes engagements associatifs et communautaires'
      },
      contact: {
        title: 'Contacts',
        send: 'Envoyer',
        name: 'Nom',
        email: 'Email',
        message: 'Message'
      },
      common: {
        inProgress: 'En cours',
        certified: 'Certifié',
        yaounde: 'Yaoundé'
      }
    };
  }

  private getEnglishTranslations() {
    return {
      nav: {
        whoami: 'Whoami ?',
        education: 'Education & Certificates',
        skills: 'Skills',
        projects: 'Projects',
        volunteers: 'Volunteering',
        contact: 'Contact'
      },
      whoami: {
        title: 'Whoami ?',
        intro1: 'Computer Engineering student at Saint Jean Ingénieur, passionate about data science and software development.',
        intro2: 'I love designing intelligent solutions combining data analysis, AI and modern web technology.',
        intro3: 'My goal is to create efficient and useful applications, while continuing to learn and innovate.'
      },
      education: {
        title: 'Education and Certificates',
        selectItem: 'Select an education or certification',
        viewCredential: 'View credential'
      },
      skills: {
        title: 'Skills',
        languages: 'Languages',
        frameworks: 'Frameworks',
        dataScience: 'Data Science',
        toolsPlatforms: 'Tools and Platforms'
      },
      projects: {
        title: 'Projects',
        inProgress: 'In Progress',
        completed: 'Completed',
        projectInProgress: 'PROJECT IN PROGRESS'
      },
      volunteers: {
        title: 'Volunteering',
        subtitle: 'My community and associative commitments'
      },
      contact: {
        title: 'Contacts',
        send: 'Send',
        name: 'Name',
        email: 'Email',
        message: 'Message'
      },
      common: {
        inProgress: 'In Progress',
        certified: 'Certified',
        yaounde: 'Yaoundé'
      }
    };
  }
}
