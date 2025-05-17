import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-template-post-article',
  templateUrl: './post-template-article.component.html',
  styleUrl: './post-template-article.component.scss'
})
export class PostTemplateArticleComponent {
  @Input() content: string = '';
  @Input() post!: Post;
}
