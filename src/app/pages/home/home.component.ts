import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POSTS } from '../../content/posts';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  latestPosts: Post[] = [];
  lastRandomIndex: number | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const sortedPosts = POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this.latestPosts = sortedPosts.slice(0, 3);
    this.posts = sortedPosts;
  }

  goToRandomPost() {
    if (this.posts.length === 0) return;

    let randomIndex: number;

    do {
      randomIndex = Math.floor(Math.random() * this.posts.length);
    } while (randomIndex === this.lastRandomIndex && this.posts.length > 1);

    this.lastRandomIndex = randomIndex;

    const randomPost = this.posts[randomIndex];
    this.router.navigate([randomPost.path]);
  }
}
