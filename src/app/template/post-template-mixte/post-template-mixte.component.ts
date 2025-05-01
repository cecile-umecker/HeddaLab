import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-post-mixte',
  templateUrl: './post-template-mixte.component.html',
  styleUrl: './post-template-mixte.component.scss'
})
export class PostTemplateMixteComponent {
  @Input() content: string = '';
}
