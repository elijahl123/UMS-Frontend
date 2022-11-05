import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormComponent } from './base-form.component';

describe('BaseComponent', () => {
  let component: BaseFormComponent;
  let fixture: ComponentFixture<BaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
