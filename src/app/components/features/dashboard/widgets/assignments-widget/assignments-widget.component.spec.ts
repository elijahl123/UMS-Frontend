import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsWidgetComponent } from './assignments-widget.component';

describe('AssignmentsWidgetComponent', () => {
   let component: AssignmentsWidgetComponent;
   let fixture: ComponentFixture<AssignmentsWidgetComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssignmentsWidgetComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(AssignmentsWidgetComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
