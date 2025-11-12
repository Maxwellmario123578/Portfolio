import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <app-header />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: []
})
export class App {}
