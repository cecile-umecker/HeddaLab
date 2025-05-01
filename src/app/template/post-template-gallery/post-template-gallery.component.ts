import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-post-gallery',
  templateUrl: './post-template-gallery.component.html',
  styleUrl: './post-template-gallery.component.scss'
})
export class PostTemplateGalleryComponent {
  @Input() content: string = '';
}
