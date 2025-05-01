import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMixteComponent } from './post-template-mixte.component';

describe('PostMixteComponent', () => {
  let component: PostMixteComponent;
  let fixture: ComponentFixture<PostMixteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostMixteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMixteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
