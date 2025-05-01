import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArticleComponent } from './post-template-article.component';

describe('PostTextComponent', () => {
  let component: PostArticleComponent;
  let fixture: ComponentFixture<PostArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
