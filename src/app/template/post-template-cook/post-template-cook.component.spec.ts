import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCookComponent } from './post-template-cook.component';

describe('PostCookComponent', () => {
  let component: PostCookComponent;
  let fixture: ComponentFixture<PostCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
