# Portfolio KONMENECK - Angular

Portfolio personnel développé avec Angular 20, suivant les principes de Clean Architecture et le pattern MVC.

## 🏗️ Architecture

Ce projet implémente une architecture propre et maintenable :

- **Clean Architecture** : Séparation claire entre la logique métier et la présentation
- **Pattern MVC** : Models, Views, Controllers bien définis
- **Composants Standalone** : Utilisation de l'approche moderne d'Angular 20
- **Services Injectables** : Gestion centralisée des données

Consultez [ARCHITECTURE.md](./ARCHITECTURE.md) pour plus de détails.

## 📁 Structure du Projet

```
src/app/
├── core/                    # Logique métier
│   ├── models/             # Modèles de données
│   └── services/           # Services métier
├── features/               # Fonctionnalités
│   ├── hero/
│   ├── about/
│   ├── projects/
│   ├── skills/
│   ├── education/
│   └── contact/
└── layout/                 # Composants de mise en page
    ├── header/
    └── footer/
```

## 🚀 Démarrage

### Prérequis

- Node.js (v18+)
- npm ou yarn

### Installation

```bash
npm install
```

### Serveur de développement

```bash
npm start
```

Ouvrez votre navigateur sur `http://localhost:4200/`

### Build de production

```bash
npm run build
```

Les fichiers de build seront dans le dossier `dist/`

## 🎨 Technologies

- **Angular 20** - Framework frontend
- **TypeScript** - Langage de programmation
- **Tailwind CSS** - Framework CSS
- **RxJS** - Programmation réactive
- **SCSS** - Préprocesseur CSS

## 📦 Fonctionnalités

- ✅ Section Hero avec présentation
- ✅ À propos avec photo et description
- ✅ Projets avec cartes interactives
- ✅ Compétences techniques organisées
- ✅ Timeline formation et expérience
- ✅ Formulaire de contact avec validation
- ✅ Design responsive
- ✅ Mode sombre

## 🧪 Tests

```bash
npm test
```

## 📝 Licence

Ce projet est sous licence MIT.
