import { Component } from '@angular/core';
import { POSTS } from '../../content/posts'; // attention au chemin relatif

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  posts = POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

}
