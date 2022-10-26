import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationItemComponent } from './top-navigation-item.component';

describe('SideNavigationItemComponent', () => {
   let component: TopNavigationItemComponent;
   let fixture: ComponentFixture<TopNavigationItemComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [TopNavigationItemComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(TopNavigationItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
