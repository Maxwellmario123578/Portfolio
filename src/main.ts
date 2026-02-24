import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Activer le mode production si on n'est pas en développement
if (!/localhost/.test(window.location.hostname)) {
  enableProdMode();
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

