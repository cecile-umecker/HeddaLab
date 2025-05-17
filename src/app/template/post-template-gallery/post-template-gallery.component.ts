import { Component, Input, AfterViewChecked, ElementRef } from '@angular/core';
import { Post } from '../../models/post.model';

declare var M:any;

@Component({
  selector: 'app-template-post-gallery',
  templateUrl: './post-template-gallery.component.html',
  styleUrls: ['./post-template-gallery.component.scss']
})
export class PostTemplateGalleryComponent implements AfterViewChecked {
  @Input() content: string = '';
  @Input() post!: Post;

  private materialboxInitialized = false;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked(): void {
    if (!this.materialboxInitialized) {
      const container = this.el.nativeElement.querySelector('.gallery-container');
      const images = container?.querySelectorAll('img');

      if (images && images.length > 0) {
        images.forEach((img: HTMLImageElement) => {
          img.classList.add('materialboxed');
        });

        M.Materialbox.init(images);
        this.materialboxInitialized = true;
      }
    }
  }
}
