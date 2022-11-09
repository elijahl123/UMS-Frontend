import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySpaceComponent } from './empty-space.component';

describe('EmptySpaceComponent', () => {
  let component: EmptySpaceComponent;
  let fixture: ComponentFixture<EmptySpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmptySpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
