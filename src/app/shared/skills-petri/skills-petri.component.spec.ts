import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPetriComponent } from './skills-petri.component';

describe('SkillsPetriComponent', () => {
  let component: SkillsPetriComponent;
  let fixture: ComponentFixture<SkillsPetriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsPetriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsPetriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
