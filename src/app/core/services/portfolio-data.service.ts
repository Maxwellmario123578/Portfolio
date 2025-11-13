import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Certification, Project, SkillCategory, TimelineItem, Volunteer } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  getProjects(): Observable<Project[]> {
    return of([
      {
        id: '1',
        title: 'Tableau de bord du Site e-KIOSQUE',
        description:
          "Un tableau de bord interactif pour visualiser les données de vente, suivre les indicateurs clés de performance et identifier les tendances à l'aide de flux de données en temps réel.",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Na9rS2sUnmMCbWNycGCxdWoc83kIajvDT_P6Xd768cmiGAB3jAFYmb6HT7wCDNUtzOd6TeBvV7WfVUKWm0wwn4XNIv557HWXVJfptUDif-f5GutnvCGBszfgCotI37UANH4nW5E6skGf6fiocqFtyi3NRUuyn7z1S8PJhE3q-6BgUHK4LZ4byC0QYM7EJ2WEgzcmlHCReUXNErdCrG3bcg9nlpFJR6kJkn4EOXvQMAeF8AMFBmKe7zipfP1PT0h2WnHK9c9guXiB',
        technologies: ['Charts.js', 'HTML/CSS', 'Tailwindcss', 'JavaScript'],
        fullDescription:
          'A comprehensive analytics platform that provides real-time insights into sales performance. Built with modern web technologies and powered by advanced data processing algorithms.',
        features: [
          'Visualisation de données en temps réel avec graphiques interactifs',
          'Suivi et alertes personnalisables des indicateurs clés (KPI)',
          'Exportation de rapports aux formats PDF, Excel et CSV',
          'Interface responsive adaptée aux appareils mobiles',
        ],
        category: 'Analyse de données',
        date: 'Juin 2025 à Juillet 2025',
        status: 'terminé',
      },
      {
        id: '2',
        title: "Modèle de prédiction d'audience basé sur des données générées par l'IA",
        description:
          "Modèle d'apprentissage automatique prédisant l'audience d'un contenu à partir de données générées par l'IA, pour anticiper si un film plaira à un public Afrodescendant",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuClwx3WQum2T0mlBYXTZ5gN9yXiC-FmSNrpeKNdMgLjbsKMHPX5QY3Z5mR5npuTFjWosgh9R2o4ihzyUt-mq5WB32r8wjjKHkF8yCIZ2WYNc0Zwsiau-sldyDPYflkfFKYoPpwCCel9VsC1ItzRfZt1Qvm52ShgZIDAD0_d4a2s2f5P_W6HfZ-oyfF2ADmesJ4vtZlBFa3HS4-BoV37r8W3dhO6TQ9ozAP4Uigh5BotXITig_7V7H1NcMYCkeQNUzVxqSShcnX5co_5',
        technologies: ['Scikit-learn', 'Numpy', 'Pandas', 'Python'],
        fullDescription:
          'An advanced NLP system that processes text data to extract sentiment, emotions, and key insights. Trained on millions of data points for high accuracy.',
        features: [
          "Génération de données synthétiques avec l'IA",
          "Segmentation d'audience intelligente",
          'Nettoyage et normalisation automatiques',
        ],
        category: 'Apprentissage supervisé',
        date: '2025',
        status: 'terminé',
      },
      {
        id: '3',
        title: 'Application de Gestion des équipements',
        description:
          "Développement collaboratif(En équipe de 3) d'une application web de gestion du cycle de vie des équipements, centralisant les données, automatisant le suivi des maintenances et assurant la traçabilité des opérations.",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuClwx3WQum2T0mlBYXTZ5gN9yXiC-FmSNrpeKNdMgLjbsKMHPX5QY3Z5mR5npuTFjWosgh9R2o4ihzyUt-mq5WB32r8wjjKHkF8yCIZ2WYNc0Zwsiau-sldyDPYflkfFKYoPpwCCel9VsC1ItzRfZt1Qvm52ShgZIDAD0_d4a2s2f5P_W6HfZ-oyfF2ADmesJ4vtZlBFa3HS4-BoV37r8W3dhO6TQ9ozAP4Uigh5BotXITig_7V7H1NcMYCkeQNUzVxqSShcnX5co_5',
        technologies: ['SpringBoot', 'Thymeleaf', 'GitHub'],
        fullDescription:
          "Développement venu après une longue période de modélisation et en équipe de 3 personnes, d'une application web permettant de gérer le cycle de vie des équipements au sein d'une organisation (matériel informatique, véhicules, machines, etc.). Le projet visait à centraliser les informations sur les équipements, automatiser le suivi des maintenances, et améliorer la traçabilité des opérations. La collaboration en équipe a permis de répartir les tâches entre le développement backend, frontend, la conception de la base de données et les tests fonctionnels.",
        features: [
          'Gestion des équipements(Création, suppression et modification des équipements)',
          'Inventaire et tracabilité  des équipements',
          'Génération des rapports sur le suivi des matériels',
          'Sentiment analysis for customer satisfaction',
        ],
        category: 'Génie Logiciel',
        date: '2024',
        status: 'terminé',
      },
      {
        id: '4',
        title: 'Application de gestion des notes',
        description:
          'Application Python intuitive de gestion des notes, permettant la saisie, la mise à jour et le classement automatique des étudiants, avec visualisation graphique interactive et exportation des résultats.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDEzNp6gF5Q4ucf9Pb1Ss1e9YtRL_sK_OZ2qhj7wBpt6K0SC2akcsVl8U09l77wagHjoo5MqNKkxzOIyeXq77G_jrk2OIGDUz3j9fzV3Xprxn7fQMCo-EOERnDi-ovn9mBLzRs6Afy8qe-BPBCI4YTHKGeKYURwjs_61XfhI_LD951hBZlCXEOcR074GO-c9o6KGYJtLvq4Q_Gp9qxdGioimWKV6J-CrEMCED11dhusrMpjTb7ItJJP0PvDf2HJT5OFCzDNp1j-TLk9',
        technologies: ['Python', 'Matplotlib', 'csv'],
        fullDescription:
          "Application de gestion des notes développée en Python, conçue pour offrir une expérience fluide et visuelle dans le suivi des performances des étudiants. Elle permet d'ajouter, modifier et classer les notes, tout en générant des visualisations dynamiques (diagrammes circulaires et radars) grâce à Matplotlib. Les résultats peuvent être facilement exportés en CSV, et une version exécutable (.exe) a été créée pour une utilisation simple, sans installation préalable. Un projet alliant simplicité, efficacité et analyse visuelle.",
        features: [
          'Saisie et modification des noms et notes des étudiants',
          'Classement par mérite avec une interface claire et moderne',
          'Visualisation des données : Pie Chart et Spider Chart pour une analyse graphique dynamique',
          "Exportation en CSV et création d'un exécutable (.exe) pour une utilisation facile",
        ],
        category: 'Developpement Python',
        date: '2024-2025',
        status: 'terminé',
      },
      {
        id: '5',
        title: 'Application de gestion des Emplois du Temps dans un établissement',
        description:
          "Développement, en équipe de 3, d'une application web de gestion des emplois du temps, avec SCRUM, CI/CD et gestion des tâches sur Trello.",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Na9rS2sUnmMCbWNycGCxdWoc83kIajvDT_P6Xd768cmiGAB3jAFYmb6HT7wCDNUtzOd6TeBvV7WfVUKWm0wwn4XNIv557HWXVJfptUDif-f5GutnvCGBszfgCotI37UANH4nW5E6skGf6fiocqFtyi3NRUuyn7z1S8PJhE3q-6BgUHK4LZ4byC0QYM7EJ2WEgzcmlHCReUXNErdCrG3bcg9nlpFJR6kJkn4EOXvQMAeF8AMFBmKe7zipfP1PT0h2WnHK9c9guXiB',
        technologies: ['SpringBoot', 'Thymleaf', 'MySQL', 'Docker', 'GitHub'],
        fullDescription:
          "Nous mettons en œuvre une architecture microservices, afin de garantir une meilleure scalabilité, une modularité du code et une maintenance facilitée. Chaque service (gestion des enseignants, des classes, des salles, des cours, etc.) est développé et déployé indépendamment, favorisant une grande flexibilité technique. Grâce à une approche CI/CD (Intégration et Déploiement Continus), les mises à jour et les tests sont automatisés, assurant un déploiement fluide et fiable. Le développement s'appuie sur un environnement Spring Boot / Thymeleaf pour le back-end et le front-end, avec MySQL pour la base de données, le tout conteneurisé via Docker et versionné sur GitHub. Un projet qui met en avant la rigueur technique, la collaboration agile et une architecture moderne basée sur les microservices.",
        features: ['A venir'],
        category: 'Génie Logiciel',
        date: 'en cours',
        status: 'en cours',
      },
      {
        id: '6',
        title: 'Application de transport pour mototaxis entre Eyang et Nkolbisson à Yaoundé',
        description:
          "Développement, en équipe de 5, d'une application mobile de transport sécurisée pour mototaxis, facilitant les déplacements étudiants entre Eyang et Nkolbisson avec la méthodologie SCRUM",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDEzNp6gF5Q4ucf9Pb1Ss1e9YtRL_sK_OZ2qhj7wBpt6K0SC2akcsVl8U09l77wagHjoo5MqNKkxzOIyeXq77G_jrk2OIGDUz3j9fzV3Xprxn7fQMCo-EOERnDi-ovn9mBLzRs6Afy8qe-BPBCI4YTHKGeKYURwjs_61XfhI_LD951hBZlCXEOcR074GO-c9o6KGYJtLvq4Q_Gp9qxdGioimWKV6J-CrEMCED11dhusrMpjTb7ItJJP0PvDf2HJT5OFCzDNp1j-TLk9',
        technologies: ['Flutter', 'Firebase', 'Google Maps API', 'GitLab', 'SCRUM'],
        fullDescription:
          "Conception et développement, en équipe de 5, d'une application mobile innovante dédiée aux étudiants pour faciliter leurs déplacements en toute sécurité entre Eyang et Nkolbisson à Yaoundé. L'application permet aux utilisateurs de réserver une course, de localiser les mototaxis disponibles en temps réel, et de suivre le trajet de manière interactive grâce à OpenStreet Maps. Elle intègre des fonctionnalités de sécurité telles que le partage de trajet en direct, la vérification des conducteurs et le suivi GPS permanent. Le projet est développé selon la méthodologie agile SCRUM, avec des sprints réguliers, une gestion des tâches via GitLab et des revues hebdomadaires pour assurer un avancement coordonné et itératif.",
        features: [
          "Réservation rapide d'une course entre Eyang et Nkolbisson",
          'Géolocalisation en temps réel des mototaxis disponibles',
          "Suivi GPS du trajet avec estimation du temps d'arrivée",
          'Vérification et notation des conducteurs pour renforcer la confiance',
          'Paiement sécurisé intégré',
          "Notifications en temps réel sur l'état de la course",
          'Interface simple, intuitive et adaptée aux étudiants',
        ],
        category: 'Application mobile / Transport intelligent et sécurité des usagers',
        date: 'en cours',
        status: 'en cours',
      },
      {
        id: '7',
        title: 'Détection des déchets',
        description:
          "Projet en cours de réflexion visant à développer un système de détection automatisée des déchets à l'aide de techniques de Deep Learning. L'idée est encore en phase de conceptualisation et de modélisation.",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Na9rS2sUnmMCbWNycGCxdWoc83kIajvDT_P6Xd768cmiGAB3jAFYmb6HT7wCDNUtzOd6TeBvV7WfVUKWm0wwn4XNIv557HWXVJfptUDif-f5GutnvCGBszfgCotI37UANH4nW5E6skGf6fiocqFtyi3NRUuyn7z1S8PJhE3q-6BgUHK4LZ4byC0QYM7EJ2WEgzcmlHCReUXNErdCrG3bcg9nlpFJR6kJkn4EOXvQMAeF8AMFBmKe7zipfP1PT0h2WnHK9c9guXiB',
        technologies: [
          'En cours de définition : recherche sur les frameworks Deep Learning adaptés',
        ],
        fullDescription:
          "Projet exploratoire visant à concevoir un système intelligent capable de détecter et classer automatiquement les déchets dans différents environnements à l'aide du Deep Learning. Le projet est actuellement en phase de réflexion et de modélisation, où l'équipe analyse les besoins, les types de données à collecter et les approches techniques possibles. L'objectif futur est de développer une solution pratique et évolutive pour la surveillance environnementale et le nettoyage automatique.",
        features: [
          'Identification automatique des déchets via imagerie ou vidéo',
          'Prototype de détection basé sur des modèles de Deep Learning',
          'Collecte et annotation des données pour entraîner le modèle',
          "Phase exploratoire pour définir l'architecture et les technologies à utiliser",
        ],
        category: 'Deep Learning',
        date: 'en cours',
        status: 'en cours',
      },
      {
        id: '8',
        title: 'Application full-stack multi-plateforme de type évaluation académique intelligente',
        description:
          "Développement, en équipe de 4, d'une application full-stack d'évaluation académique intelligente, avec Scrum, Trello, maquettes UI/UX et CI/CD.",
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuClwx3WQum2T0mlBYXTZ5gN9yXiC-FmSNrpeKNdMgLjbsKMHPX5QY3Z5mR5npuTFjWosgh9R2o4ihzyUt-mq5WB32r8wjjKHkF8yCIZ2WYNc0Zwsiau-sldyDPYflkfFKYoPpwCCel9VsC1ItzRfZt1Qvm52ShgZIDAD0_d4a2s2f5P_W6HfZ-oyfF2ADmesJ4vtZlBFa3HS4-BoV37r8W3dhO6TQ9ozAP4Uigh5BotXITig_7V7H1NcMYCkeQNUzVxqSShcnX5co_5',
        technologies: ['React', 'Node.js', 'GitLab', 'CI/CD', 'Trello', 'Agile Scrum'],
        fullDescription:
          "Conception et développement, en équipe de 4, d'une application académique intelligente permettant d'évaluer les étudiants de manière automatisée et personnalisée. Le projet inclut la création de maquettes de conception pour l'interface utilisateur, l'implémentation d'un backend robuste avec Node.js et d'un frontend interactif avec React. Le workflow est géré via Trello, suivant la méthodologie agile Scrum avec des sprints réguliers. De plus, des pipelines CI/CD ont été mis en place pour automatiser les tests et le déploiement, garantissant un cycle de développement rapide et fiable.",
        features: [
          'Création et gestion des évaluations et examens en ligne',
          'Correction automatisée et génération de rapports détaillés',
          'Suivi des performances des étudiants avec statistiques et graphiques',
          'Interface multi-plateforme intuitive et responsive',
          'Workflow collaboratif et gestion agile via Trello',
          'CI/CD pour tests automatisés et déploiements continus',
          "Maquettes UI/UX pour améliorer l'expérience utilisateur",
        ],
        category: 'Développement Web / Éducation',
        date: 'en cours',
        status: 'en cours',
      },
    ]);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(map((projects) => projects.find((p) => p.id === id)));
  }

  getSkills(): Observable<SkillCategory[]> {
    return of([
      {
        title: 'Languages',
        skills: ['Python', 'JavaScript', 'SQL', 'Java'],
      },
      {
        title: 'Frameworks',
        skills: ['React', 'Node.js', 'SpringBoot', 'Angular', 'TailWindcss'],
      },
      {
        title: 'Data Science',
        skills: ['Numpy', 'PyTorch', 'Scikit-learn', 'Pandas'],
      },
      {
        title: 'Tools & Platforms',
        skills: ['Docker', 'Trello', 'GitLab & GitHub', 'Figma'],
      },
    ]);
  }

  getTimeline(): Observable<TimelineItem[]> {
    return of([
      {
        id: '1',
        title: "Etudiant en Informatique et Système d'information",
        organization: 'Institut Universitaire Saint Jean',
        period: "2021 - Aujourd'hui",
        position: 'right',
      },
      {
        id: '2',
        title: '3ème à Terminale D',
        organization: 'Collège Vogt',
        period: '2017 - 2021',
        position: 'left',
      },
      {
        id: '3',
        title: 'Élève de 6ème à 4ème',
        organization: "Collège Adventiste d'ODZA",
        period: '2014 - 2017',
        position: 'right',
      },
    ]);
  }

  getCertifications(): Observable<Certification[]> {
    return of([
      {
        id: '1',
        title: 'IBM Data Science Professional Certificate',
        issuer: 'IBM',
        date: 'Certifié',
        imageUrl:
          'https://s3.amazonaws.com/coursera-course-photos/fb/40e3a0b67611e8a95cbf6c0c5d88a3/IBM-DS-Logo.png',
        skills: ['Data Science', 'Python', 'SQL', 'Data Analysis', 'Machine Learning'],
      },
      {
        id: '2',
        title: 'Google Data Analytics',
        issuer: 'Google',
        date: 'En cours',
        imageUrl:
          'https://s3.amazonaws.com/coursera-course-photos/1b/03f7b04fc511e8a7b7bb5c9e6b0e1e/Google-DA-Logo.png',
        skills: ['Data Analysis', 'Spreadsheets', 'SQL', 'Tableau', 'R Programming'],
      },
      {
        id: '3',
        title: 'Microsoft Office Specialist: Word Associate (Office 2019)',
        issuer: 'Microsoft',
        date: 'Certifié',
        imageUrl:
          'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
        skills: ['Microsoft Word', 'Document Formatting', 'Office 2019', 'Productivity'],
      },
    ]);
  }

  getVolunteers(): Observable<Volunteer[]> {
    return of([
      {
        id: '1',
        title: "Responsable de l'atelier ML",
        organization: 'Club Robotique de Saint Jean Ingénieur',
        period: '2024 - Présent',
        description:
          "Animation et coordination de l'atelier Machine Learning, formation des membres aux concepts et outils de ML",
        status: 'en cours',
      },
      {
        id: '2',
        title: 'Membre du club liturgique',
        organization: "Paroisse Universitaire de l'Institut Universitaire de Saint Jean",
        period: '2023 - Présent',
        description:
          'Participation active aux activités liturgiques et spirituelles de la paroisse universitaire',
        status: 'en cours',
      },
    ]);
  }
}
