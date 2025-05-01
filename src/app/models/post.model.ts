export type PostType = 'texte' | 'galerie' | 'mixte' | 'cuisine';

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: PostType;
  date: string;
  excerpt: string;
  cover?: string;
}