export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  fullDescription?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  date?: string;
  status: 'en cours' | 'terminé';
}
