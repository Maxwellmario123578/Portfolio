import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Point d'entrée utilisé uniquement au build pour pré-rendre les pages en HTML statique
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
