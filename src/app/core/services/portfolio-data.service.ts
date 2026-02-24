import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Certification, Project, SkillCategory, TimelineItem, Volunteer } from '../models';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private languageService = inject(LanguageService);

  private getProjectsData(lang: string): Project[] {
    if (lang === 'en') {
      return [
        {
          id: '1',
          title: 'e-KIOSQUE Site Dashboard',
          description: "An interactive dashboard to visualize sales data, track key performance indicators and identify trends using real-time data streams.",
          imageUrl: 'Projet_images/Tableau_bord/Tableau_bord_1.png',
          images: [
            'Projet_images/Tableau_bord/Tableau_bord_1.png',
            'Projet_images/Tableau_bord/Tableau_bord_2.png',
            'Projet_images/Tableau_bord/Tableau_bord_3.png',
            'Projet_images/Tableau_bord/Tableau_bord_4.png',
          ],
          technologies: ['Charts.js', 'HTML/CSS', 'Tailwindcss', 'JavaScript'],
          fullDescription: 'Development of an interactive dashboard for the e-KIOSQUE site, enabling visualization of sales data, tracking key performance indicators (KPIs) and identifying trends through real-time data streams. The project involved collecting and integrating data from various sources, creating dynamic visualizations with Charts.js, and implementing a responsive user interface using HTML/CSS and Tailwindcss. This dashboard provides a comprehensive overview of site performance, facilitating informed decision-making to improve sales and user experience.',
          features: [
            'Real-time data visualization with interactive charts',
            'Customizable tracking and alerts for key indicators (KPIs)',
            'Report export in PDF, Excel and CSV formats',
            'Responsive interface adapted to mobile devices',
          ],
          category: 'Data Analysis',
          date: 'June 2025 to July 2025',
          status: 'terminé',
        },
        {
          id: '2',
          title: "Audience Prediction Model Based on AI-Generated Data",
          description: "Machine learning model predicting content audience from AI-generated data, to anticipate whether a film will appeal to an Afro-descendant audience",
          imageUrl: 'Projet_images/ML_audiance/image.png',
          images: ['Projet_images/ML_audiance/image.png'],
          technologies: ['Scikit-learn', 'Numpy', 'Pandas', 'Python'],
          fullDescription: 'An advanced ML system that processes data to predict audience preferences. Trained on AI-generated data for high accuracy.',
          features: [
            "Synthetic data generation with AI",
            "Intelligent audience segmentation",
            'Automatic cleaning and normalization',
          ],
          category: 'Supervised Learning',
          date: '2025',
          status: 'terminé',
        },
        {
          id: '3',
          title: 'Equipment Management Application',
          description: "Collaborative development (team of 3) of a web application for equipment lifecycle management, centralizing data, automating maintenance tracking and ensuring operation traceability.",
          imageUrl: 'Projet_images/En_cours/Perdu.jpg',
          technologies: ['SpringBoot', 'Thymeleaf', 'GitHub'],
          fullDescription: "Development of a web application to manage the lifecycle of equipment within an organization (IT equipment, vehicles, machines, etc.). The project aimed to centralize equipment information, automate maintenance tracking, and improve operation traceability. Team collaboration enabled task distribution between backend development, frontend, database design and functional testing.",
          features: [
            'Equipment management (Creation, deletion and modification)',
            'Equipment inventory and traceability',
            'Report generation on equipment tracking',
          ],
          category: 'Software Engineering',
          date: '2024',
          status: 'terminé',
        },
        {
          id: '4',
          title: 'Grade Management Application',
          description: 'Intuitive Python grade management application, enabling input, updating and automatic student ranking, with interactive graphical visualization and results export.',
          imageUrl: 'Projet_images/Gestion_notes/Gestion_notes.png',
          images: [
            'Projet_images/Gestion_notes/Gestion_notes.png',
            'Projet_images/Gestion_notes/Saisie_note.png',
            'Projet_images/Gestion_notes/Modifier_user.png',
            'Projet_images/Gestion_notes/Voir_note.png',
          ],
          technologies: ['Python', 'Matplotlib', 'csv'],
          fullDescription: "Grade management application developed in Python, designed to offer a smooth and visual experience in tracking student performance. It allows adding, modifying and ranking grades, while generating dynamic visualizations (pie charts and radar charts) using Matplotlib. Results can be easily exported to CSV, and an executable version (.exe) was created for simple use without prior installation. A project combining simplicity, efficiency and visual analysis.",
          features: [
            'Input and modification of student names and grades',
            'Merit-based ranking with a clear and modern interface',
            'Data visualization: Pie Chart and Spider Chart for dynamic graphical analysis',
            "CSV export and creation of an executable (.exe) for easy use",
          ],
          category: 'Python Development',
          date: '2024-2025',
          status: 'terminé',
        },
        {
          id: '5',
          title: 'WillBank Distributed Banking Platform',
          description: "Development of a complete banking application (team of 4) based on microservices architecture, including Spring Boot backend, Angular frontend, mobile application and Dockerized infrastructure.",
          imageUrl: 'Projet_images/WillBank/willbank1.png',
          images: [
            'Projet_images/WillBank/willbank1.png',
            'Projet_images/WillBank/willbank2.png',
            'Projet_images/WillBank/willbank3.png',
            'Projet_images/WillBank/willbank4.png',
          ],
          technologies: ['Java Spring Boot', 'Angular', 'Docker', 'MySQL', 'RabbitMQ', 'Redis', 'Microservices'],
          fullDescription: "Design and implementation of a modern banking solution based on a distributed microservices architecture. The project integrates a robust backend developed with Spring Boot, where each service (Client, Transaction, Notification) operates autonomously and communicates via REST or RabbitMQ. The user interface is provided by an Angular web application and a mobile application, offering a smooth customer experience. The architecture integrates discovery services (Eureka) and an API Gateway for centralized and secure request management.",
          features: [
            'Modular and scalable microservices architecture (Spring Boot)',
            'Complete client, account and authentication management',
            'Banking transaction processing (transfers, deposits, withdrawals)',
            'Asynchronous notification system via RabbitMQ',
            'Data persistence with MySQL and Redis caching',
            'Orchestration and containerization via Docker and Docker Compose',
            'Intuitive and responsive Web (Angular) and Mobile interfaces',
          ],
          category: 'Full-stack Development / Finance',
          date: '2024-2025',
          status: 'terminé',
        },
        {
          id: '6',
          title: 'School Schedule Management Application',
          description: "Development, in a team of 3, of a web application for schedule management, with SCRUM, CI/CD and task management on Trello.",
          imageUrl: 'Projet_images/En_cours/A_venir.jpg',
          technologies: ['SpringBoot', 'Thymleaf', 'MySQL', 'Docker', 'GitHub'],
          fullDescription: "Implementation of a microservices architecture to ensure better scalability, code modularity and easier maintenance. Each service (teacher management, classes, rooms, courses, etc.) is developed and deployed independently, promoting great technical flexibility. Thanks to a CI/CD (Continuous Integration and Deployment) approach, updates and tests are automated, ensuring smooth and reliable deployment. Development relies on a Spring Boot / Thymeleaf environment for backend and frontend, with MySQL for the database, all containerized via Docker and versioned on GitHub. A project that highlights technical rigor, agile collaboration and a modern architecture based on microservices.",
          features: ['Coming soon'],
          category: 'Software Engineering',
          date: 'in progress',
          status: 'en cours',
        },
        {
          id: '7',
          title: 'Motorcycle Taxi Transport Application between Eyang and Nkolbisson in Yaoundé',
          description: "Development, in a team of 5, of a secure mobile transport application for motorcycle taxis, facilitating student travel between Eyang and Nkolbisson with SCRUM methodology",
          imageUrl: 'Projet_images/En_cours/A_venir.jpg',
          technologies: ['React Native', 'Node.js', 'SQLite', 'Google Maps API', 'GitLab', 'SCRUM'],
          fullDescription: "Design and development of an innovative mobile application dedicated to students to facilitate their safe travel between Eyang and Nkolbisson in Yaoundé. The application allows users to book a ride, locate available motorcycle taxis in real time, and track the route interactively using OpenStreet Maps. It integrates security features such as live trip sharing, driver verification and permanent GPS tracking. The project is developed using agile SCRUM methodology, with regular sprints, task management via GitLab and weekly reviews to ensure coordinated and iterative progress.",
          features: [
            "Quick ride booking between Eyang and Nkolbisson",
            'Real-time geolocation of available motorcycle taxis',
            "GPS route tracking with estimated arrival time",
            'Driver verification and rating to build trust',
            'Integrated secure payment',
            "Real-time notifications on ride status",
            'Simple, intuitive interface adapted to students',
          ],
          category: 'Mobile Application / Smart Transport and User Safety',
          date: 'in progress',
          status: 'en cours',
        },
        {
          id: '8',
          title: 'Multi-platform Full-stack Intelligent Academic Assessment Application',
          description: "Development, in a team of 4, of a full-stack intelligent academic assessment application, with Scrum, Trello, UI/UX mockups and CI/CD.",
          imageUrl: 'Projet_images/En_cours/A_venir.jpg',
          technologies: ['React native', 'Node.js', 'GitLab', 'CI/CD', 'Trello', 'Agile Scrum'],
          fullDescription: "Design and development of an intelligent academic application enabling automated and personalized student assessment. The project includes creating design mockups for the user interface, implementing a robust backend with Node.js and an interactive frontend with React. The workflow is managed via Trello, following agile Scrum methodology with regular sprints. Additionally, CI/CD pipelines have been set up to automate testing and deployment, ensuring a fast and reliable development cycle.",
          features: [
            'Creation and management of online assessments and exams',
            'Automated correction and detailed report generation',
            'Student performance tracking with statistics and graphs',
            'Intuitive and responsive multi-platform interface',
            'Collaborative workflow and agile management via Trello',
            'CI/CD for automated testing and continuous deployment',
            "UI/UX mockups to improve user experience",
          ],
          category: 'Web Development / Education',
          date: 'in progress',
          status: 'en cours',
        },
        {
          id: '9',
          title: "AI-Powered Transaction Fraud Detection: End-to-End MLOps Pipeline and Real-Time Monitoring",
          description: "Development of a complete MLOps pipeline for fraud detection using AI, with Cloud architecture, Docker containerization, and real-time monitoring via Grafana dashboard.",
          imageUrl: 'Projet_images/En_cours/A_venir.jpg',
          images: ['Projet_images/En_cours/A_venir.jpg'],
          technologies: ['Python', 'Docker', 'FastAPI', 'Grafana', 'MLOps', 'Cloud', 'Machine Learning', 'Prometheus'],
          fullDescription: "Implementation of an end-to-end MLOps pipeline for AI-powered transaction fraud detection. The project combines Cloud services, virtualization, and machine learning to ensure model performance in production. Using Docker for process isolation and resource management, the system guarantees multiplatform deployment with low downtime. A Grafana dashboard provides real-time monitoring of system metrics and model performance, ensuring complete observability of the fraud detection pipeline.",
          features: [
            'Complete MLOps pipeline with versioning and CI/CD',
            'Real-time fraud detection using machine learning models',
            'Docker containerization for process isolation',
            'Cloud architecture for scalability and reliability',
            'Grafana dashboard for real-time metrics monitoring',
            'Model performance tracking in production',
            'Low downtime deployment strategy',
          ],
          category: 'MLOps / Cloud Architecture / Data Science',
          date: 'in progress',
          status: 'en cours',
        },
      ];
    }

    return [
      {
        id: '1',
        title: 'Tableau de bord du Site e-KIOSQUE',
        description: "Un tableau de bord interactif pour visualiser les données de vente, suivre les indicateurs clés de performance et identifier les tendances à l'aide de flux de données en temps réel.",
        imageUrl: 'Projet_images/Tableau_bord/Tableau_bord_1.png',
        images: [
          'Projet_images/Tableau_bord/Tableau_bord_1.png',
          'Projet_images/Tableau_bord/Tableau_bord_2.png',
          'Projet_images/Tableau_bord/Tableau_bord_3.png',
          'Projet_images/Tableau_bord/Tableau_bord_4.png',
        ],
        technologies: ['Charts.js', 'HTML/CSS', 'Tailwindcss', 'JavaScript'],
        fullDescription: 'Développement d\'un tableau de bord interactif pour le site e-KIOSQUE, permettant de visualiser les données de vente, suivre les indicateurs clés de performance (KPI) et identifier les tendances grâce à des flux de données en temps réel. Le projet a impliqué la collecte et l\'intégration de données provenant de différentes sources, la création de visualisations dynamiques avec Charts.js, et la mise en place d\'une interface utilisateur responsive utilisant HTML/CSS et Tailwindcss. Ce tableau de bord offre une vue d\'ensemble complète des performances du site, facilitant la prise de décisions éclairées pour améliorer les ventes et l\'expérience utilisateur.',
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
        description: "Modèle d'apprentissage automatique prédisant l'audience d'un contenu à partir de données générées par l'IA, pour anticiper si un film plaira à un public Afrodescendant",
        imageUrl: 'Projet_images/ML_audiance/image.png',
        images: ['Projet_images/ML_audiance/image.png'],
        technologies: ['Scikit-learn', 'Numpy', 'Pandas', 'Python'],
        fullDescription: 'Un système ML avancé qui traite les données pour prédire les préférences du public. Entraîné sur des données générées par IA pour une grande précision.',
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
        description: "Développement collaboratif(En équipe de 3) d'une application web de gestion du cycle de vie des équipements, centralisant les données, automatisant le suivi des maintenances et assurant la traçabilité des opérations.",
        imageUrl: 'Projet_images/En_cours/Perdu.jpg',
        technologies: ['SpringBoot', 'Thymeleaf', 'GitHub'],
        fullDescription: "Développement venu après une longue période de modélisation et en équipe de 3 personnes, d'une application web permettant de gérer le cycle de vie des équipements au sein d'une organisation (matériel informatique, véhicules, machines, etc.). Le projet visait à centraliser les informations sur les équipements, automatiser le suivi des maintenances, et améliorer la traçabilité des opérations. La collaboration en équipe a permis de répartir les tâches entre le développement backend, frontend, la conception de la base de données et les tests fonctionnels.",
        features: [
          'Gestion des équipements(Création, suppression et modification des équipements)',
          'Inventaire et tracabilité  des équipements',
          'Génération des rapports sur le suivi des matériels',
        ],
        category: 'Génie Logiciel',
        date: '2024',
        status: 'terminé',
      },
      {
        id: '4',
        title: 'Application de gestion des notes',
        description: 'Application Python intuitive de gestion des notes, permettant la saisie, la mise à jour et le classement automatique des étudiants, avec visualisation graphique interactive et exportation des résultats.',
        imageUrl: 'Projet_images/Gestion_notes/Gestion_notes.png',
        images: [
          'Projet_images/Gestion_notes/Gestion_notes.png',
          'Projet_images/Gestion_notes/Saisie_note.png',
          'Projet_images/Gestion_notes/Modifier_user.png',
          'Projet_images/Gestion_notes/Voir_note.png',
        ],
        technologies: ['Python', 'Matplotlib', 'csv'],
        fullDescription: "Application de gestion des notes développée en Python, conçue pour offrir une expérience fluide et visuelle dans le suivi des performances des étudiants. Elle permet d'ajouter, modifier et classer les notes, tout en générant des visualisations dynamiques (diagrammes circulaires et radars) grâce à Matplotlib. Les résultats peuvent être facilement exportés en CSV, et une version exécutable (.exe) a été créée pour une utilisation simple, sans installation préalable. Un projet alliant simplicité, efficacité et analyse visuelle.",
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
        title: 'Plateforme Bancaire Distribuée WillBank',
        description: "Développement d'une application bancaire complète(en équipe de 4) basée sur une architecture microservices, incluant backend Spring Boot, frontend Angular, application mobile et infrastructure Dockerisée.",
        imageUrl: 'Projet_images/WillBank/willbank1.png',
        images: [
          'Projet_images/WillBank/willbank1.png',
          'Projet_images/WillBank/willbank2.png',
          'Projet_images/WillBank/willbank3.png',
          'Projet_images/WillBank/willbank4.png',
        ],
        technologies: ['Java Spring Boot', 'Angular', 'Docker', 'MySQL', 'RabbitMQ', 'Redis', 'Microservices'],
        fullDescription: "Conception et mise en œuvre d'une solution bancaire moderne reposant sur une architecture microservices distribuée. Le projet intègre un backend robuste développé avec Spring Boot, où chaque service (Client, Transaction, Notification) fonctionne de manière autonome et communique via REST ou RabbitMQ. L'interface utilisateur est assurée par une application web Angular et une application mobile, offrant une expérience client fluide. L'architecture intégrant des services de découverte (Eureka) et une passerelle API (Gateway) pour une gestion centralisée et sécurisée des requêtes.",
        features: [
          'Architecture microservices modulaire et scalable (Spring Boot)',
          'Gestion complète des clients, comptes et authentification',
          'Traitement des transactions bancaires (virements, dépôts, retraits)',
          'Système de notifications asynchrones via RabbitMQ',
          'Persistance des données avec MySQL et mise en cache Redis',
          'Orchestration et conteneurisation via Docker et Docker Compose',
          'Interfaces Web (Angular) et Mobile intuitives et responsives',
        ],
        category: 'Développement Full-stack/ Finance',
        date: '2024-2025',
        status: 'terminé',
      },
      {
        id: '6',
        title: 'Application de gestion des Emplois du Temps dans un établissement',
        description: "Développement, en équipe de 3, d'une application web de gestion des emplois du temps, avec SCRUM, CI/CD et gestion des tâches sur Trello.",
        imageUrl: 'Projet_images/En_cours/A_venir.jpg',
        technologies: ['SpringBoot', 'Thymleaf', 'MySQL', 'Docker', 'GitHub'],
        fullDescription: "Nous mettons en œuvre une architecture microservices, afin de garantir une meilleure scalabilité, une modularité du code et une maintenance facilitée. Chaque service (gestion des enseignants, des classes, des salles, des cours, etc.) est développé et déployé indépendamment, favorisant une grande flexibilité technique. Grâce à une approche CI/CD (Intégration et Déploiement Continus), les mises à jour et les tests sont automatisés, assurant un déploiement fluide et fiable. Le développement s'appuie sur un environnement Spring Boot / Thymeleaf pour le back-end et le front-end, avec MySQL pour la base de données, le tout conteneurisé via Docker et versionné sur GitHub. Un projet qui met en avant la rigueur technique, la collaboration agile et une architecture moderne basée sur les microservices.",
        features: ['A venir'],
        category: 'Génie Logiciel',
        date: 'en cours',
        status: 'en cours',
      },
      {
        id: '7',
        title: 'Application de transport pour mototaxis entre Eyang et Nkolbisson à Yaoundé',
        description: "Développement, en équipe de 5, d'une application mobile de transport sécurisée pour mototaxis, facilitant les déplacements étudiants entre Eyang et Nkolbisson avec la méthodologie SCRUM",
        imageUrl: 'Projet_images/En_cours/A_venir.jpg',
        technologies: ['React Native', 'Node.js', 'SQLite', 'Google Maps API', 'GitLab', 'SCRUM'],
        fullDescription: "Conception et développement, en équipe de 5, d'une application mobile innovante dédiée aux étudiants pour faciliter leurs déplacements en toute sécurité entre Eyang et Nkolbisson à Yaoundé. L'application permet aux utilisateurs de réserver une course, de localiser les mototaxis disponibles en temps réel, et de suivre le trajet de manière interactive grâce à OpenStreet Maps. Elle intègre des fonctionnalités de sécurité telles que le partage de trajet en direct, la vérification des conducteurs et le suivi GPS permanent. Le projet est développé selon la méthodologie agile SCRUM, avec des sprints réguliers, une gestion des tâches via GitLab et des revues hebdomadaires pour assurer un avancement coordonné et itératif.",
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
        id: '8',
        title: 'Application full-stack multi-plateforme de type évaluation académique intelligente',
        description: "Développement, en équipe de 4, d'une application full-stack d'évaluation académique intelligente, avec Scrum, Trello, maquettes UI/UX et CI/CD.",
        imageUrl: 'Projet_images/En_cours/A_venir.jpg',
        technologies: ['React native', 'Node.js', 'GitLab', 'CI/CD', 'Trello', 'Agile Scrum'],
        fullDescription: "Conception et développement, en équipe de 4, d'une application académique intelligente permettant d'évaluer les étudiants de manière automatisée et personnalisée. Le projet inclut la création de maquettes de conception pour l'interface utilisateur, l'implémentation d'un backend robuste avec Node.js et d'un frontend interactif avec React. Le workflow est géré via Trello, suivant la méthodologie agile Scrum avec des sprints réguliers. De plus, des pipelines CI/CD ont été mis en place pour automatiser les tests et le déploiement, garantissant un cycle de développement rapide et fiable.",
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
      {
        id: '9',
        title: "Détection de Fraude aux Transactions par IA : Pipeline MLOps End-to-End et Monitoring Temps Réel",
        description: "Développement d'un pipeline MLOps complet pour la détection de fraude par IA, avec architecture Cloud, conteneurisation Docker, et monitoring temps réel via tableau de bord Grafana.",
        imageUrl: 'Projet_images/En_cours/A_venir.jpg',
        images: ['Projet_images/En_cours/A_venir.jpg'],
        technologies: ['Python', 'Docker', 'FastAPI', 'Grafana', 'MLOps', 'Cloud', 'Machine Learning', 'Prometheus'],
        fullDescription: "Mise en œuvre d'un pipeline MLOps end-to-end pour la détection de fraude aux transactions par IA. Le projet combine services Cloud, virtualisation et machine learning pour garantir la performance du modèle en production. Utilisant Docker pour l'isolation des processus et la gestion des ressources, le système assure un déploiement multiplateforme avec un faible temps d'arrêt. Un tableau de bord Grafana fournit un monitoring en temps réel des métriques système et des performances du modèle, assurant une observabilité complète du pipeline de détection de fraude.",
        features: [
          'Pipeline MLOps complet avec versioning et CI/CD',
          'Détection de fraude en temps réel utilisant des modèles de machine learning',
          'Conteneurisation Docker pour l\'isolation des processus',
          'Architecture Cloud pour scalabilité et fiabilité',
          'Tableau de bord Grafana pour le monitoring des métriques en temps réel',
          'Suivi des performances du modèle en production',
          'Stratégie de déploiement à faible temps d\'arrêt',
        ],
        category: 'MLOps / Architecture Cloud / Data Science',
        date: 'en cours',
        status: 'en cours',
      },
    ];
  }

  getProjects(): Observable<Project[]> {
    const lang = this.languageService.currentLanguage();
    return of(this.getProjectsData(lang));
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(map((projects) => projects.find((p) => p.id === id)));
  }

  getSkills(): Observable<SkillCategory[]> {
    const lang = this.languageService.currentLanguage();
    
    if (lang === 'en') {
      return of([
        {
          title: 'Languages',
          skills: ['Python', 'SQL', 'Java'],
        },
        {
          title: 'Frameworks',
          skills: ['React', 'Node.js', 'SpringBoot', 'Angular', 'TailWindcss'],
        },
        {
          title: 'Data Science',
          skills: ['Numpy', 'Scikit-learn', 'Pandas'],
        },
        {
          title: 'Tools & Platforms',
          skills: ['Docker', 'Trello', 'GitLab & GitHub', 'Figma'],
        },
      ]);
    }
    
    return of([
      {
        title: 'Langages',
        skills: ['Python', 'SQL', 'Java'],
      },
      {
        title: 'Frameworks',
        skills: ['React', 'Node.js', 'SpringBoot', 'Angular', 'TailWindcss'],
      },
      {
        title: 'Data Science',
        skills: ['Numpy', 'Scikit-learn', 'Pandas'],
      },
      {
        title: 'Outils & Plateformes',
        skills: ['Docker', 'Trello', 'GitLab & GitHub', 'Figma'],
      },
    ]);
  }

  getTimeline(): Observable<TimelineItem[]> {
    const lang = this.languageService.currentLanguage();
    
    if (lang === 'en') {
      return of([
        {
          id: 'edu-1',
          title: "Information Systems Engineering",
          organization: 'Saint Jean Ingénieur | Yaoundé',
          period: "2022 - 2027",
          description: "Engineering cycle in information systems design, focused on software development, data science and web architecture.",
          position: 'right',
        },
        {
          id: 'edu-2',
          title: "Preparatory Engineering Training",
          organization: 'Saint Jean University Institute',
          period: "2021 - 2022",
          description: "Integrated preparatory classes (Mathematics, Physics, Computer Science).",
          position: 'left',
        },
        {
          id: 'edu-3',
          title: 'Baccalaureate D (Mathematics and Life Sciences)',
          organization: 'Collège Vogt',
          period: '2021',
          description: "Obtained scientific Baccalaureate with honors.",
          position: 'right',
        },
      ]);
    }
    
    return of([
      {
        id: 'edu-1',
        title: "Ingénierie des Systèmes d'Information",
        organization: 'Saint Jean Ingénieur | Yaoundé',
        period: "2022 - 2027",
        description: "Cycle ingénieur en conception de systèmes d'information, focalisé sur le développement logiciel, la data science et l'architecture web.",
        position: 'right',
      },
      {
        id: 'edu-2',
        title: "Formation Préparatoire Ingénieur",
        organization: 'Institut Universitaire Saint Jean',
        period: "2021 - 2022",
        description: "Classes préparatoires intégrées (Mathématiques, Physique, Informatique).",
        position: 'left',
      },
      {
        id: 'edu-3',
        title: 'Baccalauréat D (Mathématiques et SVT)',
        organization: 'Collège Vogt',
        period: '2021',
        description: "Obtention du Baccalauréat scientifique avec mention.",
        position: 'right',
      },
    ]);
  }

  getCertifications(): Observable<Certification[]> {
    const lang = this.languageService.currentLanguage();
    
    if (lang === 'en') {
      return of([
        {
          id: 'cert-1',
          title: 'IBM Data Science Professional Certificate',
          issuer: 'IBM',
          date: 'Certified',
          imageUrl: '/Certifs_image/IBM_Certifs/IBM_image.png',
          credentialUrl: 'https://www.credly.com/badges/cf1b2b0f-2c83-4cf8-af20-4862333cf5b2/public_url',
          skills: ['Data Science', 'Python', 'SQL', 'Data Analysis', 'Machine Learning'],
        },
        {
          id: 'cert-2',
          title: 'Google Data Analytics',
          issuer: 'Google',
          date: 'In Progress',
          imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/1b/03f7b04fc511e8a7b7bb5c9e6b0e1e/Google-DA-Logo.png',
          skills: ['Data Analysis', 'Spreadsheets', 'SQL', 'Tableau', 'R Programming'],
        },
        {
          id: 'cert-3',
          title: 'Microsoft Office Specialist: Word Associate (Office 2019)',
          issuer: 'Microsoft',
          date: 'Certified',
          imageUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
          credentialUrl: 'https://www.credly.com/badges/e39ff19f-0de4-4c61-b14d-c7420685b1d0/public_url',
          skills: ['Microsoft Word', 'Document Formatting', 'Office 2019', 'Productivity'],
        },
      ]);
    }
    
    return of([
      {
        id: 'cert-1',
        title: 'IBM Data Science Professional Certificate',
        issuer: 'IBM',
        date: 'Certifié',
        imageUrl: '/Certifs_image/IBM_Certifs/IBM_image.png',
        credentialUrl: 'https://www.credly.com/badges/cf1b2b0f-2c83-4cf8-af20-4862333cf5b2/public_url',
        skills: ['Data Science', 'Python', 'SQL', 'Data Analysis', 'Machine Learning'],
      },
      {
        id: 'cert-2',
        title: 'Google Data Analytics',
        issuer: 'Google',
        date: 'En cours',
        imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/1b/03f7b04fc511e8a7b7bb5c9e6b0e1e/Google-DA-Logo.png',
        skills: ['Data Analysis', 'Spreadsheets', 'SQL', 'Tableau', 'R Programming'],
      },
      {
        id: 'cert-3',
        title: 'Microsoft Office Specialist: Word Associate (Office 2019)',
        issuer: 'Microsoft',
        date: 'Certifié',
        imageUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
        credentialUrl: 'https://www.credly.com/badges/e39ff19f-0de4-4c61-b14d-c7420685b1d0/public_url',
        skills: ['Microsoft Word', 'Document Formatting', 'Office 2019', 'Productivity'],
      },
    ]);
  }

  getVolunteers(): Observable<Volunteer[]> {
    const lang = this.languageService.currentLanguage();
    
    if (lang === 'en') {
      return of([
        {
          id: '1',
          title: "ML Workshop Leader",
          organization: 'Robotics Club of Saint Jean Ingénieur',
          period: '2025 - Present',
          description: "Animation and coordination of the Machine Learning workshop, training members in ML concepts and tools",
          status: 'en cours',
        },
        {
          id: '2',
          title: 'Liturgical Club Member',
          organization: "University Parish of Saint Jean University Institute",
          period: '2023 - Present',
          description: 'Active participation in liturgical and spiritual activities of the university parish',
          status: 'en cours',
        },
      ]);
    }
    
    return of([
      {
        id: '1',
        title: "Responsable de l'atelier ML",
        organization: 'Club Robotique de Saint Jean Ingénieur',
        period: '2025 - Présent',
        description: "Animation et coordination de l'atelier Machine Learning, formation des membres aux concepts et outils de ML",
        status: 'en cours',
      },
      {
        id: '2',
        title: 'Membre du club liturgique',
        organization: "Paroisse Universitaire de l'Institut Universitaire de Saint Jean",
        period: '2023 - Présent',
        description: 'Participation active aux activités liturgiques et spirituelles de la paroisse universitaire',
        status: 'en cours',
      },
    ]);
  }
}
