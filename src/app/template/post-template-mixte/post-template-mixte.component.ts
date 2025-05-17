import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-template-post-mixte',
  templateUrl: './post-template-mixte.component.html',
  styleUrl: './post-template-mixte.component.scss'
})
export class PostTemplateMixteComponent {
  @Input() content: string = '';
  @Input() post!: Post;
}
