import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Post[] = [];

  skillGroups = [
    {
      label: 'Langages',
      skills: [
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' }
      ]
    },
    {
      label: 'Frameworks',
      skills: [
        { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' }
      ]
    },
    {
      label: 'Outils',
      skills: [
        { name: 'Git', iconClass: 'devicon-git-plain colored' },
        { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' }
      ]
    },
    {
      label: 'Systèmes',
      skills: [
        { name: 'Linux', iconClass: 'devicon-linux-plain colored' },
        { name: 'Windows', iconClass: 'devicon-windows8-plain colored' }
      ]
    }
  ];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.projects = this.postService.getProjects();
  }
}
