import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POSTS } from '../content/posts';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private lastRandomIndex: number | null = null;

  constructor(private http: HttpClient) { }

  getPosts(): Post[] {
    return POSTS
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getPostById(slug: string): Post | undefined {
    return POSTS.find(post => post.slug === slug);
  }
  

  getPostsByCategory(category: string): Post[] {
    return POSTS
      .filter(post => post.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getRandomPost(): Post | undefined {
    const posts = this.getPosts();
    if (posts.length === 0) return undefined;

    let randomIndex: number;

    do {
      randomIndex = Math.floor(Math.random() * posts.length);
    } while (posts.length > 1 && randomIndex === this.lastRandomIndex);

    this.lastRandomIndex = randomIndex;
    return posts[randomIndex];
  }

  getMarkdownContent(slug: string): Observable<string> {
    return this.http.get(`assets/markdown/${slug}.md`, { responseType: 'text' });
  }
  
}
