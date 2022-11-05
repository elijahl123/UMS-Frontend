import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCoursesComponent } from './note-courses.component';

describe('NoteCoursesComponent', () => {
  let component: NoteCoursesComponent;
  let fixture: ComponentFixture<NoteCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteCoursesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
