import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latestPosts: Post[] = [];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    const posts = this.postService.getPosts();
    this.latestPosts = posts.slice(0, 3);
  }
  

  goToRandomPost() {
    const randomPost = this.postService.getRandomPost();
    if (randomPost) {
      this.router.navigate([randomPost.path]);
      console.log(randomPost.title)
    }
  }
}
