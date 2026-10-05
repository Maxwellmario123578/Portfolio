import { FaqItem } from '../data/faq.data';
import { Project } from '../models';
import { PERSON_ID, SITE_URL, absoluteUrl } from './seo.service';

// Entités schema.org par page. Person et WebSite sont déclarés une seule fois dans index.html
// et référencés ici par leur @id, pour que les moteurs relient tout à la même personne.

export function profilePage(path: string, name: string, description: string): Record<string, unknown> {
  return {
    '@type': 'ProfilePage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: 'fr',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': PERSON_ID },
    dateModified: '2026-10-05',
  };
}

export function projectList(projects: Project[]): Record<string, unknown> {
  return {
    '@type': 'ItemList',
    name: 'Projets de Masewell Mathurin KONMENECK',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: project.title,
      url: absoluteUrl(`/project/${project.id}`),
    })),
  };
}

export function faqPage(items: FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function projectSchema(project: Project, image: string): Record<string, unknown> {
  const url = absoluteUrl(`/project/${project.id}`);
  return {
    '@type': 'SoftwareSourceCode',
    '@id': `${url}#project`,
    url,
    name: project.title,
    description: project.fullDescription || project.description,
    image,
    keywords: project.technologies.join(', '),
    inLanguage: 'fr',
    creativeWorkStatus: project.status === 'terminé' ? 'Published' : 'Incomplete',
    author: { '@id': PERSON_ID },
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
  };
}

export function breadcrumb(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
