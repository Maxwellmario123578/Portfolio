/**
 * Extrait les données du service TypeScript vers public/portfolio-data.json
 * Usage: node scripts/extract-portfolio-data.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const servicePath = path.join(root, 'src/app/core/services/portfolio-data.service.ts');
const outputPath = path.join(root, 'public/portfolio-data.json');

const content = fs.readFileSync(servicePath, 'utf8');

function extractMethodBody(methodName) {
  const regex = new RegExp(`(?:private )?${methodName}\\([^)]*\\)[^{]*\\{([\\s\\S]*?)\\n  \\}`, 'm');
  const match = content.match(regex);
  if (!match) throw new Error(`Method ${methodName} not found`);
  return match[1];
}

function runDataMethod(methodName, lang) {
  const body = extractMethodBody(methodName);
  const fn = new Function('lang', body + `\nreturn undefined;`);
  const result = fn(lang);
  if (result === undefined) {
    // try without return undefined for methods that return directly
    const fn2 = new Function('lang', body);
    return fn2(lang);
  }
  return result;
}

// getProjectsData returns array based on lang
function getProjects(lang) {
  const body = extractMethodBody('getProjectsData');
  const fn = new Function('lang', body);
  return fn(lang);
}

function prepareObservableMethodBody(body) {
  return body
    .replace(/const lang = this\.languageService\.currentLanguage\(\);\s*/g, '')
    .replace(/return of\(/g, 'return ')
    .replace(/\]\);/g, '];');
}

function getSkills(lang) {
  const body = prepareObservableMethodBody(extractMethodBody('getSkills'));
  const fn = new Function('lang', body);
  return fn(lang);
}

function getTimeline(lang) {
  const body = prepareObservableMethodBody(extractMethodBody('getTimeline'));
  const fn = new Function('lang', body);
  return fn(lang);
}

function getCertifications(lang) {
  const body = prepareObservableMethodBody(extractMethodBody('getCertifications'));
  const fn = new Function('lang', body);
  return fn(lang);
}

function getVolunteers(lang) {
  const body = prepareObservableMethodBody(extractMethodBody('getVolunteers'));
  const fn = new Function('lang', body);
  return fn(lang);
}

const BASE_URL = 'https://portfoliomathurin.vercel.app';

const portfolioData = {
  meta: {
    version: '1.0.0',
    lastUpdated: new Date().toISOString().split('T')[0],
    name: 'Masewell-Mathurin KONMENECK',
    baseUrl: BASE_URL,
    photo: `${BASE_URL}/Moi.png`,
    cv: `${BASE_URL}/CV/CV_KONMENECK.pdf`,
    links: {
      linkedin: 'https://www.linkedin.com/in/masewell-mathurin-konmeneck/',
      github: 'https://github.com/Maxwellmario123578',
      gitlab: 'https://gitlab.com/Maxwellmario123578',
    },
  },
  profile: {
    fr: {
      title: 'Étudiant en Ingénierie des Systèmes d\'Information & Data Scientist',
      intro: [
        'Etudiant en ingénierie de conception en informatique à Saint Jean Ingénieur, passionné par le développement logiciel et l\'architecture web.',
        'J\'aime concevoir des solutions intelligentes mêlant IA et les technologies web modernes.',
        'Mon objectif est de créer des applications performantes et utiles, tout en continuant à apprendre et à innover.',
      ],
    },
    en: {
      title: 'Information Systems Engineering Student & Data Scientist',
      intro: [
        'Computer Engineering student at Saint Jean Ingénieur, passionate about data science and software development.',
        'I love designing intelligent solutions combining data analysis, AI and modern web technology.',
        'My goal is to create efficient and useful applications, while continuing to learn and innovate.',
      ],
    },
  },
  projects: {
    fr: getProjects('fr'),
    en: getProjects('en'),
  },
  skills: {
    fr: getSkills('fr'),
    en: getSkills('en'),
  },
  education: {
    fr: getTimeline('fr'),
    en: getTimeline('en'),
  },
  certifications: {
    fr: getCertifications('fr'),
    en: getCertifications('en'),
  },
  volunteers: {
    fr: getVolunteers('fr'),
    en: getVolunteers('en'),
  },
};

// Les chemins d'images restent relatifs dans portfolio-data.json (utilisés par l'app Angular)
// Les URLs absolues sont ajoutées uniquement dans les fichiers générés pour les IA

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(portfolioData, null, 2), 'utf8');
console.log(`✅ portfolio-data.json généré (${outputPath})`);
