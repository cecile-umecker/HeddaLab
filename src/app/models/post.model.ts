export interface Post {
  id: number;
  title: string;
  path: string;
  category: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
}
