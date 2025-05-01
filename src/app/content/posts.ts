import { Post } from '../models/post.model';

export const POSTS: Post[] = [
  {
    id: '999',
    title: 'Post de Test',
    slug: 'test-post',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    date: '2025-05-01',
    category: 'it',
    type: 'article'
  }
  ,  
  {
    id: '2',
    title: 'Creepypasta Splinter',
    slug: 'creepypasta-splinter',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'creepypasta',
    date: '2025-03-15',
    type: 'article'
  },
  {
    id: '3',
    title: 'Projet Drawmory',
    slug: 'projet-drawmory',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'projects',
    date: '2025-03-10',
    type: 'mixte'
  },
  {
    id: '4',
    title: 'Projet galerie',
    slug: 'projet-galerie',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'pictures',
    date: '2025-03-10',
    type: 'gallery'
  },
  {
    id: '5',
    title: 'Projet cuisine',
    slug: 'projet-cuisine',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'cook',
    date: '2025-03-10',
    type: 'cook'
  }
];
