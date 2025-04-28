import { Component, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  filteredPosts: any[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        // Filtrer les posts par catégorie
        this.filteredPosts = this.PostService.getPostsByCategory(category);
      } else {
        // Montrer tous les posts
        this.filteredPosts = this.PostService.getPosts();
      }
      this.loading = false;
      this.cdr.detectChanges();
    });
  }  
}
