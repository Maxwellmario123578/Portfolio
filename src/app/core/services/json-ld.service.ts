import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JsonLdService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  inject(): void {
    const schema = {
      '@context': 'https://schema.org/',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://portfoliomathurin.vercel.app/#person',
          name: 'Masewell Mathurin KONMENECK',
          alternateName: ['Masewell-Mathurin KONMENECK', 'Maxwell KONMENECK'],
          givenName: 'Masewell Mathurin',
          familyName: 'KONMENECK',
          jobTitle: "Étudiant en Ingénierie des Systèmes d'Information & Data Scientist",
          url: 'https://portfoliomathurin.vercel.app',
          image: {
            '@type': 'ImageObject',
            url: 'https://portfoliomathurin.vercel.app/Moi.png',
            description: 'Photo de profil de Masewell Mathurin KONMENECK',
          },
          sameAs: [
            'https://www.linkedin.com/in/masewell-mathurin-konmeneck/',
            'https://github.com/Maxwellmario123578',
            'https://gitlab.com/Maxwellmario123578',
          ],
          description:
            "Étudiant en ingénierie de conception informatique à Saint Jean Ingénieur (Yaoundé, Cameroun). Certifié IBM Data Science Professional et Google Data Analytics. Spécialiste en Machine Learning (XGBoost, Scikit-learn), développement Full-stack (Angular, Spring Boot, React Native), MLOps (Docker, AWS, FastAPI, Prometheus/Grafana) et Intelligence Artificielle.",
          knowsAbout: [
            'Python', 'Machine Learning', 'Artificial Intelligence', 'Data Science',
            'JavaScript', 'TypeScript', 'Angular', 'Spring Boot', 'React Native',
            'MLOps', 'Docker', 'SQL', 'XGBoost', 'FastAPI', 'AWS', 'Node.js',
            'SMOTEENN', 'Prometheus', 'Grafana', 'GitHub Actions', 'Microservices',
            'Model Context Protocol (MCP)', 'Claude AI Agents', 'RabbitMQ',
          ],
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Institut Saint Jean Ingénieur',
            address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' },
            url: 'https://institutsaintjean.org/',
          },
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'IBM Data Science Professional Certificate',
              credentialCategory: 'Professional Certificate',
              recognizedBy: { '@type': 'Organization', name: 'IBM' },
              url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/FZE10YBKGRUL',
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Google Data Analytics Certificate',
              credentialCategory: 'Professional Certificate',
              recognizedBy: { '@type': 'Organization', name: 'Google' },
              url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/7HDM657JEEQF',
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Model Context Protocol: Advanced Topics',
              credentialCategory: 'Course Certificate',
              recognizedBy: { '@type': 'Organization', name: 'Anthropic' },
              url: 'https://verify.skilljar.com/c/nb7ftfnact58',
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Introduction to Agent Skills',
              credentialCategory: 'Course Certificate',
              recognizedBy: { '@type': 'Organization', name: 'Anthropic' },
              url: 'https://verify.skilljar.com/c/cmv7mvbzpr9w',
            },
          ],
        },
        {
          '@type': 'ProfilePage',
          '@id': 'https://portfoliomathurin.vercel.app/#webpage',
          name: 'Portfolio de Masewell Mathurin KONMENECK — Data Scientist & Ingénieur Logiciel',
          url: 'https://portfoliomathurin.vercel.app/',
          description: 'Portfolio professionnel interactif présentant les projets, compétences et certifications de Masewell Mathurin KONMENECK.',
          about: { '@id': 'https://portfoliomathurin.vercel.app/#person' },
          dateModified: '2026-06-23',
          inLanguage: ['fr', 'en'],
        },
        {
          '@type': 'ItemList',
          name: 'Projets de Masewell Mathurin KONMENECK',
          description: 'Liste des projets réalisés en Data Science, MLOps, Développement Full-stack et Hackathons.',
          numberOfItems: 10,
          itemListElement: [
            { '@type': 'ListItem', position: 1, item: { '@type': 'SoftwareSourceCode', name: 'Détection de Fraude MLOps End-to-End', description: 'Pipeline MLOps complet pour détection de fraude bancaire en temps réel. Modèle XGBoost + SMOTEENN, déployé sur AWS EC2 avec FastAPI, Docker, Prometheus et Grafana. Pipeline CI/CD via GitHub Actions.', programmingLanguage: ['Python', 'Docker', 'YAML'], runtimePlatform: 'AWS EC2', url: 'https://portfoliomathurin.vercel.app/project/9', codeRepository: 'https://github.com/Maxwellmario123578/mlops-project' } },
            { '@type': 'ListItem', position: 2, item: { '@type': 'SoftwareSourceCode', name: 'Plateforme Bancaire Distribuée WillBank', description: 'Solution bancaire microservices avec Spring Boot, Angular, Docker, MySQL, RabbitMQ et Redis.', programmingLanguage: ['Java', 'TypeScript'], url: 'https://portfoliomathurin.vercel.app/project/5', codeRepository: 'https://gitlab.com/Maxwellmario123578/WillBank_Project.git' } },
            { '@type': 'ListItem', position: 3, item: { '@type': 'SoftwareSourceCode', name: "EQuizz – Évaluation de la qualité de l'enseignement", description: "Application mobile (React Native) et backend Node.js pour évaluation anonyme des enseignants. Clean Architecture, CI/CD GitLab, Agile SCRUM. Lead Developer d'une équipe de 3.", programmingLanguage: ['JavaScript', 'TypeScript'], url: 'https://portfoliomathurin.vercel.app/project/8', codeRepository: 'https://gitlab.com/Maxwellmario123578/equizz' } },
            { '@type': 'ListItem', position: 4, item: { '@type': 'SoftwareSourceCode', name: 'Hackathon Data4Change – CareMap Cameroun', description: 'Application web développée lors du hackathon Data4Change 2024, intégrant nettoyage de données CSV et visualisation pour solutions à impact social.', programmingLanguage: ['Python', 'JavaScript'], url: 'https://portfoliomathurin.vercel.app/project/hackathon-1', codeRepository: 'https://github.com/joanmelong/caremap-hackathon-2025' } },
            { '@type': 'ListItem', position: 5, item: { '@type': 'SoftwareSourceCode', name: 'Hackathon WFEO – Urban Resource Loop', description: "Système d'infrastructure circulaire combinant IA, Blockchain IoT pour valorisation des plastiques à Yaoundé. Smart contracts, Random Forest, bornes intelligentes.", programmingLanguage: ['Python'], url: 'https://portfoliomathurin.vercel.app/project/hackathon-2' } },
            { '@type': 'ListItem', position: 6, item: { '@type': 'SoftwareSourceCode', name: 'Tableau de bord e-KIOSQUE', description: 'Dashboard interactif avec Charts.js pour visualisation des KPIs en temps réel, exportation PDF/Excel/CSV, interface responsive.', programmingLanguage: ['JavaScript', 'HTML', 'CSS'], url: 'https://portfoliomathurin.vercel.app/project/1', codeRepository: 'https://github.com/Maxwellmario123578/eKIOSQUE_DASHBOARD.git' } },
            { '@type': 'ListItem', position: 7, item: { '@type': 'SoftwareSourceCode', name: "Prédiction d'audience de films par IA", description: "Système de Machine Learning prédicatif pour anticiper les préférences d'audience cinématographique.", programmingLanguage: ['Python'], url: 'https://portfoliomathurin.vercel.app/project/2', codeRepository: 'https://github.com/Maxwellmario123578/ml-prediction-film.git' } },
            { '@type': 'ListItem', position: 8, item: { '@type': 'SoftwareSourceCode', name: 'Application de gestion des notes (Python)', description: 'Application Python avec visualisations Matplotlib (Pie Chart, Spider Chart), exportation CSV et exécutable .exe.', programmingLanguage: ['Python'], url: 'https://portfoliomathurin.vercel.app/project/4' } },
            { '@type': 'ListItem', position: 9, item: { '@type': 'SoftwareSourceCode', name: 'Application de gestion des Emplois du Temps', description: 'Application microservices Spring Boot/Thymeleaf pour gestion des emplois du temps scolaires. Chef de projet.', programmingLanguage: ['Java'], url: 'https://portfoliomathurin.vercel.app/project/6', codeRepository: 'https://github.com/Maxwellmario123578/Planning_gest' } },
            { '@type': 'ListItem', position: 10, item: { '@type': 'SoftwareSourceCode', name: 'AMNESCH – Bibliothèque Numérique Éducative', description: 'Plateforme mobile (React Native + Expo) de diffusion de ressources éducatives avec DRM propriétaire, watermarking dynamique et backend Node.js/PostgreSQL.', programmingLanguage: ['TypeScript', 'JavaScript'], url: 'https://portfoliomathurin.vercel.app/project/10' } },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Quelles sont les compétences principales de Masewell Mathurin KONMENECK ?', acceptedAnswer: { '@type': 'Answer', text: 'Masewell Mathurin KONMENECK maîtrise la Data Science (Python, Machine Learning avec XGBoost/Scikit-learn, certifié IBM Data Science Professional), le développement Full-stack (Angular, Spring Boot, React Native, Node.js), le MLOps (Docker, AWS EC2/S3/ECR, FastAPI, Prometheus, Grafana, GitHub Actions CI/CD) et l\'Intelligence Artificielle appliquée (Agents IA, MCP Anthropic).' } },
            { '@type': 'Question', name: 'Quelles certifications possède Masewell Mathurin KONMENECK ?', acceptedAnswer: { '@type': 'Answer', text: 'Il possède 4 certifications professionnelles : IBM Data Science Professional Certificate (Coursera), Google Data Analytics Certificate (Coursera), Model Context Protocol Advanced Topics (Anthropic) et Introduction to Agent Skills (Anthropic). Toutes sont vérifiables en ligne.' } },
            { '@type': 'Question', name: 'Où Masewell Mathurin KONMENECK fait-il ses études ?', acceptedAnswer: { '@type': 'Answer', text: "Il est étudiant en Ingénierie des Systèmes d'Information à l'Institut Saint Jean Ingénieur (Yaoundé, Cameroun), une école d'ingénieurs reconnue. Il est en cycle ingénieur 2022-2027, avec une spécialisation en développement logiciel, Data Science et architecture web." } },
            { '@type': 'Question', name: 'Quels projets MLOps a réalisés Masewell Mathurin KONMENECK ?', acceptedAnswer: { '@type': 'Answer', text: "Son projet MLOps phare est un système de détection de fraude bancaire en temps réel déployé sur AWS. Il utilise XGBoost avec rééquilibrage SMOTEENN, entraîné sur 500 000 transactions. L'infrastructure comprend FastAPI avec load balancing Nginx, monitoring Prometheus/Grafana, CI/CD GitHub Actions et backup automatique S3 toutes les 6h." } },
            { '@type': 'Question', name: "Quelle est l'expérience en hackathon de Masewell Mathurin KONMENECK ?", acceptedAnswer: { '@type': 'Answer', text: "Il a participé à deux hackathons : Data4Change 2024 (développement d'une application CareMap pour le Cameroun) et WFEO 2024 (développement d'Urban Resource Loop, un système d'infrastructure circulaire combinant IA, Blockchain et IoT pour la valorisation des déchets plastiques à Yaoundé)." } },
            { '@type': 'Question', name: 'Comment contacter Masewell Mathurin KONMENECK ?', acceptedAnswer: { '@type': 'Answer', text: 'Masewell Mathurin KONMENECK est joignable via LinkedIn (https://www.linkedin.com/in/masewell-mathurin-konmeneck/), GitHub (https://github.com/Maxwellmario123578), GitLab (https://gitlab.com/Maxwellmario123578), ou via le formulaire de contact de son portfolio (https://portfoliomathurin.vercel.app).' } },
          ],
        },
      ],
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(schema));
    this.renderer.appendChild(document.head, script);
  }
}
