# Architecture du Portfolio Angular

## Structure du Projet - Clean Architecture & MVC

### 📁 Organisation des Dossiers

```
src/app/
├── core/                    # Couche métier (Business Logic)
│   ├── models/             # Modèles de données (Entities)
│   │   ├── project.model.ts
│   │   ├── skill.model.ts
│   │   ├── timeline-item.model.ts
│   │   └── contact-form.model.ts
│   └── services/           # Services métier (Use Cases)
│       ├── portfolio-data.service.ts
│       └── contact.service.ts
│
├── features/               # Modules fonctionnels (Presentation Layer)
│   ├── hero/              # Section Hero
│   ├── about/             # Section À propos
│   ├── projects/          # Section Projets
│   ├── skills/            # Section Compétences
│   ├── education/         # Section Formation
│   └── contact/           # Section Contact
│
├── layout/                # Composants de mise en page
│   ├── header/           # En-tête
│   └── footer/           # Pied de page
│
├── app.ts                # Composant racine
└── app.config.ts         # Configuration de l'application
```

## Principes Appliqués

### 1. Clean Architecture

**Séparation des Responsabilités :**
- **Core Layer** : Contient la logique métier pure, indépendante du framework
- **Presentation Layer** : Composants Angular qui affichent les données
- **Services** : Gèrent la récupération et la manipulation des données

### 2. Pattern MVC

**Model (Modèles) :**
- Fichiers dans `core/models/`
- Définissent la structure des données
- Interfaces TypeScript pour le typage fort

**View (Vues) :**
- Templates HTML des composants
- Affichage des données via data binding
- Utilisation de Tailwind CSS pour le style

**Controller (Contrôleurs) :**
- Classes TypeScript des composants
- Gèrent la logique de présentation
- Interagissent avec les services

### 3. Composants Standalone

Tous les composants utilisent l'approche standalone d'Angular 20 :
- Pas de modules NgModule
- Imports directs dans les composants
- Configuration simplifiée

## Flux de Données

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERACTION                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  PRESENTATION LAYER                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Components (Controllers)                            │   │
│  │  - HeroComponent                                     │   │
│  │  - ProjectsComponent                                 │   │
│  │  - ContactComponent                                  │   │
│  │  - etc.                                              │   │
│  └──────────────────┬───────────────────────────────────┘   │
└─────────────────────┼───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS LAYER                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Services (Use Cases)                                │   │
│  │  - PortfolioDataService                              │   │
│  │  - ContactService                                    │   │
│  └──────────────────┬───────────────────────────────────┘   │
└─────────────────────┼───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                     DATA LAYER                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Models (Entities)                                   │   │
│  │  - Project                                           │   │
│  │  - SkillCategory                                     │   │
│  │  - TimelineItem                                      │   │
│  │  - ContactForm                                       │   │
│  └──────────────────┬───────────────────────────────────┘   │
└─────────────────────┼───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    VIEW (Templates)                          │
│  - HTML Templates avec Data Binding                          │
│  - Tailwind CSS pour le style                                │
└─────────────────────────────────────────────────────────────┘
```

## Exemples d'Implémentation

### Service (Use Case)
```typescript
@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getProjects(): Observable<Project[]> {
    // Logique métier
  }
}
```

### Component (Controller)
```typescript
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private portfolioDataService: PortfolioDataService) {}
  
  ngOnInit(): void {
    this.portfolioDataService.getProjects().subscribe(
      projects => this.projects = projects
    );
  }
}
```

### Model (Entity)
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}
```

## Avantages de cette Architecture

1. **Maintenabilité** : Code organisé et facile à maintenir
2. **Testabilité** : Services et composants facilement testables
3. **Scalabilité** : Structure extensible pour de nouvelles fonctionnalités
4. **Réutilisabilité** : Composants et services réutilisables
5. **Séparation des préoccupations** : Chaque couche a sa responsabilité

## Commandes

```bash
# Démarrer le serveur de développement
npm start

# Build de production
npm run build

# Tests
npm test
```
