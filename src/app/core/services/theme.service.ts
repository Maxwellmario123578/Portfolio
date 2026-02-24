import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    // Charger le thème depuis localStorage, par défaut mode clair
    const savedTheme = localStorage.getItem('theme');
    
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
    localStorage.setItem('theme', theme);
    
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
