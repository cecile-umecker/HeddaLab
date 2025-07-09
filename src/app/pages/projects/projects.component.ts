import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { AfterViewInit } from '@angular/core';
// @ts-ignore
import * as M from 'materialize-css';

interface Skill {
  label: string;
  icon: string;
  url: string;
  description: string;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Post[] = [];

  skillGroups = [
    {
      category: 'Frontend',
      icon: 'palette',
      items: [
        { label: 'Angular', icon: 'devicon-angularjs-plain colored', url: 'https://angular.io/', description: 'Framework SPA en TypeScript' },
        { label: 'TypeScript', icon: 'devicon-typescript-plain colored', url: 'https://www.typescriptlang.org/', description: 'Superset typé de JavaScript' },
        { label: 'SCSS', icon: 'devicon-sass-original colored', url: 'https://sass-lang.com/', description: 'Préprocesseur CSS structuré' },
        { label: 'HTML5', icon: 'devicon-html5-plain colored', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', description: 'Langage de structure web' },
        { label: 'Tailwind', icon: 'devicon-tailwindcss-plain colored', url: 'https://tailwindcss.com/', description: 'Framework utilitaire CSS moderne' },
        { label: 'Figma', icon: 'devicon-figma-plain colored', url: 'https://www.figma.com/', description: 'Outil de design collaboratif' }
      ]
    },
    {
      category: 'Backend & API',
      icon: 'settings_applications',
      items: [
        { label: 'Node.js', icon: 'devicon-nodejs-plain colored', url: 'https://nodejs.org/', description: 'Runtime JS côté serveur' },
        { label: 'Express', icon: 'devicon-express-original colored', url: 'https://expressjs.com/', description: 'Framework web minimaliste pour Node' },
        { label: 'JWT', icon: 'devicon-json-plain colored', url: 'https://jwt.io/', description: 'Authentification via JSON Web Token' },
        { label: 'MongoDB', icon: 'devicon-mongodb-plain colored', url: 'https://www.mongodb.com/', description: 'Base NoSQL orientée documents' },
        { label: 'MySQL', icon: 'devicon-mysql-plain colored', url: 'https://dev.mysql.com/', description: 'Base de données relationnelle' },
        { label: 'REST API', icon: 'devicon-postman-plain colored', url: 'https://restfulapi.net/', description: 'Standard d’interface entre systèmes' }
      ]
    },
    {
      category: 'Outils & Environnement',
      icon: 'build',
      items: [
        { label: 'Git', icon: 'devicon-git-plain colored', url: 'https://git-scm.com/', description: 'Versioning distribué' },
        { label: 'VS Code', icon: 'devicon-vscode-plain colored', url: 'https://code.visualstudio.com/', description: 'Éditeur de code moderne' },
        { label: 'GitHub Actions', icon: 'devicon-github-original colored', url: 'https://docs.github.com/en/actions', description: 'CI/CD intégrée à GitHub' },
        { label: 'Notion', icon: 'devicon-notion-plain', url: 'https://www.notion.so/', description: 'Organisation & documentation' },
        { label: 'Trello', icon: 'devicon-trello-plain colored', url: 'https://trello.com/', description: 'Outil visuel de gestion de tâches' }
      ]
    },
    {
      category: 'Langages complémentaires',
      icon: 'memory',
      items: [
        { label: 'Python', icon: 'devicon-python-plain colored', url: 'https://docs.python.org/', description: 'Langage de scripting et data' },
        { label: 'Django', icon: 'devicon-django-plain', url: 'https://www.djangoproject.com/', description: 'Framework Python full stack' },
        { label: 'PHP', icon: 'devicon-php-plain colored', url: 'https://www.php.net/', description: 'Langage backend historique du web' },
        { label: 'Laravel', icon: 'devicon-laravel-plain colored', url: 'https://laravel.com/', description: 'Framework PHP moderne et élégant' },
        { label: 'Symfony', icon: 'devicon-symfony-original colored', url: 'https://symfony.com/', description: 'Framework PHP robuste et modulaire' },
        { label: 'SQLite', icon: 'devicon-sqlite-plain colored', url: 'https://www.sqlite.org/', description: 'Base de données légère et embarquée' },
        { label: 'Java', icon: 'devicon-java-plain colored', url: 'https://dev.java/learn/', description: 'Langage orienté objet robuste' },
        { label: 'Spring Boot', icon: 'devicon-spring-plain colored', url: 'https://spring.io/projects/spring-boot', description: 'Framework Java pour API REST' },
        { label: 'C#', icon: 'devicon-csharp-plain colored', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', description: 'Langage orienté objet pour .NET' }
      ]
    }
  ];

  isTouchDevice: boolean = false;
  currentTooltip: M.Tooltip | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.projects = this.postService.getProjects();
    this.isTouchDevice = window.matchMedia('(hover: none)').matches;
  }

  getSkillId(label: string): string {
    return label.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  getTooltipContent(skill: Skill): string {
    // Double quotes sont échappées pour éviter les conflits HTML
    return `<strong>${skill.label}</strong><br>${skill.description}`;
  }

  handleMobileTooltipBehavior(): void {
    const tiles = document.querySelectorAll<HTMLAnchorElement>('.skill-tile');

    tiles.forEach(tile => {
      let touchedOnce = false;

      tile.addEventListener('touchstart', (event) => {
        if (!touchedOnce) {
          event.preventDefault(); // bloque le lien au 1er tap
          touchedOnce = true;

          // Simule le hover pour Materialize (ou manuellement si nécessaire)
          tile.classList.add('hovered');
          const tooltipInstance = M.Tooltip.getInstance(tile);
          tooltipInstance && tooltipInstance.open();

          setTimeout(() => {
            touchedOnce = false;
            tooltipInstance && tooltipInstance.close();
            tile.classList.remove('hovered');
          }, 2500); // délai avant de réinitialiser

        } else {
          // 2e tap = redirige
          window.open(tile.href, '_blank');
        }
      });
    });
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {
      html: true,
      enterDelay: 60,
    });
    elems.forEach((el, index) => {
      el.addEventListener('mouseenter', () => {
        const instance = M.Tooltip.getInstance(el);
        if (this.currentTooltip && this.currentTooltip !== instance) {
          this.currentTooltip.close();
        }
        this.currentTooltip = instance;
      });

      el.addEventListener('touchstart', () => {
        const instance = M.Tooltip.getInstance(el);
        if (this.currentTooltip && this.currentTooltip !== instance) {
          this.currentTooltip.close();
        }
        this.currentTooltip = instance;
      });
    });
    this.handleMobileTooltipBehavior();
  }
}
