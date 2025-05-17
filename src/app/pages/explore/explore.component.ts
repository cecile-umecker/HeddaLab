import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { getCategoryLabel } from '../../shared/category-labels'; // à importer

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  filteredPosts: any[] = [];
  loading = true;
  currentCategory: string | null = null;
  displayCategory: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      this.currentCategory = category;

      if (category) {
        this.filteredPosts = this.postService.getPostsByCategory(category);
        this.displayCategory = getCategoryLabel(category);
      } else {
        this.filteredPosts = this.postService.getPosts();
        this.displayCategory = null;
      }

      this.loading = false;
      this.cdr.detectChanges();
    });
  }  
}
