export type PostType = 'article' | 'gallery' | 'mixte' | 'cook' | 'project';

export interface Post {
  title: string;
  slug: string;
  category: string;
  type: PostType;
  date: string;
  excerpt: string;
  cover?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  ingredients?: string[];
  stack?: string[];
  github?: string;
  demo?: string;
}