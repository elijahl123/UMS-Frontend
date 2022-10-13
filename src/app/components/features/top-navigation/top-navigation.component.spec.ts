import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationComponent } from './top-navigation.component';

describe('SideNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an isOpen property', () => {
    expect(component.isOpen).toBeTruthy();
  });

});
