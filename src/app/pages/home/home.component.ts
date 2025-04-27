import { Component } from '@angular/core';
import { POSTS } from '../../content/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts = POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
}
