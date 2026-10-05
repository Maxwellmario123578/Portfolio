import { Injectable, signal, effect, inject, PLATFORM_ID, DOCUMENT } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private document = inject(DOCUMENT);

  constructor() {
    // Charger le thème depuis localStorage, par défaut mode clair
    const savedTheme = this.isBrowser ? localStorage.getItem('theme') : null;
    
    // Par défaut: mode clair (blanc)
    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
    } else {
      this.isDarkMode.set(false);
    }

    // Appliquer le thème au chargement
    effect(() => {
      this.applyTheme();
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
  }

  private applyTheme(): void {
    const theme = this.isDarkMode() ? 'dark' : 'light';
    if (this.isBrowser) localStorage.setItem('theme', theme);
    
    if (this.isDarkMode()) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }
}
