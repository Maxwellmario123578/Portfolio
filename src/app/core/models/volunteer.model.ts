export interface Volunteer {
  id: string;
  title: string;
  organization: string;
  period: string;
  description?: string;
  imageUrl?: string;
  status: 'en cours' | 'terminé';
}

