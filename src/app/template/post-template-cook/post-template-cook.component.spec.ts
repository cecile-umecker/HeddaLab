import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostTemplateCookComponent  } from './post-template-cook.component';

describe('PostCookComponent', () => {
  let component: PostTemplateCookComponent ;
  let fixture: ComponentFixture<PostTemplateCookComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTemplateCookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTemplateCookComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
