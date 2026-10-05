/**
 * Copie la page 404 pré-rendue vers /404.html : Vercel la sert automatiquement,
 * avec un vrai statut HTTP 404, pour toute URL qui ne correspond à aucun fichier.
 * Usage: node scripts/copy-404.mjs (lancé automatiquement par npm run build)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const browser = path.join(root, 'dist/mon-portfolio/browser');
fs.copyFileSync(path.join(browser, '404/index.html'), path.join(browser, '404.html'));
console.log('✅ dist/mon-portfolio/browser/404.html créé');
