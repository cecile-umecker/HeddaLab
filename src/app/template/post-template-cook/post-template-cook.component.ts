import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-post-cook',
  templateUrl: './post-template-cook.component.html',
  styleUrl: './post-template-cook.component.scss'
})
export class PostTemplateCookComponent {
  @Input() content: string = '';
}
