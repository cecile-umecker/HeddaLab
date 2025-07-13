import { Post } from '../models/post.model';

/*
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
    github: 'https://www.github.io',
    demo: 'https://www.google.fr'
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
*/

export const POSTS: Post[] = [
  {
    title: 'Splinter',
    slug: 'creepypasta-splinter',
    excerpt: 'Plongez dans l obscurité nauséabonde des égouts de New York',
    category: 'creepypasta',
    date: '2025-03-15',
    type: 'article'
  },
  {
    title: 'Dune & Riddick',
    slug: 'dune-theory',
    excerpt: 'Et si les univers de Dune et Riddick cachaient une connexion ?',
    date: '2025-07-13',
    category: 'divers',
    type: 'mixte'
  }
];
