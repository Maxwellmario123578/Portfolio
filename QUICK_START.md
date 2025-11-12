# Guide de Démarrage Rapide

## 🚀 Lancement de l'Application

### 1. Installation des dépendances

```bash
npm install
```

### 2. Démarrer le serveur de développement

```bash
npm start
```

L'application sera accessible sur : **http://localhost:4200/**

### 3. Build de production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/MonPortfolio/`

---

## 📂 Structure du Projet

```
MonPortfolio/
├── src/
│   ├── app/
│   │   ├── core/              # Logique métier
│   │   │   ├── models/        # Modèles de données
│   │   │   └── services/      # Services
│   │   ├── features/          # Composants fonctionnels
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   ├── education/
│   │   │   └── contact/
│   │   ├── layout/            # Header & Footer
│   │   ├── app.ts             # Composant racine
│   │   └── app.config.ts      # Configuration
│   ├── index.html             # Page HTML principale
│   └── styles.scss            # Styles globaux
├── ARCHITECTURE.md            # Documentation architecture
├── COMPONENTS.md              # Documentation composants
├── DEVELOPMENT_GUIDE.md       # Guide développement
└── README.md                  # Documentation principale
```

---

## 🎯 Fonctionnalités Implémentées

✅ **Section Hero** - Présentation principale avec image  
✅ **Section About** - À propos avec photo de profil  
✅ **Section Projects** - Grille de projets avec technologies  
✅ **Section Skills** - Compétences techniques organisées  
✅ **Section Education** - Timeline formation/expérience  
✅ **Section Contact** - Formulaire avec validation  
✅ **Header** - Navigation sticky avec liens  
✅ **Footer** - Copyright et informations  
✅ **Design Responsive** - Mobile, tablette, desktop  
✅ **Mode Sombre** - Thème dark activé par défaut  

---

## 🏗️ Architecture

### Clean Architecture
- **Core Layer** : Models + Services (logique métier)
- **Presentation Layer** : Components (UI)
- **Separation of Concerns** : Chaque couche a sa responsabilité

### Pattern MVC
- **Model** : Interfaces TypeScript dans `core/models/`
- **View** : Templates HTML avec Tailwind CSS
- **Controller** : Classes TypeScript des composants

### Composants Standalone
- Pas de NgModule
- Imports directs dans les composants
- Configuration simplifiée

---

## 🔧 Personnalisation

### Modifier les Données

**Projets :**
Éditez `src/app/core/services/portfolio-data.service.ts` → méthode `getProjects()`

**Compétences :**
Éditez `src/app/core/services/portfolio-data.service.ts` → méthode `getSkills()`

**Timeline :**
Éditez `src/app/core/services/portfolio-data.service.ts` → méthode `getTimeline()`

### Modifier les Couleurs

Éditez `src/index.html` dans la section `tailwind.config` :

```javascript
colors: {
  "primary": "#136dec",           // Couleur principale
  "background-light": "#f6f7f8",  // Fond clair
  "background-dark": "#101822",   // Fond sombre
}
```

### Modifier le Contenu

Chaque composant a son propre template HTML dans son dossier :
- `src/app/features/hero/hero.component.html`
- `src/app/features/about/about.component.html`
- etc.

---

## 📚 Documentation Complète

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture détaillée du projet
- **[COMPONENTS.md](./COMPONENTS.md)** - Documentation de tous les composants
- **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** - Guide pour ajouter des fonctionnalités
- **[README.md](./README.md)** - Vue d'ensemble du projet

---

## 🛠️ Technologies Utilisées

| Technologie | Version | Usage |
|------------|---------|-------|
| Angular | 20.2.0 | Framework frontend |
| TypeScript | 5.9.2 | Langage de programmation |
| Tailwind CSS | CDN | Framework CSS |
| RxJS | 7.8.0 | Programmation réactive |
| SCSS | - | Préprocesseur CSS |

---

## 📝 Commandes Utiles

```bash
# Démarrer le serveur de développement
npm start

# Build de production
npm run build

# Build en mode watch
npm run watch

# Lancer les tests
npm test

# Vérifier la syntaxe
ng lint
```

---

## 🐛 Résolution de Problèmes

### Le serveur ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreurs de compilation TypeScript
```bash
# Vérifier la version de TypeScript
npm list typescript

# Réinstaller les dépendances
npm install
```

### Le build échoue
```bash
# Nettoyer le cache
npm cache clean --force

# Supprimer dist et rebuilder
rm -rf dist
npm run build
```

---

## 🎓 Prochaines Étapes

1. **Connecter à une API** : Remplacer les données statiques par des appels API
2. **Ajouter des Tests** : Écrire des tests unitaires et e2e
3. **Optimiser les Images** : Utiliser des images optimisées
4. **Ajouter l'i18n** : Support multilingue
5. **PWA** : Transformer en Progressive Web App
6. **Analytics** : Ajouter Google Analytics
7. **SEO** : Optimiser pour les moteurs de recherche

---

## 📞 Support

Pour toute question ou problème :
1. Consultez la documentation dans les fichiers `.md`
2. Vérifiez les issues GitHub
3. Consultez la documentation Angular : https://angular.dev

---

**Bon développement ! 🚀**
