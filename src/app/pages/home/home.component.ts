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
  flipWords = ['Lab', 'Photo', 'Tech', 'Cook', 'Write', 'Code'];
  currentWord = 'Lab';
  letterArray: string[] = [];
  private index = 0;

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    const posts = this.postService.getPosts();
    this.latestPosts = posts.slice(0, 3);
    this.updateLetterArray(this.currentWord);

    setInterval(() => {
      this.index = (this.index + 1) % this.flipWords.length;
      const newWord = this.flipWords[this.index];
      this.animateLetterTransition(newWord);
    }, 2500);
  }
  
  animateLetterTransition(newWord: string): void {
    const oldLength = this.letterArray.length;
    const newLetters = newWord.split('');
    const maxLength = Math.max(oldLength, newLetters.length);

    const tempArray = [...this.letterArray];

    for (let i = 0; i < maxLength; i++) {
      setTimeout(() => {
        tempArray[i] = newLetters[i] || ''; // remplace ou vide la lettre
        this.letterArray = [...tempArray.slice(0, newLetters.length)];
      }, i * 100);
    }
  }

  updateLetterArray(word: string) {
    this.letterArray = word.split('');
  }

  goToRandomPost() {
    const randomPost = this.postService.getRandomPost();
    if (randomPost) {
      this.router.navigate(['/post', randomPost.slug]);
    }
  }  
}
