import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-post-article',
  templateUrl: './post-template-article.component.html',
  styleUrl: './post-template-article.component.scss'
})
export class PostTemplateArticleComponent {
  @Input() content: string = '';
}
