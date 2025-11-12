# Guide de Développement

## Comment Ajouter une Nouvelle Fonctionnalité

### 1. Créer un Nouveau Modèle

```typescript
// src/app/core/models/blog-post.model.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: Date;
  author: string;
}
```

N'oubliez pas d'exporter le modèle dans `src/app/core/models/index.ts` :

```typescript
export * from './blog-post.model';
```

### 2. Créer un Service

```typescript
// src/app/core/services/blog.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBlogPosts(): Observable<BlogPost[]> {
    // Logique pour récupérer les articles
    return of([]);
  }
  
  getBlogPost(id: string): Observable<BlogPost | undefined> {
    // Logique pour récupérer un article spécifique
    return of(undefined);
  }
}
```

### 3. Créer un Composant

```bash
# Structure des fichiers
src/app/features/blog/
├── blog.component.ts
├── blog.component.html
└── blog.component.scss
```

**blog.component.ts :**
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../core/services/blog.service';
import { BlogPost } from '../../core/models';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogPosts().subscribe(
      posts => this.blogPosts = posts
    );
  }
}
```

**blog.component.html :**
```html
<section class="container mx-auto py-16" id="blog">
  <h2 class="text-3xl font-bold text-center mb-8">Blog</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    @for (post of blogPosts; track post.id) {
      <article class="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-bold mb-2">{{ post.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ post.content }}</p>
      </article>
    }
  </div>
</section>
```

### 4. Intégrer le Composant dans l'Application

Ajoutez le composant dans `src/app/app.ts` :

```typescript
import { BlogComponent } from './features/blog/blog.component';

@Component({
  // ...
  imports: [
    // ... autres imports
    BlogComponent
  ],
  template: `
    <div class="relative flex min-h-screen w-full flex-col">
      <app-header />
      <main>
        <!-- ... autres composants -->
        <app-blog />
      </main>
      <app-footer />
    </div>
  `
})
export class App {}
```

## Bonnes Pratiques

### 1. Typage Fort
Toujours utiliser TypeScript avec des types explicites :

```typescript
// ✅ Bon
getProjects(): Observable<Project[]> {
  return of([]);
}

// ❌ Mauvais
getProjects() {
  return of([]);
}
```

### 2. Gestion des Observables
Toujours se désabonner des observables ou utiliser l'opérateur `async` :

```typescript
// Option 1 : async pipe (recommandé)
<div *ngIf="projects$ | async as projects">
  @for (project of projects; track project.id) {
    <!-- ... -->
  }
</div>

// Option 2 : Unsubscribe manuel
private destroy$ = new Subject<void>();

ngOnInit(): void {
  this.service.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
```

### 3. Composants Réutilisables
Créer des composants partagés dans `src/app/shared/` :

```typescript
// src/app/shared/components/card/card.component.ts
@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {}
```

### 4. Validation des Formulaires
Utiliser les validateurs Angular :

```typescript
this.form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  name: ['', [Validators.required, Validators.minLength(3)]],
  age: ['', [Validators.required, Validators.min(18)]]
});
```

### 5. Gestion des Erreurs
Toujours gérer les erreurs dans les observables :

```typescript
this.service.getData().subscribe({
  next: (data) => this.data = data,
  error: (error) => {
    console.error('Erreur:', error);
    this.errorMessage = 'Une erreur est survenue';
  }
});
```

## Tests

### Test d'un Service

```typescript
import { TestBed } from '@angular/core/testing';
import { PortfolioDataService } from './portfolio-data.service';

describe('PortfolioDataService', () => {
  let service: PortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects', (done) => {
    service.getProjects().subscribe(projects => {
      expect(projects.length).toBeGreaterThan(0);
      done();
    });
  });
});
```

### Test d'un Composant

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Commandes Utiles

```bash
# Démarrer le serveur de développement
npm start

# Build de production
npm run build

# Lancer les tests
npm test

# Vérifier le code
ng lint

# Formater le code
npm run format
```

## Ressources

- [Documentation Angular](https://angular.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [RxJS](https://rxjs.dev)
- [TypeScript](https://www.typescriptlang.org)
