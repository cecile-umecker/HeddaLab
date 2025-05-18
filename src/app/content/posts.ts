import { Post } from '../models/post.model';

export const POSTS: Post[] = [
  {
    title: 'Post de Test',
    slug: 'test-post',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    date: '2025-05-01',
    category: 'it',
    type: 'mixte'
  }
  ,  
  {
    title: 'Creepypasta Splinter',
    slug: 'creepypasta-splinter',
    excerpt: 'Un test pour valider l’affichage Markdown. Un test pour valider l’affichage Markdown. Un test pour valider l’affichage Markdown. Un test pour valider l’affichage Markdown. Un test pour valider l’affichage Markdown. Un test pour valider l’affichage Markdown. Un test pour valider l’affichage Markdown.',
    category: 'creepypasta',
    date: '2025-03-15',
    type: 'article'
  },
  {
    title: 'Projet Drawmory',
    slug: 'projet-drawmory',
    excerpt: 'Un test pour valider l’affichage MarkdownUn test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown.Un test pour valider l’affichage Markdown',
    category: 'projects',
    date: '2025-03-10',
    type: 'project',
    cover: '../../assets/images/about-photo.png',
    stack: [
      'Node.js',
      'Socket.io',
      'Angular',
      'MongoDB',
      'Node.js',
      'Socket.io',
      'Angular',
      'MongoDB'
    ],
    github: 'www.github.io',
    demo: 'www.google.fr'
  },
  {
    title: 'Projet galerie',
    slug: 'projet-galerie',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'pictures',
    date: '2025-03-10',
    type: 'gallery'
  },
  {
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
  },
    {
    title: 'Projet Drawmory2',
    slug: 'projet-drawmory2',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'projects',
    date: '2025-03-10',
    type: 'project',
    cover: '../../assets/images/about-photo.png',
    stack: [
      'Node.js',
      'Socket.io',
      'Angular',
      'MongoDB'
    ]
  },
    {
    title: 'Projet Drawmory3',
    slug: 'projet-drawmory3',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'projects',
    date: '2025-03-10',
    type: 'project',
    cover: '../../assets/images/about-photo.png',
    stack: [
      'Node.js',
      'Socket.io',
      'Angular',
      'MongoDB'
    ]
  },
    {
    title: 'Projet Drawmory4',
    slug: 'projet-drawmory4',
    excerpt: 'Un test pour valider l’affichage Markdown.',
    category: 'projects',
    date: '2025-03-10',
    type: 'project',
    cover: '../../assets/images/about-photo.png',
    stack: [
      'Node.js',
      'Socket.io',
      'Angular',
      'MongoDB'
    ]
  },
];
