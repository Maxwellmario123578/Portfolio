# Documentation des Composants

## Vue d'Ensemble

L'application est composée de 8 composants principaux organisés selon le pattern MVC et Clean Architecture.

## Composants de Layout

### HeaderComponent

**Emplacement :** `src/app/layout/header/`

**Responsabilité :** Navigation principale de l'application

**Fonctionnalités :**

- Affichage du nom (KONMENECK)
- Menu de navigation (About, Projects, Skills, Education)
- Bouton "Get In Touch"
- Sticky header avec effet backdrop blur

**Dépendances :** Aucune

---

### FooterComponent

**Emplacement :** `src/app/layout/footer/`

**Responsabilité :** Pied de page de l'application

**Fonctionnalités :**

- Copyright
- Informations légales

**Dépendances :** Aucune

---

## Composants Features

### HeroComponent

**Emplacement :** `src/app/features/hero/`

**Responsabilité :** Section d'accueil principale

**Fonctionnalités :**

- Titre et sous-titre de présentation
- Image de profil abstraite
- Bouton CTA vers les projets
- Design responsive

**Dépendances :** Aucune

**Template :**

```html
<section class="container mx-auto" id="home">
  <!-- Contenu hero -->
</section>
```

---

### AboutComponent

**Emplacement :** `src/app/features/about/`

**Responsabilité :** Section "À propos"

**Fonctionnalités :**

- Photo de profil circulaire
- Description personnelle
- Layout responsive

**Dépendances :** Aucune

**Template :**

```html
<section class="bg-white dark:bg-background-dark py-16 sm:py-24" id="about">
  <!-- Contenu about -->
</section>
```

---

### ProjectsComponent

**Emplacement :** `src/app/features/projects/`

**Responsabilité :** Affichage des projets

**Fonctionnalités :**

- Grille de cartes de projets
- Affichage des technologies utilisées
- Effet hover sur les cartes
- Chargement dynamique des données

**Dépendances :**

- `PortfolioDataService` : Récupération des projets
- `Project` model : Structure des données

**Propriétés :**

```typescript
projects: Project[] = [];
```

**Méthodes :**

```typescript
ngOnInit(): void {
  this.portfolioDataService.getProjects().subscribe(
    projects => this.projects = projects
  );
}
```

**Template :**

```html
<section class="container mx-auto py-16 sm:py-24" id="projects">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    @for (project of projects; track project.id) {
    <!-- Carte projet -->
    }
  </div>
</section>
```

---

### SkillsComponent

**Emplacement :** `src/app/features/skills/`

**Responsabilité :** Affichage des compétences techniques

**Fonctionnalités :**

- Catégories de compétences (Languages, Frameworks, etc.)
- Grille responsive
- Chargement dynamique des données

**Dépendances :**

- `PortfolioDataService` : Récupération des compétences
- `SkillCategory` model : Structure des données

**Propriétés :**

```typescript
skillCategories: SkillCategory[] = [];
```

**Méthodes :**

```typescript
ngOnInit(): void {
  this.portfolioDataService.getSkills().subscribe(
    skills => this.skillCategories = skills
  );
}
```

**Template :**

```html
<section class="bg-white dark:bg-background-dark py-16 sm:py-24" id="skills">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    @for (category of skillCategories; track category.title) {
    <!-- Catégorie de compétences -->
    }
  </div>
</section>
```

---

### EducationComponent

**Emplacement :** `src/app/features/education/`

**Responsabilité :** Timeline de formation et expérience

**Fonctionnalités :**

- Timeline verticale avec ligne centrale
- Alternance gauche/droite des éléments
- Points de repère colorés
- Chargement dynamique des données

**Dépendances :**

- `PortfolioDataService` : Récupération de la timeline
- `TimelineItem` model : Structure des données

**Propriétés :**

```typescript
timelineItems: TimelineItem[] = [];
```

**Méthodes :**

```typescript
ngOnInit(): void {
  this.portfolioDataService.getTimeline().subscribe(
    items => this.timelineItems = items
  );
}
```

**Template :**

```html
<section class="container mx-auto py-16 sm:py-24" id="education">
  <div class="relative max-w-3xl mx-auto">
    @for (item of timelineItems; track item.id) {
    <!-- Item timeline -->
    }
  </div>
</section>
```

---

### ContactComponent

**Emplacement :** `src/app/features/contact/`

**Responsabilité :** Formulaire de contact

**Fonctionnalités :**

- Formulaire réactif avec validation
- Champs : nom, email, message
- Feedback visuel (succès/erreur)
- Liens vers réseaux sociaux (GitHub, LinkedIn)
- État de soumission (loading)

**Dépendances :**

- `ContactService` : Soumission du formulaire
- `ContactForm` model : Structure des données
- `ReactiveFormsModule` : Gestion du formulaire

**Propriétés :**

```typescript
contactForm: FormGroup;
isSubmitting: boolean = false;
submitSuccess: boolean = false;
```

**Méthodes :**

```typescript
constructor(private fb: FormBuilder, private contactService: ContactService) {
  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
}

onSubmit(): void {
  if (this.contactForm.valid && !this.isSubmitting) {
    this.isSubmitting = true;
    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: () => this.isSubmitting = false
    });
  }
}
```

**Validations :**

- Nom : requis
- Email : requis + format email valide
- Message : requis

**Template :**

```html
<section class="bg-white dark:bg-background-dark py-16 sm:py-24" id="contact">
  <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
    <!-- Champs du formulaire -->
  </form>
</section>
```

---

## Services

### PortfolioDataService

**Emplacement :** `src/app/core/services/portfolio-data.service.ts`

**Responsabilité :** Gestion des données du portfolio

**Méthodes :**

```typescript
getProjects(): Observable<Project[]>
getSkills(): Observable<SkillCategory[]>
getTimeline(): Observable<TimelineItem[]>
```

**Note :** Actuellement retourne des données statiques. Peut être étendu pour appeler une API REST.

---

### ContactService

**Emplacement :** `src/app/core/services/contact.service.ts`

**Responsabilité :** Gestion de la soumission du formulaire de contact

**Méthodes :**

```typescript
submitContactForm(formData: ContactForm): Observable<boolean>
```

**Note :** Actuellement simule une soumission. Peut être étendu pour envoyer à une API backend.

---

## Modèles de Données

### Project

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}
```

### SkillCategory

```typescript
interface SkillCategory {
  title: string;
  skills: string[];
}
```

### TimelineItem

```typescript
interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  position: 'left' | 'right';
}
```

### ContactForm

```typescript
interface ContactForm {
  name: string;
  email: string;
  message: string;
}
```

---

## Hiérarchie des Composants

```
App (Root)
├── HeaderComponent
├── Main
│   ├── HeroComponent
│   ├── AboutComponent
│   ├── ProjectsComponent
│   ├── SkillsComponent
│   ├── EducationComponent
│   └── ContactComponent
└── FooterComponent
```

## Flux de Données

```
Component → Service → Observable → Component → Template
```

Exemple pour ProjectsComponent :

1. `ProjectsComponent` appelle `portfolioDataService.getProjects()`
2. Le service retourne un `Observable<Project[]>`
3. Le composant souscrit et stocke les données dans `projects`
4. Le template affiche les projets via `@for`
