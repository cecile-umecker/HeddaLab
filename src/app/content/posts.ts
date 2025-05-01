import { Post } from '../models/post.model';

export const POSTS: Post[] = [
  {
    id: '999',
    title: 'Post de Test',
    slug: 'test-post',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    date: '2025-05-01',
    category: 'it',
    type: 'texte'
  }
  ,  
  {
    id: '2',
    title: 'Creepypasta Splinter',
    slug: 'creepypasta-splinter',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'creepypasta',
    date: '2025-03-15',
    type: 'texte'
  },
  {
    id: '3',
    title: 'Projet Drawmory',
    slug: 'porjet-drawmory',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'projects',
    date: '2025-03-10',
    type: 'texte'
  }
];
