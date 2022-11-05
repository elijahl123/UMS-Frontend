import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  ScheduleWidgetComponent
} from '../../../../components/features/dashboard/widgets/schedule-widget/schedule-widget.component';
import {
  AssignmentsWidgetComponent
} from '../../../../components/features/dashboard/widgets/assignments-widget/assignments-widget.component';
import {
  CalendarWidgetComponent
} from '../../../../components/features/dashboard/widgets/calendar-widget/calendar-widget.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private primaryContent: BehaviorSubject<Type<any> | null> = new BehaviorSubject<Type<any> | null>(ScheduleWidgetComponent);
  private secondaryContent: BehaviorSubject<Type<any> | null> = new BehaviorSubject<Type<any> | null>(AssignmentsWidgetComponent);
  private tertiaryContent: BehaviorSubject<Type<any> | null> = new BehaviorSubject<Type<any> | null>(CalendarWidgetComponent);

  constructor() {
  }

  setPrimaryContent(component: Type<any> | null): BehaviorSubject<Type<any> | null> {
    this.primaryContent.next(component);
    return this.primaryContent;
  }

  setSecondaryContent(component: Type<any> | null): BehaviorSubject<Type<any> | null> {
    this.secondaryContent.next(component);
    return this.secondaryContent;
  }

  setTertiaryContent(component: Type<any> | null): BehaviorSubject<Type<any> | null> {
    this.tertiaryContent.next(component);
    return this.tertiaryContent;
  }

  getPrimaryContent(): BehaviorSubject<Type<any> | null> {
    return this.primaryContent;
  }

  getSecondaryContent(): BehaviorSubject<Type<any> | null> {
    return this.secondaryContent;
  }

  getTertiaryContent(): BehaviorSubject<Type<any> | null> {
    return this.tertiaryContent;
  }
}
