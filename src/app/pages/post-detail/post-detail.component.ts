import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post?: Post;
  markdownContent = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.router.navigate(['/']);
      return;
    }

    const foundPost = this.postService.getPosts().find(p => p.slug === slug);
    if (!foundPost) {
      this.router.navigate(['/']);
      return;
    }

    this.post = foundPost;

    this.postService.getMarkdownContent(slug).subscribe({
      next: content => {
        this.markdownContent = content;
        this.loading = false;
      },
      error: () => {
        this.markdownContent = '_Contenu introuvable._';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }  
}
