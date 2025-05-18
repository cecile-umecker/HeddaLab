import { Component, AfterViewInit, OnInit } from '@angular/core';

declare var M: any;

interface Skill {
  name: string;
  level: number;
  icon: string;
  top?: string;
  left?: string;
  color?: string;
  shape?: string;
}

@Component({
  selector: 'app-skills-petri',
  templateUrl: './skills-petri.component.html',
  styleUrls: ['./skills-petri.component.scss'] // <- ici c’était "styleUrl", donc erreur silencieuse
})
export class SkillsPetriComponent implements OnInit, AfterViewInit {
  skillDishes: {
    title: string;
    color: string;
    skills: Skill[];
  }[] = [
    {
      title: 'Frontend',
      color: '#4FC3F7',
      skills: [
        { name: 'Angular', level: 80, icon: 'devicon-angularjs-plain colored' },
        { name: 'SCSS', level: 70, icon: 'devicon-sass-original colored' },
        { name: 'HTML5', level: 85, icon: 'devicon-html5-plain colored' },
        { name: 'CSS', level: 80, icon: 'devicon-css3-plain colored' },
      ]
    },
    {
      title: 'Backend',
      color: '#81C784',
      skills: [
        { name: 'Node.js', level: 85, icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', level: 70, icon: 'devicon-express-original' },
      ]
    },
    {
      title: 'Base de données',
      color: '#FFB74D',
      skills: [
        { name: 'SQLite', level: 80, icon: 'devicon-sqlite-plain colored' },
        { name: 'MySQL', level: 80, icon: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', level: 65, icon: 'devicon-mongodb-plain colored' },
      ]
    }
  ];

ngOnInit(): void {
  this.skillDishes.forEach(dish => {
    const placed: { x: number; y: number; r: number }[] = [];

    dish.skills.sort((a, b) => b.level - a.level);

    dish.skills.forEach((skill, index) => {
      const size = skill.level / 2;
      const radius = size / 2;

      let x = 0;
      let y = 0;
      let tries = 0;
      let valid = false;

      while (!valid && tries < 100) {
        x = Math.random() * (100 - size - 4) + 2;
        y = Math.random() * (100 - size - 4) + 2;

        valid = placed.every(p => {
          const dx = (x + radius) - (p.x + p.r);
          const dy = (y + radius) - (p.y + p.r);
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance > radius + p.r + 2;
        });

        tries++;
      }

      placed.push({ x, y, r: radius });

      skill.left = `${x}%`;
      skill.top = `${y}%`;

      skill.color = this.getRandomColorVariant(dish.color);

      skill.shape = `form-${Math.ceil(Math.random() * 4)}`;
    });
  });
}



  getRandomColorVariant(baseColor: string): string {
    const base = parseInt(baseColor.slice(1), 16);
    const variation = () => Math.floor(Math.random() * 30) - 15;

    const r = Math.min(255, Math.max(0, (base >> 16) + variation()));
    const g = Math.min(255, Math.max(0, ((base >> 8) & 0xff) + variation()));
    const b = Math.min(255, Math.max(0, (base & 0xff) + variation()));

    return `rgb(${r}, ${g}, ${b})`;
  }

  getRandomShape(): string {
    const shapes = ['blob-1', 'blob-2', 'blob-3', 'blob-4'];
    return shapes[Math.floor(Math.random() * shapes.length)];
  }

  getSafeRandomPosition(sizePercent: number): string {
    const margin = sizePercent;
    const safeRange = 100 - margin;
    return `${Math.random() * safeRange}%`;
  }

  generateContrastingColor(index: number, total: number): string {
    const hue = Math.floor((360 / total) * index);
    const saturation = 70 + Math.random() * 20;
    const lightness = 45 + Math.random() * 10;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }
}
