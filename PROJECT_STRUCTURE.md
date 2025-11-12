# Structure Complète du Projet

## 📁 Arborescence Détaillée

```
MonPortfolio/
│
├── 📄 Configuration Files
│   ├── .editorconfig                    # Configuration de l'éditeur
│   ├── .gitignore                       # Fichiers ignorés par Git
│   ├── angular.json                     # Configuration Angular CLI
│   ├── package.json                     # Dépendances npm
│   ├── package-lock.json                # Lock des dépendances
│   ├── tsconfig.json                    # Configuration TypeScript
│   ├── tsconfig.app.json                # Config TS pour l'app
│   └── tsconfig.spec.json               # Config TS pour les tests
│
├── 📚 Documentation
│   ├── README.md                        # Documentation principale
│   ├── ARCHITECTURE.md                  # Architecture du projet
│   ├── COMPONENTS.md                    # Documentation des composants
│   ├── DEVELOPMENT_GUIDE.md             # Guide de développement
│   ├── QUICK_START.md                   # Guide de démarrage rapide
│   ├── CHANGELOG.md                     # Historique des modifications
│   └── PROJECT_STRUCTURE.md             # Ce fichier
│
├── 🔧 .vscode/
│   ├── settings.json                    # Paramètres VSCode
│   └── extensions.json                  # Extensions recommandées
│
├── 📦 public/
│   └── favicon.ico                      # Icône du site
│
├── 🎨 src/
│   ├── 📄 index.html                    # Page HTML principale
│   ├── 📄 main.ts                       # Point d'entrée de l'app
│   ├── 📄 styles.scss                   # Styles globaux
│   │
│   └── 🚀 app/
│       │
│       ├── 📄 app.ts                    # Composant racine
│       ├── 📄 app.config.ts             # Configuration de l'app
│       ├── 📄 app.routes.ts             # Routes (si nécessaire)
│       ├── 📄 app.scss                  # Styles du composant racine
│       ├── 📄 app.html                  # Template du composant racine
│       └── 📄 app.spec.ts               # Tests du composant racine
│       │
│       ├── 🎯 core/                     # COUCHE MÉTIER
│       │   │
│       │   ├── 📊 models/               # Modèles de données
│       │   │   ├── project.model.ts
│       │   │   ├── skill.model.ts
│       │   │   ├── timeline-item.model.ts
│       │   │   ├── contact-form.model.ts
│       │   │   └── index.ts             # Barrel export
│       │   │
│       │   └── 🔧 services/             # Services métier
│       │       ├── portfolio-data.service.ts
│       │       └── contact.service.ts
│       │
│       ├── 🎨 features/                 # COMPOSANTS FONCTIONNELS
│       │   │
│       │   ├── 🏠 hero/
│       │   │   ├── hero.component.ts
│       │   │   ├── hero.component.html
│       │   │   └── hero.component.scss
│       │   │
│       │   ├── 👤 about/
│       │   │   ├── about.component.ts
│       │   │   ├── about.component.html
│       │   │   └── about.component.scss
│       │   │
│       │   ├── 💼 projects/
│       │   │   ├── projects.component.ts
│       │   │   ├── projects.component.html
│       │   │   └── projects.component.scss
│       │   │
│       │   ├── 🛠️ skills/
│       │   │   ├── skills.component.ts
│       │   │   ├── skills.component.html
│       │   │   └── skills.component.scss
│       │   │
│       │   ├── 🎓 education/
│       │   │   ├── education.component.ts
│       │   │   ├── education.component.html
│       │   │   └── education.component.scss
│       │   │
│       │   └── 📧 contact/
│       │       ├── contact.component.ts
│       │       ├── contact.component.html
│       │       └── contact.component.scss
│       │
│       └── 🏗️ layout/                   # COMPOSANTS DE MISE EN PAGE
│           │
│           ├── 📌 header/
│           │   ├── header.component.ts
│           │   ├── header.component.html
│           │   └── header.component.scss
│           │
│           └── 📍 footer/
│               ├── footer.component.ts
│               ├── footer.component.html
│               └── footer.component.scss
│
└── 📦 node_modules/                     # Dépendances (généré)
```

## 🎯 Organisation par Couches

### 1️⃣ Core Layer (Logique Métier)
**Emplacement :** `src/app/core/`

**Responsabilité :** Contient la logique métier pure, indépendante du framework

**Contenu :**
- **Models** : Définitions des structures de données
- **Services** : Logique métier et gestion des données

**Principe :** Cette couche ne doit jamais dépendre de la couche présentation

---

### 2️⃣ Features Layer (Présentation)
**Emplacement :** `src/app/features/`

**Responsabilité :** Composants qui affichent les données et gèrent les interactions utilisateur

**Contenu :**
- Composants fonctionnels (hero, about, projects, etc.)
- Templates HTML
- Styles SCSS spécifiques

**Principe :** Ces composants utilisent les services du Core Layer

---

### 3️⃣ Layout Layer (Structure)
**Emplacement :** `src/app/layout/`

**Responsabilité :** Composants de structure de l'application

**Contenu :**
- Header (navigation)
- Footer (pied de page)

**Principe :** Composants réutilisables pour la structure globale

---

## 📊 Statistiques du Projet

### Fichiers par Type

| Type | Nombre | Description |
|------|--------|-------------|
| TypeScript (.ts) | 20 | Composants, services, models |
| HTML (.html) | 9 | Templates des composants |
| SCSS (.scss) | 9 | Styles des composants |
| Markdown (.md) | 7 | Documentation |
| JSON | 5 | Configuration |
| **Total** | **50** | Fichiers sources |

### Composants

| Catégorie | Nombre | Composants |
|-----------|--------|------------|
| Layout | 2 | Header, Footer |
| Features | 6 | Hero, About, Projects, Skills, Education, Contact |
| Root | 1 | App |
| **Total** | **9** | Composants |

### Services

| Service | Responsabilité |
|---------|----------------|
| PortfolioDataService | Gestion des données du portfolio |
| ContactService | Gestion du formulaire de contact |

### Models

| Model | Usage |
|-------|-------|
| Project | Structure des projets |
| SkillCategory | Catégories de compétences |
| TimelineItem | Éléments de timeline |
| ContactForm | Formulaire de contact |

---

## 🔄 Flux de Données

```
┌─────────────────────────────────────────────────────────┐
│                    USER INTERACTION                      │
│                  (Click, Input, etc.)                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                 COMPONENT (Controller)                   │
│  - Gère les événements                                   │
│  - Appelle les services                                  │
│  - Met à jour les propriétés                             │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  SERVICE (Business Logic)                │
│  - Traite les données                                    │
│  - Appelle les APIs (futur)                              │
│  - Retourne des Observables                              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   MODEL (Data Structure)                 │
│  - Définit la structure                                  │
│  - Typage fort TypeScript                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    VIEW (Template)                       │
│  - Affiche les données                                   │
│  - Data binding                                          │
│  - Tailwind CSS                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Conventions de Nommage

### Fichiers
- **Composants :** `nom.component.ts`
- **Services :** `nom.service.ts`
- **Models :** `nom.model.ts`
- **Templates :** `nom.component.html`
- **Styles :** `nom.component.scss`

### Classes
- **Composants :** `NomComponent`
- **Services :** `NomService`
- **Interfaces :** `NomInterface`

### Sélecteurs
- **Composants :** `app-nom`
- **Directives :** `appNom`

---

## 📦 Dépendances

### Production
```json
{
  "@angular/common": "^20.2.0",
  "@angular/compiler": "^20.2.0",
  "@angular/core": "^20.2.0",
  "@angular/forms": "^20.2.0",
  "@angular/platform-browser": "^20.2.0",
  "@angular/router": "^20.2.0",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.15.0"
}
```

### Développement
```json
{
  "@angular/build": "^20.2.2",
  "@angular/cli": "^20.2.2",
  "@angular/compiler-cli": "^20.2.0",
  "typescript": "~5.9.2"
}
```

---

## 🚀 Scripts Disponibles

| Script | Commande | Description |
|--------|----------|-------------|
| start | `npm start` | Démarre le serveur de dev |
| build | `npm run build` | Build de production |
| watch | `npm run watch` | Build en mode watch |
| test | `npm test` | Lance les tests |

---

## 📝 Notes

- **Composants Standalone :** Tous les composants utilisent l'approche standalone d'Angular 20
- **Pas de NgModule :** Configuration simplifiée sans modules
- **Tailwind CSS :** Intégré via CDN dans index.html
- **TypeScript Strict :** Typage fort activé
- **SCSS :** Préprocesseur CSS utilisé

---

## 🔗 Liens Utiles

- [Documentation Angular](https://angular.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [RxJS](https://rxjs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

**Dernière mise à jour :** 2024-11-12
