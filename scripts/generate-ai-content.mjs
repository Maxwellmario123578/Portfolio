/**
 * Génère les fichiers lisibles par les IA/crawlers à partir de portfolio-data.json
 * Usage: node scripts/generate-ai-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'public/portfolio-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const { meta, profile, projects, skills, education, certifications, volunteers } = data;

function absUrl(path) {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${meta.baseUrl}/${path.replace(/^\//, '')}`;
}

// Une image absente de public/ (ex. projet en cours) est remplacée par l'image de partage du site
function existingImage(p) {
  if (!p || p.startsWith('http')) return p;
  return fs.existsSync(path.join(root, 'public', p.replace(/^\//, ''))) ? p : '/og-image.jpg';
}

function enrichProject(p) {
  return {
    ...p,
    url: `${meta.baseUrl}/project/${p.id}`,
    imageUrl: absUrl(existingImage(p.imageUrl)),
    images: (p.images || []).map(absUrl),
  };
}

function enrichCert(c) {
  return { ...c, imageUrl: absUrl(c.imageUrl?.replace(/^\//, '')) };
}

function enrichVol(v) {
  return { ...v, imageUrl: v.imageUrl ? absUrl(v.imageUrl.replace(/^\//, '')) : undefined };
}

function buildMarkdown(lang) {
  const p = profile[lang];
  const projs = projects[lang].map(enrichProject);
  const certs = certifications[lang].map(enrichCert);
  const vols = volunteers[lang].map(enrichVol);
  const lines = [];

  lines.push(`# ${meta.name}`);
  lines.push('');
  lines.push(`> ${p.title}`);
  lines.push('');
  lines.push('## Présentation');
  lines.push('');
  p.intro.forEach((line) => lines.push(line));
  lines.push('');
  lines.push('## Liens');
  lines.push('');
  lines.push(`- Portfolio: ${meta.baseUrl}/portfolio`);
  lines.push(`- CV: ${meta.cv}`);
  lines.push(`- LinkedIn: ${meta.links.linkedin}`);
  lines.push(`- GitHub: ${meta.links.github}`);
  lines.push(`- GitLab: ${meta.links.gitlab}`);
  lines.push(`- Photo: ${meta.photo}`);
  lines.push('');

  lines.push('## Formations');
  lines.push('');
  education[lang].forEach((e) => {
    lines.push(`### ${e.title}`);
    lines.push(`- **Organisation:** ${e.organization}`);
    lines.push(`- **Période:** ${e.period}`);
    lines.push(`- **Description:** ${e.description}`);
    if (e.url) lines.push(`- **Site:** ${e.url}`);
    lines.push('');
  });

  lines.push('## Certifications');
  lines.push('');
  certs.forEach((c) => {
    lines.push(`### ${c.title}`);
    lines.push(`- **Émetteur:** ${c.issuer}`);
    lines.push(`- **Statut:** ${c.date}`);
    lines.push(`- **Compétences:** ${c.skills.join(', ')}`);
    lines.push(`- **Description:** ${c.description}`);
    if (c.credentialUrl) lines.push(`- **Vérification:** ${c.credentialUrl}`);
    if (c.imageUrl) lines.push(`- **Image:** ${c.imageUrl}`);
    lines.push('');
  });

  lines.push('## Compétences');
  lines.push('');
  skills[lang].forEach((cat) => {
    lines.push(`### ${cat.title}`);
    lines.push(cat.skills.join(', '));
    lines.push('');
  });

  lines.push('## Projets');
  lines.push('');
  projs.forEach((proj) => {
    lines.push(`### ${proj.title}`);
    lines.push(`- **ID:** ${proj.id}`);
    lines.push(`- **URL:** ${proj.url}`);
    lines.push(`- **Statut:** ${proj.status}`);
    lines.push(`- **Catégorie:** ${proj.category}`);
    lines.push(`- **Date:** ${proj.date}`);
    lines.push(`- **Technologies:** ${proj.technologies.join(', ')}`);
    lines.push(`- **Résumé:** ${proj.description}`);
    lines.push(`- **Description complète:** ${proj.fullDescription}`);
    if (proj.features?.length) {
      lines.push('- **Fonctionnalités:**');
      proj.features.forEach((f) => lines.push(`  - ${f}`));
    }
    if (proj.githubUrl) lines.push(`- **GitHub:** ${proj.githubUrl}`);
    if (proj.liveUrl) lines.push(`- **Démo/Maquette:** ${proj.liveUrl}`);
    if (proj.pdfUrl) lines.push(`- **Rapport PDF:** ${proj.pdfUrl}`);
    lines.push(`- **Image principale:** ${proj.imageUrl}`);
    if (proj.images?.length) {
      lines.push('- **Images:**');
      proj.images.forEach((img) => lines.push(`  - ${img}`));
    }
    lines.push('');
  });

  lines.push('## Bénévolats');
  lines.push('');
  vols.forEach((v) => {
    lines.push(`### ${v.title}`);
    lines.push(`- **Organisation:** ${v.organization}`);
    lines.push(`- **Période:** ${v.period}`);
    lines.push(`- **Statut:** ${v.status}`);
    lines.push(`- **Description:** ${v.description}`);
    if (v.imageUrl) lines.push(`- **Image:** ${v.imageUrl}`);
    lines.push('');
  });

  return lines.join('\n');
}

function buildContentHtml() {
  const fr = profile.fr;
  const projectItems = projects.fr.map(enrichProject)
    .map(
      (p) => `
    <article id="project-${p.id}">
      <h3>${p.title}</h3>
      <p><strong>Statut:</strong> ${p.status} | <strong>Catégorie:</strong> ${p.category} | <strong>Date:</strong> ${p.date}</p>
      <p>${p.fullDescription || p.description}</p>
      <p><strong>Technologies:</strong> ${p.technologies.join(', ')}</p>
      ${p.features?.length ? `<ul>${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>` : ''}
      <p><strong>Liens:</strong>
        ${p.githubUrl ? `<a href="${p.githubUrl}">GitHub</a> ` : ''}
        ${p.liveUrl ? `<a href="${p.liveUrl}">Démo</a> ` : ''}
        ${p.pdfUrl ? `<a href="${p.pdfUrl}">Rapport PDF</a> ` : ''}
        <a href="${p.url}">Page projet</a>
      </p>
      <figure>
        <img src="${p.imageUrl?.replace(meta.baseUrl + '/', '') || ''}" alt="${p.title}" width="600" loading="lazy" />
        <figcaption>${p.title} — capture principale</figcaption>
      </figure>
      ${(p.images || [])
        .slice(1)
        .map(
          (img, i) =>
            `<figure><img src="${img.replace(meta.baseUrl + '/', '')}" alt="${p.title} — image ${i + 2}" width="400" loading="lazy" /><figcaption>${p.title} — image ${i + 2}</figcaption></figure>`
        )
        .join('\n')}
    </article>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${meta.name} — Contenu complet du portfolio</title>
  <meta name="description" content="Version HTML statique et lisible du portfolio de ${meta.name}, optimisée pour les crawlers et assistants IA." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${meta.baseUrl}/content.html" />
  <link rel="alternate" type="application/json" href="/portfolio.json" title="Données structurées JSON" />
  <link rel="alternate" type="text/markdown" href="/portfolio.md" title="Version Markdown" />
  <style>
    body { font-family: system-ui, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; color: #1a1a1a; }
    h1, h2, h3 { color: #1e5543; }
    img { max-width: 100%; height: auto; border-radius: 8px; margin: 0.5rem 0; }
    figure { margin: 1rem 0; }
    article { border-bottom: 1px solid #e5e5e5; padding-bottom: 2rem; margin-bottom: 2rem; }
    nav a { margin-right: 1rem; }
    .notice { background: #f0fdf4; border: 1px solid #86efac; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; }
  </style>
</head>
<body>
  <div class="notice">
    <strong>Page statique pour crawlers IA</strong> — Ce contenu est accessible sans JavaScript.
    Version interactive : <a href="${meta.baseUrl}/portfolio">${meta.baseUrl}/portfolio</a>
  </div>

  <header>
    <h1>${meta.name}</h1>
    <p>${fr.title}</p>
    <nav>
      <a href="#presentation">Présentation</a>
      <a href="#education">Formations</a>
      <a href="#certifications">Certifications</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#volunteers">Bénévolats</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="presentation">
      <h2>Présentation</h2>
      ${fr.intro.map((p) => `<p>${p}</p>`).join('\n')}
      <figure>
        <img src="/Moi.webp" alt="Photo de ${meta.name}" width="300" height="300" />
        <figcaption>${meta.name}</figcaption>
      </figure>
      <p><a href="/CV/CV_KONMENECK.pdf">Télécharger le CV (PDF)</a></p>
    </section>

    <section id="education">
      <h2>Formations</h2>
      ${education.fr
        .map(
          (e) => `<article><h3>${e.title}</h3><p><strong>${e.organization}</strong> — ${e.period}</p><p>${e.description}</p>${e.url ? `<p><a href="${e.url}">Site de l'établissement</a></p>` : ''}</article>`
        )
        .join('\n')}
    </section>

    <section id="certifications">
      <h2>Certifications</h2>
      ${certifications.fr.map(enrichCert)
        .map(
          (c) => `<article><h3>${c.title}</h3><p><strong>${c.issuer}</strong> — ${c.date}</p><p>${c.description}</p><p>Compétences : ${c.skills.join(', ')}</p>${c.credentialUrl ? `<p><a href="${c.credentialUrl}">Vérifier le certificat</a></p>` : ''}${c.imageUrl ? `<figure><img src="${c.imageUrl.replace(meta.baseUrl, '')}" alt="Certificat ${c.title}" width="400" loading="lazy" /></figure>` : ''}</article>`
        )
        .join('\n')}
    </section>

    <section id="skills">
      <h2>Compétences</h2>
      ${skills.fr.map((cat) => `<h3>${cat.title}</h3><p>${cat.skills.join(', ')}</p>`).join('\n')}
    </section>

    <section id="projects">
      <h2>Projets (${projects.fr.length})</h2>
      ${projectItems}
    </section>

    <section id="volunteers">
      <h2>Bénévolats</h2>
      ${volunteers.fr.map(enrichVol)
        .map(
          (v) => `<article><h3>${v.title}</h3><p><strong>${v.organization}</strong> — ${v.period} (${v.status})</p><p>${v.description}</p>${v.imageUrl ? `<figure><img src="${v.imageUrl.replace(meta.baseUrl, '')}" alt="${v.title}" width="400" loading="lazy" /></figure>` : ''}</article>`
        )
        .join('\n')}
    </section>

    <section id="contact">
      <h2>Contact & Réseaux</h2>
      <ul>
        <li>LinkedIn: <a href="${meta.links.linkedin}">${meta.links.linkedin}</a></li>
        <li>GitHub: <a href="${meta.links.github}">${meta.links.github}</a></li>
        <li>GitLab: <a href="${meta.links.gitlab}">${meta.links.gitlab}</a></li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Dernière mise à jour : ${meta.lastUpdated} | <a href="/portfolio.json">JSON</a> | <a href="/portfolio.md">Markdown</a> | <a href="/llms.txt">llms.txt</a></p>
  </footer>
</body>
</html>`;
}

function buildLlmsTxt() {
  const fr = profile.fr;
  const projs = projects.fr.map(enrichProject);
  return `# ${meta.name}

> ${meta.name} est étudiant ingénieur en systèmes d'information à Saint Jean Ingénieur (Yaoundé, Cameroun) et data scientist. Certifié IBM Data Science Professional et Google Data Analytics. Il réalise des projets en Machine Learning, MLOps et développement full-stack (Angular, Spring Boot, React Native).

${fr.intro.join(' ')}

Également connu sous les noms : ${meta.alternateNames.join(', ')}.
Site officiel : ${meta.baseUrl}

## Pages principales

- [Portfolio complet](${meta.baseUrl}/portfolio) : présentation, formations, certifications, compétences, projets, bénévolat, FAQ
- [CV (PDF)](${meta.cv}) : curriculum vitae
- [Contenu complet en HTML statique](${meta.baseUrl}/content.html) : tout le portfolio sur une seule page

## Projets

${projs.map((p) => `- [${p.title}](${p.url}) : ${p.description} (${p.technologies.slice(0, 6).join(', ')})`).join('\n')}

## Certifications

${certifications.fr.map((c) => `- ${c.title} (${c.issuer})${c.credentialUrl ? ` : ${c.credentialUrl}` : ''}`).join('\n')}

## Profils

- LinkedIn : ${meta.links.linkedin}
- GitHub : ${meta.links.github}
- GitLab : ${meta.links.gitlab}

## Optional

- [Données JSON structurées](${meta.baseUrl}/portfolio.json) : profil, projets, compétences, certifications (FR + EN)
- [Version Markdown](${meta.baseUrl}/portfolio.md) : texte intégral FR + EN
- [Sitemap](${meta.baseUrl}/sitemap.xml)
`;
}

// sitemap.xml — uniquement les pages HTML indexables
function buildSitemap() {
  const pages = [
    { loc: '/', priority: '1.0' },
    { loc: '/portfolio', priority: '0.9' },
    // Les projets en cours ou confidentiels n'ont pas encore de contenu public : non indexés
    ...projects.fr
      .filter((p) => p.status === 'terminé' && !p.isConfidential)
      .map((p) => ({ loc: `/project/${p.id}`, priority: '0.7' })),
    { loc: '/content.html', priority: '0.5' },
  ];
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${meta.baseUrl}${p.loc}</loc>
    <lastmod>${meta.lastUpdated}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${meta.baseUrl}/sitemap.xml

# Guide pour les assistants IA : ${meta.baseUrl}/llms.txt
`;
}

// portfolio.json — export optimisé pour les IA (URLs absolues)
const portfolioJson = {
  meta: data.meta,
  profile: data.profile,
  projects: { fr: projects.fr.map(enrichProject), en: projects.en.map(enrichProject) },
  skills: data.skills,
  education: data.education,
  certifications: { fr: certifications.fr.map(enrichCert), en: certifications.en.map(enrichCert) },
  volunteers: { fr: volunteers.fr.map(enrichVol), en: volunteers.en.map(enrichVol) },
  _readme: 'Fichier généré automatiquement. Source: /portfolio-data.json. Pour le HTML statique: /content.html',
};

const mdFr = buildMarkdown('fr');
const mdEn = buildMarkdown('en');
const portfolioMd = `# Portfolio — ${meta.name}\n\n> Fichier généré automatiquement le ${meta.lastUpdated}\n\n---\n\n${mdFr}\n\n---\n\n# English Version\n\n${mdEn}`;

fs.writeFileSync(path.join(root, 'public/portfolio.json'), JSON.stringify(portfolioJson, null, 2));
fs.writeFileSync(path.join(root, 'public/portfolio.md'), portfolioMd);
fs.writeFileSync(path.join(root, 'public/llms.txt'), buildLlmsTxt());
fs.writeFileSync(path.join(root, 'public/content.html'), buildContentHtml());
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), buildSitemap());
fs.writeFileSync(path.join(root, 'public/robots.txt'), buildRobotsTxt());

console.log('✅ Fichiers IA générés:');
console.log('   - public/portfolio.json');
console.log('   - public/portfolio.md');
console.log('   - public/llms.txt');
console.log('   - public/content.html');
console.log('   - public/sitemap.xml');
console.log('   - public/robots.txt');
