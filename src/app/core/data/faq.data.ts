export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Questions fréquentes affichées sur /portfolio.
 * Source unique : le même texte alimente la section visible et le JSON-LD FAQPage,
 * pour que les données structurées correspondent exactement au contenu de la page.
 */
export const FAQ_FR: FaqItem[] = [
  {
    question: 'Quelles sont les compétences principales de Masewell Mathurin KONMENECK ?',
    answer:
      "Masewell Mathurin KONMENECK maîtrise la Data Science (Python, Machine Learning avec XGBoost et Scikit-learn, certifié IBM Data Science Professional par Coursera), le développement Full-stack (Angular, Spring Boot, React Native, Node.js), le MLOps (Docker, AWS EC2/S3/ECR, FastAPI, Prometheus, Grafana, pipeline CI/CD GitHub Actions) et l'Intelligence Artificielle appliquée (Model Context Protocol Anthropic, Agents IA Claude).",
  },
  {
    question: 'Quelles certifications professionnelles possède Masewell Mathurin KONMENECK ?',
    answer:
      'Il est titulaire de 4 certifications professionnelles vérifiables : IBM Data Science Professional Certificate (délivré par IBM via Coursera, couvrant Python, SQL, Machine Learning et Pandas), Google Data Analytics Certificate (délivré par Google via Coursera, couvrant SQL, Tableau, R et la pensée analytique), Model Context Protocol: Advanced Topics (délivré par Anthropic, couvrant MCP avancé, sampling et sécurité IA) et Introduction to Agent Skills (délivré par Anthropic, couvrant les agents IA et le Tool Use).',
  },
  {
    question: 'Où Masewell Mathurin KONMENECK fait-il ses études ?',
    answer:
      "Il étudie à l'Institut Saint Jean Ingénieur à Yaoundé, Cameroun, en cycle ingénieur en Ingénierie des Systèmes d'Information (2022–2027). Il a également obtenu son Baccalauréat D (Mathématiques et SVT) au Collège Vogt de Yaoundé en 2022.",
  },
  {
    question: 'Quels projets MLOps Masewell Mathurin KONMENECK a-t-il réalisés ?',
    answer:
      "Son projet MLOps phare est un pipeline End-to-End de détection de fraude bancaire en temps réel, déployé sur AWS. Il utilise XGBoost avec rééquilibrage SMOTEENN, entraîné sur 500 000 transactions du dataset Kaggle Credit Card Fraud 2025. L'architecture cloud comprend 2 instances FastAPI avec load balancing Nginx, monitoring Prometheus et dashboards Grafana, CI/CD GitHub Actions, et backup automatique vers S3 toutes les 6 heures. Le code source est disponible sur GitHub.",
  },
  {
    question: "Quelle est l'expérience en hackathon de Masewell Mathurin KONMENECK ?",
    answer:
      "Il a participé à deux hackathons internationaux : Data4Change 2024 (développement de CareMap Cameroun, application d'impact social avec nettoyage de données CSV et visualisation) et WFEO 2024 (Urban Resource Loop, système d'économie circulaire combinant IA de vision par ordinateur, Blockchain IoT et Smart Contracts pour la valorisation des plastiques à Yaoundé).",
  },
  {
    question: 'Quels langages de programmation et technologies utilise Masewell Mathurin KONMENECK ?',
    answer:
      'Langages : Python, JavaScript, TypeScript, Java, SQL, R. Frameworks : Angular, Spring Boot, React Native, Node.js/Express. Data Science : XGBoost, Scikit-learn, Pandas, NumPy, Matplotlib, SMOTEENN. Outils & Plateformes : Docker, AWS (EC2, S3, ECR), FastAPI, Prometheus, Grafana, GitHub Actions, RabbitMQ, Redis, Figma, Google BigQuery, Model Context Protocol (MCP), Agents IA Anthropic.',
  },
  {
    question: 'Comment contacter Masewell Mathurin KONMENECK ?',
    answer:
      "Masewell Mathurin KONMENECK est joignable via LinkedIn (linkedin.com/in/masewell-mathurin-konmeneck/), GitHub (github.com/Maxwellmario123578), GitLab (gitlab.com/Maxwellmario123578), ou via le formulaire de contact de son portfolio à l'adresse www.masewellmathurin.fr.",
  },
];
