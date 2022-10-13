import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  ScheduleWidgetComponent
} from '../../../../components/features/dashboard/widgets/schedule-widget/schedule-widget.component';

class LargeWidget {
  size = 'large';
}

class MediumWidget {
  size = 'medium';
}

class SmallWidget {
  size = 'small';
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private primaryContent: BehaviorSubject<Type<any> | null> = new BehaviorSubject<Type<any> | null>(ScheduleWidgetComponent<LargeWidget>);
  private secondaryContent: BehaviorSubject<Type<any> | null> = new BehaviorSubject<Type<any> | null>(null);
  private tertiaryContent: BehaviorSubject<Type<any> | null> = new BehaviorSubject<Type<any> | null>(null);

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
