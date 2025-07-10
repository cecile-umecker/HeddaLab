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
        { label: 'Angular', icon: 'devicon-angularjs-plain colored', url: 'https://angular.io/', description: 'Framework SPA basé sur TypeScript' },
        { label: 'TypeScript', icon: 'devicon-typescript-plain colored', url: 'https://www.typescriptlang.org/', description: 'Superset typé de JavaScript moderne' },
        { label: 'JavaScript', icon: 'devicon-javascript-plain colored', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', description: 'Langage incontournable du web' },
        { label: 'ReactJS', icon: 'devicon-react-original colored', url: 'https://reactjs.org/', description: 'Bibliothèque JavaScript pour les interfaces utilisateur' },
        { label: 'React Native', icon: 'devicon-react-original', url: 'https://reactnative.dev/', description: 'Framework pour applications mobiles natives en JavaScript' },
        { label: 'VueJS', icon: 'devicon-vuejs-plain colored', url: 'https://vuejs.org/', description: 'Framework JavaScript progressif' },
        { label: 'CSS3', icon: 'devicon-css3-plain colored', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', description: 'Feuilles de style en cascade modernes' },
        { label: 'SCSS', icon: 'devicon-sass-original colored', url: 'https://sass-lang.com/', description: 'Préprocesseur CSS avec une syntaxe inspirée de CSS' },
        { label: 'Less', icon: 'devicon-less-plain-wordmark colored', url: 'https://lesscss.org/', description: 'Préprocesseur CSS léger et modulaire' },
        { label: 'HTML5', icon: 'devicon-html5-plain colored', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', description: 'Langage de structure pour le web' },
        { label: 'Materialize', icon: 'devicon-materializecss-plain colored', url: 'https://materializecss.com/', description: 'Framework CSS basé sur Material Design' },
        { label: 'Tailwind', icon: 'devicon-tailwindcss-plain colored', url: 'https://tailwindcss.com/', description: 'Framework utilitaire CSS orienté composants' },
        { label: 'Bulma', icon: 'devicon-bulma-plain colored', url: 'https://bulma.io/', description: 'Framework CSS responsive moderne' },
        { label: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', url: 'https://getbootstrap.com/', description: 'Framework CSS populaire pour design responsive' },
      ]
    },
    {
      category: 'Backend & API',
      icon: 'settings_applications',
      items: [
        { label: 'Node.js', icon: 'devicon-nodejs-plain colored', url: 'https://nodejs.org/', description: 'Runtime JavaScript côté serveur' },
        { label: 'Express', icon: 'devicon-express-original colored', url: 'https://expressjs.com/', description: 'Framework minimaliste pour Node.js' },
        { label: 'Fastify', icon: 'devicon-fastify-plain colored', url: 'https://www.fastify.io/', description: 'Framework Node.js rapide et low overhead' },
        { label: 'MySQL', icon: 'devicon-mysql-plain colored', url: 'https://dev.mysql.com/', description: 'Base de données relationnelle classique' },
        { label: 'SQLite', icon: 'devicon-sqlite-plain colored', url: 'https://www.sqlite.org/', description: 'Base de données légère embarquée' },
        { label: 'MariaDB', icon: 'devicon-mariadb-plain colored', url: 'https://mariadb.org/', description: 'Base de données relationnelle open source issue de MySQL' },
        { label: 'MongoDB', icon: 'devicon-mongodb-plain colored', url: 'https://www.mongodb.com/', description: 'Base NoSQL orientée documents' },
      ]
    },
    {
      category: 'Outils & Environnement',
      icon: 'build',
      items: [
        { label: 'Git', icon: 'devicon-git-plain colored', url: 'https://git-scm.com/', description: 'Versioning distribué pour le code source' },
        { label: 'GitHub', icon: 'devicon-github-original colored', url: 'https://github.com/', description: 'Hébergement de dépôts Git en ligne' },
        { label: 'VS Code', icon: 'devicon-vscode-plain colored', url: 'https://code.visualstudio.com/', description: 'Éditeur de code moderne et extensible' },
        { label: 'Eclipse', icon: 'devicon-eclipse-plain colored', url: 'https://www.eclipse.org/', description: 'Environnement de développement Java et autres langages' },
        { label: 'Postman', icon: 'devicon-postman-plain colored', url: 'https://www.postman.com/', description: 'Test et documentation d’API REST' },
        { label: 'MongoDB Compass', icon: 'devicon-mongodb-plain colored', url: 'https://www.mongodb.com/products/compass', description: 'Interface graphique pour MongoDB' },
        { label: 'Notion', icon: 'devicon-notion-plain', url: 'https://www.notion.so/', description: 'Documentation, organisation et planification' },
        { label: 'Trello', icon: 'devicon-trello-plain colored', url: 'https://trello.com/', description: 'Gestion de projets visuelle par cartes' },
        { label: 'Azure DevOps', icon: 'devicon-azuredevops-plain colored', url: 'https://azure.microsoft.com/en-us/services/devops/', description: 'CI/CD, boards et gestion de versions intégrée' },
        { label: 'Jira', icon: 'devicon-jira-plain colored', url: 'https://www.atlassian.com/software/jira', description: 'Suivi de projet agile et ticketing' },
        { label: 'Figma', icon: 'devicon-figma-plain colored', url: 'https://www.figma.com/', description: 'Outil collaboratif de design UI/UX' },
        { label: 'AdobeXD', icon: 'devicon-xd-plain colored', url: 'https://www.adobe.com/products/xd.html', description: 'Conception et prototypage d’interfaces interactives' },
        { label: 'Windows', icon: 'devicon-windows8-original colored', url: 'https://www.microsoft.com/windows/', description: 'Système d’exploitation utilisé pour le développement' },
        { label: 'Linux', icon: 'devicon-linux-plain colored', url: 'https://www.kernel.org/', description: 'Système d’exploitation libre pour le développement' },
        { label: 'macOS', icon: 'devicon-apple-original colored', url: 'https://www.apple.com/macos/', description: 'Système d’exploitation Apple utilisé pour le dev et le design' }
      ]
    },
    {
      category: 'Compétences transverses',
      icon: 'hub',
      items: [
        { label: 'Java', icon: 'devicon-java-plain colored', url: 'https://dev.java/learn/', description: 'Langage orienté objet robuste' },
        { label: 'Spring Boot', icon: 'devicon-spring-plain colored', url: 'https://spring.io/projects/spring-boot', description: 'Framework Java pour API REST' },
        { label: 'Python', icon: 'devicon-python-plain colored', url: 'https://www.python.org/', description: 'Langage polyvalent pour scripting, data et automation' },
        { label: 'PHP', icon: 'devicon-php-plain colored', url: 'https://www.php.net/', description: 'Langage serveur historique du web' },
        { label: 'Laravel', icon: 'devicon-laravel-plain colored', url: 'https://laravel.com/', description: 'Framework PHP moderne et expressif' },
        { label: 'Symfony', icon: 'devicon-symfony-original colored', url: 'https://symfony.com/', description: 'Framework PHP robuste et modulaire' },
        { label: 'C#', icon: 'devicon-csharp-plain colored', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', description: 'Langage orienté objet pour .NET' },
        { label: '.NET Core', icon: 'devicon-dotnetcore-plain colored', url: 'https://learn.microsoft.com/en-us/dotnet/core/', description: 'Framework multiplateforme pour apps .NET' },
        { label: 'jQuery', icon: 'devicon-jquery-plain colored', url: 'https://jquery.com/', description: 'Bibliothèque JavaScript pour manipulations DOM rapides' },
        { label: 'Socket.IO', icon: 'devicon-socketio-original colored', url: 'https://socket.io/', description: 'Communication temps réel avec WebSockets' },
        { label: 'Ionic', icon: 'devicon-ionic-original colored', url: 'https://ionicframework.com/', description: 'Framework hybride pour applications mobiles avec Angular' },
        { label: 'Bash', icon: 'devicon-bash-plain colored', url: 'https://www.gnu.org/software/bash/', description: 'Scripting shell sous Linux' },
        { label: 'PowerShell', icon: 'devicon-powershell-plain colored', url: 'https://learn.microsoft.com/en-us/powershell/', description: 'Shell de scripting avancé pour Windows' },
        { label: 'Arduino', icon: 'devicon-arduino-plain colored', url: 'https://www.arduino.cc/', description: 'Microcontrôleur pour projets embarqués' },
        { label: 'Raspberry Pi', icon: 'devicon-raspberrypi-line colored', url: 'https://www.raspberrypi.com/', description: 'Nano-ordinateur pour prototypage et projets personnels' },
        { label: 'Unity', icon: 'devicon-unity-plain colored', url: 'https://unity.com/', description: 'Moteur de jeu 2D/3D multiplateforme' },
        { label: 'Docker', icon: 'devicon-docker-plain colored', url: 'https://www.docker.com/', description: 'Conteneurisation d’applications et environnements' },
        { label: 'FileZilla', icon: 'devicon-filezilla-plain colored', url: 'https://filezilla-project.org/', description: 'Client FTP open source' },
        { label: 'Confluence', icon: 'devicon-confluence-plain colored', url: 'https://www.atlassian.com/software/confluence', description: 'Wiki collaboratif pour documentation d’équipe' },
        { label: 'Photoshop', icon: 'devicon-photoshop-plain colored', url: 'https://www.adobe.com/products/photoshop.html', description: 'Retouche et création d’images professionnelles' },
        { label: 'Illustrator', icon: 'devicon-illustrator-plain colored', url: 'https://www.adobe.com/products/illustrator.html', description: 'Création vectorielle pour graphisme et design' },
        { label: 'Canva', icon: 'devicon-canva-original colored', url: 'https://www.canva.com/', description: 'Outil en ligne de design accessible et rapide' }
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
