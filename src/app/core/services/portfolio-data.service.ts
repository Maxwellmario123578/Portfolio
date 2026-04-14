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
          githubUrl: 'https://github.com/Maxwellmario123578/eKIOSQUE_DASHBOARD.git',
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
          title: "Film Audience Prediction with AI",
          description: "Smart tool that predicts if a film will appeal to an Afro-descendant audience using artificial intelligence and data analysis",
          imageUrl: 'Projet_images/ML_audiance/image.png',
          images: ['Projet_images/ML_audiance/image.png'],
          technologies: ['Python', 'AI', 'Data Analysis'],
          fullDescription: 'An intelligent system that helps predict which films will resonate with specific audiences. Using artificial intelligence and data analysis, this tool can anticipate audience preferences to help filmmakers and distributors make better decisions. The system was trained on diverse data to provide accurate predictions.',
          githubUrl: 'https://github.com/Maxwellmario123578/ml-prediction-film.git',
          features: [
            "AI-powered predictions for audience preferences",
            "Easy-to-understand results and insights",
            'Helps filmmakers target the right audience',
          ],
          category: 'Artificial Intelligence',
          date: '2025',
          status: 'terminé',
        },
        {
          id: '3',
          title: 'Equipment Management Application',
          description: "Collaborative development (team of 3) of a web application for equipment lifecycle management, centralizing data, automating maintenance tracking and ensuring operation traceability.",
          imageUrl: 'Projet_images/confidential-project.svg',
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
          isConfidential: true,
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
          githubUrl: 'https://gitlab.com/Maxwellmario123578/WillBank_Project.git',
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
          id: '8',
          title: 'EQuizz – Teaching Quality Evaluation Platform',
          description: "Led a team of 3 as Lead Developer for this full-stack application that allows students to evaluate professors at the end of the semester, measuring teaching quality and student satisfaction.",
          imageUrl: 'Projet_images/EQuiz/Admin_login.png',
          images: [
            'Projet_images/EQuiz/Admin_login.png',
            'Projet_images/EQuiz/Admin_Creer_Eval.png',
            'Projet_images/EQuiz/Admin_Creer_Formul.png',
            'Projet_images/EQuiz/Admin_gest_utilisateur.png',
            'Projet_images/EQuiz/Ecran_Accueil_2.png',
            'Projet_images/EQuiz/Ecran_tel_1.png',
          ],
          technologies: ['React native', 'Node.js', 'Clean Architecture', 'GitLab', 'CI/CD', 'Trello', 'Agile Scrum'],
          fullDescription: "Design and development of EQuizz, a platform for evaluating teaching quality through student feedback at the end of each semester. This project strictly follows Clean Architecture principles to ensure modularity and maintainability. As Lead Developer, I directed a team of 3 people, managing the creation of UI mockups, implementing a robust Node.js backend and an interactive React frontend. The analytical engine converts student responses into actionable insights for educational quality improvement.",
          githubUrl: 'https://gitlab.com/Maxwellmario123578/equizz',
          liveUrl: 'https://www.figma.com/design/A9xWzFaDcdB8UUTlVQT5N6/EQUIZZ?node-id=0-1&p=f&t=uzmEgUZbgJALT7Kr-0',
          features: [
            'Lead Developer for a team of 3',
            'Solid modular Clean Architecture implementation',
            'Anonymous teacher evaluation system by students',
            'End-of-semester feedback collection and analysis',
            'Teaching quality and student satisfaction measurement',
            'Detailed report generation for academic administration',
            'CI/CD for automated testing and continuous deployment',
          ],
          category: 'Web Development / Education',
          date: '2025',
          status: 'terminé',
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
        {
          id: '10',
          title: 'AMNESCH – Secure Educational Digital Library',
          description: "Innovative platform designed to democratize access to educational resources while ensuring strict protection of authors' intellectual property through advanced DRM and SCRUM methodology.",
          imageUrl: 'Projet_images/En_cours/A_venir.jpg',
          technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'GitHub', 'SCRUM Methodology'],
          fullDescription: "AMNESCH is an innovative platform designed to democratize access to educational resources while ensuring strict protection of authors' intellectual property. The project addresses a major issue: how to distribute quality educational content (books, courses, past exams) while preventing piracy and illegal redistribution. The workflow is managed following agile SCRUM methodology with regular sprints and iterative progress.\n\nTechnical highlights:\n- Mobile (Frontend): React Native with Expo and TypeScript, Expo Router for navigation, and Expo Secure Store for sensitive data.\n- Backend: Node.js/Express, PostgreSQL.\n- Proprietary DRM System: Dynamic watermarking to discourage illegal sharing and static file analysis (PDF scanner).",
          liveUrl: 'https://www.figma.com/design/pihjSiqFwqQ231T3g19ODP/Amnesh?node-id=0-1&p=f&t=B0fslg7pLDAzhAT5-0',
          features: [
            'Secure Digital Rights Management (DRM)',
            'Dynamic Watermarking with buyer identity',
            'Agile SCRUM workflow management',
            'Administrative Dashboard for monitoring and analytics'
          ],
          category: 'Mobile Full-stack / Security',
          date: '2025 - Present',
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
        githubUrl: 'https://github.com/Maxwellmario123578/eKIOSQUE_DASHBOARD.git',
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
        title: "Prédiction d'audience de films avec l'IA",
        description: "Outil intelligent qui prédit si un film plaira à un public Afrodescendant en utilisant l'intelligence artificielle et l'analyse de données",
        imageUrl: 'Projet_images/ML_audiance/image.png',
        images: ['Projet_images/ML_audiance/image.png'],
        technologies: ['Python', 'Intelligence Artificielle', 'Analyse de données'],
        fullDescription: 'Un système intelligent qui aide à prédire quels films vont plaire à des audiences spécifiques. En utilisant l\'intelligence artificielle et l\'analyse de données, cet outil peut anticiper les préférences du public pour aider les cinéastes et distributeurs à prendre de meilleures décisions. Le système a été entraîné sur des données variées pour fournir des prédictions précises.',
        githubUrl: 'https://github.com/Maxwellmario123578/ml-prediction-film.git',
        features: [
          "Prédictions alimentées par l'IA pour les préférences du public",
          "Résultats faciles à comprendre",
          'Aide les cinéastes à cibler le bon public',
        ],
        category: 'Intelligence Artificielle',
        date: '2025',
        status: 'terminé',
      },
      {
        id: '3',
        title: 'Application de Gestion des équipements',
        description: "Développement collaboratif(En équipe de 3) d'une application web de gestion du cycle de vie des équipements, centralisant les données, automatisant le suivi des maintenances et assurant la traçabilité des opérations.",
        imageUrl: 'Projet_images/confidential-project.svg',
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
        isConfidential: true,
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
        githubUrl: 'https://gitlab.com/Maxwellmario123578/WillBank_Project.git',
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
        id: '8',
        title: "EQuizz – Plateforme d'évaluation de la qualité de l'enseignement",
        description: "En tant que Lead Developpeur, j'ai dirigé une équipe de 3 personnes pour le développement d'EQuizz, une application permettant aux étudiants d'évaluer les enseignants en fin de semestre afin de mesurer la qualité de l'enseignement et leur satisfaction.",
        imageUrl: 'Projet_images/EQuiz/Admin_login.png',
        images: [
          'Projet_images/EQuiz/Admin_login.png',
          'Projet_images/EQuiz/Admin_Creer_Eval.png',
          'Projet_images/EQuiz/Admin_Creer_Formul.png',
          'Projet_images/EQuiz/Admin_gest_utilisateur.png',
          'Projet_images/EQuiz/Ecran_Accueil_2.png',
          'Projet_images/EQuiz/Ecran_tel_1.png',
        ],
        technologies: ['React native', 'Node.js', 'Clean Architecture', 'GitLab', 'CI/CD', 'Trello', 'Agile Scrum'],
        fullDescription: "Conception et développement d'EQuizz, une application dédiée à l'évaluation de la qualité de l'enseignement par les étudiants en fin de semestre. Le projet suit strictement les principes de la Clean Architecture pour garantir modularité et maintenabilité. L'objectif est de mesurer la satisfaction des étudiants et d'identifier les axes d'amélioration pédagogique. En tant que Lead Developpeur, j'ai dirigé une équipe de 3 personnes, supervisant la création des maquettes UI, l'implémentation du backend Node.js et du frontend React. Le système intègre un moteur d'analyse pour transformer les retours étudiants en rapports décisionnels pour l'administration.",
        githubUrl: 'https://gitlab.com/Maxwellmario123578/equizz',
        liveUrl: 'https://www.figma.com/design/A9xWzFaDcdB8UUTlVQT5N6/EQUIZZ?node-id=0-1&p=f&t=uzmEgUZbgJALT7Kr-0',
        features: [
          'Lead Developpeur (Direction d\'une équipe de 3)',
          'Mise en œuvre d\'une Clean Architecture robuste',
          'Évaluation anonyme des enseignants par les étudiants',
          'Collecte et analyse des retours d\'expérience en fin de semestre',
          'Mesure de la satisfaction globale et de la qualité pédagogique',
          'Génération de rapports détaillés pour l\'administration académique',
          'CI/CD pour tests automatisés et déploiements continus',
        ],
        category: 'Développement Web / Éducation',
        date: '2025',
        status: 'terminé',
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
      {
        id: '10',
        title: 'AMNESCH – Bibliothèque Numérique Éducative Sécurisée',
        description: "Plateforme innovante conçue pour démocratiser l’accès aux ressources éducatives tout en garantissant une protection stricte de la propriété intellectuelle des auteurs via SCRUM.",
        imageUrl: 'Projet_images/En_cours/A_venir.jpg',
        technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'GitHub', 'Méthodologie SCRUM'],
        fullDescription: "AMNESCH est une plateforme innovante conçue pour démocratiser l’accès aux ressources éducatives tout en garantissant une protection stricte de la propriété intellectuelle des auteurs. Le projet répond à une problématique majeure : comment diffuser des contenus pédagogiques de qualité (livres, cours, annales) tout en empêchant le piratage et la redistribution illégale ? Le flux de travail est géré suivant la méthodologie agile SCRUM avec des sprints réguliers et un avancement itératif.\n\nPoints forts techniques :\n- Mobile (Frontend) : React Native avec Expo et TypeScript, Expo Router pour la navigation, et Expo Secure Store pour le stockage sécurisé.\n- Backend : Node.js/Express, PostgreSQL.\n- Système de DRM Propriétaire : Watermarking dynamique pour dissuader le partage illégal et analyse statique des fichiers (PDF scanner).",
        liveUrl: 'https://www.figma.com/design/pihjSiqFwqQ231T3g19ODP/Amnesh?node-id=0-1&p=f&t=B0fslg7pLDAzhAT5-0',
        features: [
          'Gestion des droits numériques (DRM)',
          'Watermarking dynamique avec identité de l\'acheteur',
          'Gestion de projet agile SCRUM',
          'Dashboard d\'administration pour le pilotage et analytique'
        ],
        category: 'Mobile Full-stack / Sécurité',
        date: '2025 - Présent',
        status: 'en cours',
      },
    ];
  }

  getProjects(): Observable<Project[]> {
    const lang = this.languageService.currentLanguage();
    const projects = this.getProjectsData(lang);
    return of(
      projects.sort((a, b) => {
        if (a.status === 'terminé' && b.status !== 'terminé') return -1;
        if (a.status !== 'terminé' && b.status === 'terminé') return 1;
        return 0;
      })
    );
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
          skills: ['Python', 'JavaScript', 'SQL', 'Java', 'R'],
        },
        {
          title: 'Frameworks',
          skills: ['React Native', 'Node.js', 'SpringBoot', 'Angular', 'TailWindcss'],
        },
        {
          title: 'Data Science',
          skills: ['Numpy', 'Scikit-learn', 'Pandas'],
        },
        {
          title: 'Tools & Platforms',
          skills: ['Docker', 'Trello', 'GitLab & GitHub', 'Figma', 'Google BigQuery', 'Excel', 'Google Sheets', 'Model Context Protocol (MCP)', 'Claude AI Agents'],
        },
      ]);
    }

    return of([
      {
        title: 'Langages',
        skills: ['Python', 'JavaScript', 'SQL', 'Java', 'R'],
      },
      {
        title: 'Frameworks',
        skills: ['React Native', 'Node.js', 'SpringBoot', 'Angular', 'TailWindcss'],
      },
      {
        title: 'Data Science',
        skills: ['Numpy', 'Scikit-learn', 'Pandas'],
      },
      {
        title: 'Outils & Plateformes',
        skills: ['Docker', 'Trello', 'GitLab & GitHub', 'Figma', 'Google BigQuery', 'Excel', 'Google Sheets', 'Model Context Protocol (MCP)', 'Claude AI Agents'],
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
          url: 'https://institutsaintjean.org/',
          period: "2022 - 2027",
          description: "Engineering cycle in information systems design, focused on software development, data science and web architecture.",
          position: 'right',
        },
        {
          id: 'edu-3',
          title: 'Baccalaureate D (Mathematics and Life Sciences)',
          organization: 'Collège Vogt',
          url: 'https://fr.wikipedia.org/wiki/Coll%C3%A8ge_Fran%C3%A7ois-Xavier-Vogt',
          period: '2022',
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
        url: 'https://institutsaintjean.org/',
        period: "2022 - 2027",
        description: "Cycle ingénieur en conception de systèmes d'information, focalisé sur le développement logiciel, la data science et l'architecture web.",
        position: 'right',
      },
      {
        id: 'edu-3',
        title: 'Baccalauréat D (Mathématiques et SVT)',
        organization: 'Collège Vogt',
        url: 'https://fr.wikipedia.org/wiki/Coll%C3%A8ge_Fran%C3%A7ois-Xavier-Vogt',
        period: '2022',
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
          id: 'cert-4',
          title: 'Introduction to Agent skills',
          issuer: 'Anthropic',
          date: 'Certified',
          imageUrl: '/Certifs_image/IBM_Certifs/Antropic_Completion_AI_Agent.png',
          credentialUrl: 'https://verify.skilljar.com/c/cmv7mvbzpr9w',
          skills: ['Anthropic', 'Claude', 'AI Agents', 'Tool Use'],
          description: "Learning the fundamental concepts to equip a Claude model with action capabilities. Training focused on the structure of a 'Skill': from name definition and technical description to input parameter configuration. Mastery of the iterative flow between the user, the model and the tool, allowing the AI to correctly select and formulate requests to external functions.",
        },
        {
          id: 'cert-1',
          title: 'IBM Data Science Professional Certificate',
          issuer: 'IBM',
          date: 'Certified',
          imageUrl: '/Certifs_image/IBM_Certifs/IBM_image.png',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/FZE10YBKGRUL',
          skills: ['Data Science', 'Python', 'SQL', 'Data Analysis', 'Machine Learning'],
          description: "Intensive training covering the entire data lifecycle: from extraction (SQL) to predictive modeling (Machine Learning with Python). Mastery of Pandas, Scikit-learn libraries and data visualization to translate raw data into strategic decisions.",
        },
        {
          id: 'cert-2',
          title: 'Google Data Analytics',
          issuer: 'Google',
          date: 'Certified',
          imageUrl: '/Certifs_image/IBM_Certifs/Google_certif.png',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/7HDM657JEEQF',
          skills: ['Data Analysis', 'Spreadsheets', 'SQL', 'Tableau', 'R Programming'],
          description: "Certification focused on results-oriented data analysis. Proficiency in data cleaning, statistical analysis and visual communication (Tableau). Mastery of analytical thinking to identify trends and optimize business processes from complex datasets.",
        },
      ]);
    }

    return of([
      {
        id: 'cert-4',
        title: "Introduction aux compétences d'Agent",
        issuer: 'Anthropic',
        date: 'Certifié',
        imageUrl: '/Certifs_image/IBM_Certifs/Antropic_Completion_AI_Agent.png',
        credentialUrl: 'https://verify.skilljar.com/c/cmv7mvbzpr9w',
        skills: ['Anthropic', 'Claude', 'Agents IA', 'Tool Use'],
        description: "Apprentissage des concepts fondamentaux pour doter un modèle Claude de capacités d'action. Formation axée sur la structure d'un \"Skill\" (compétence) : de la définition du nom et de la description technique à la configuration des paramètres d'entrée. Maîtrise du flux itératif entre l'utilisateur, le modèle et l'outil, permettant à l'IA de sélectionner et de formuler correctement des requêtes vers des fonctions externes.",
      },
      {
        id: 'cert-1',
        title: 'IBM Data Science Professional Certificate',
        issuer: 'IBM',
        date: 'Certifié',
        imageUrl: '/Certifs_image/IBM_Certifs/IBM_image.png',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/FZE10YBKGRUL',
        skills: ['Data Science', 'Python', 'SQL', 'Data Analysis', 'Machine Learning'],
        description: "Formation intensive couvrant l'ensemble du cycle de vie de la donnée : de l'extraction (SQL) à la modélisation prédictive (Machine Learning avec Python). Maîtrise des bibliothèques Pandas, Scikit-learn et de la visualisation de données pour traduire des données brutes en décisions stratégiques.",
      },
      {
        id: 'cert-2',
        title: 'Google Data Analytics',
        issuer: 'Google',
        date: 'Certifié',
        imageUrl: '/Certifs_image/IBM_Certifs/Google_certif.png',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/7HDM657JEEQF',
        skills: ['Data Analysis', 'Spreadsheets', 'SQL', 'Tableau', 'R Programming'],
        description: "Certification axée sur l'analyse de données axée sur les résultats. Compétence en nettoyage de données, analyse statistique et communication visuelle (Tableau). Maîtrise de la pensée analytique pour identifier les tendances et optimiser les processus métiers à partir de jeux de données complexes.",
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
