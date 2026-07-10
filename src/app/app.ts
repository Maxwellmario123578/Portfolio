import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    CommonModule
  ],
  template: `
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer *ngIf="showHeaderFooter" />
    </div>
  `,
  styles: []
})
export class App {
  showHeaderFooter = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showHeaderFooter = event.url !== '/';
      });
  }
}

