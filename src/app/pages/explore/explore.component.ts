import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { getCategoryLabel } from '../../shared/category-labels';
import { Paginator } from '../../shared/paginator';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  filteredPosts: any[] = [];
  paginatedPosts: any[] = [];
  paginator!: Paginator<any>;

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

      this.filteredPosts = category
        ? this.postService.getPostsByCategory(category)
        : this.postService.getPosts();

      this.displayCategory = category ? getCategoryLabel(category) : null;

      this.paginator = new Paginator(this.filteredPosts, 10);
      this.paginatedPosts = this.paginator.getPage(1);

      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  setPage(page: number): void {
    this.paginatedPosts = this.paginator.getPage(page);
  }

  getPageRange(): number[] {
    return this.paginator.getPageRange();
  }

  get currentPage(): number {
    return this.paginator.currentPage;
  }

  get totalPages(): number {
    return this.paginator.totalPages;
  }
}
