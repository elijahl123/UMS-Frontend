import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleManageComponent } from './schedule-manage.component';

describe('ScheduleManageComponent', () => {
  let component: ScheduleManageComponent;
  let fixture: ComponentFixture<ScheduleManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleManageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScheduleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
