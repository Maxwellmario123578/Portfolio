import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainContentComponent
  ],
  template: `
    <app-main-content />
  `,
  styles: []
})
export class HomeComponent {
  // No logic needed, just a container for the main content
}

