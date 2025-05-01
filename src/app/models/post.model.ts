export type PostType = 'article' | 'gallery' | 'mixte' | 'cook';

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