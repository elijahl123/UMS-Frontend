import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from '../../../services/routing/components/features/schedule/schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScheduleInfoComponent } from './schedule-info/schedule-info.component';
import { TimeModule } from '../../pipes/time/time.module';
import { ScheduleManageComponent } from './schedule-manage/schedule-manage.component';
import { CardComponent } from '../../ui/card/card.component';


@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleInfoComponent,
    ScheduleManageComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FontAwesomeModule,
    TimeModule,
    CardComponent
  ]
})
export class ScheduleModule {
}
