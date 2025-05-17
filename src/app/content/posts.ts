import { Post } from '../models/post.model';

export const POSTS: Post[] = [
  {
    id: '1',
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
    type: 'project'
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
    title: 'Pain maison facile',
    slug: 'projet-cuisine',
    excerpt: 'Un pain moelleux et croustillant, à portée de main.',
    category: 'cook',
    date: '2025-03-10',
    type: 'cook',
    cover: 'about-photo.png',
    prepTime: '15 min',
    cookTime: '25 min',
    totalTime: '1h40',
    ingredients: [
      '500g de farine',
      '1 sachet de levure boulangère',
      '1 cuillère à café de sel',
      '300ml d’eau tiède'
    ]
  }
];
