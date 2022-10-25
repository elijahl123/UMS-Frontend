import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFieldComponent } from './base-field.component';

describe('BaseComponent', () => {
   let component: BaseFieldComponent;
   let fixture: ComponentFixture<BaseFieldComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [BaseFieldComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(BaseFieldComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
