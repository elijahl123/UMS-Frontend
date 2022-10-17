import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '../../../services/routing/components/features/dashboard/dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ScheduleWidgetComponent } from './widgets/schedule-widget/schedule-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AssignmentsWidgetComponent } from './widgets/assignments-widget/assignments-widget.component';
import { CardComponent } from '../../ui/card/card.component';
import { CalendarWidgetComponent } from './widgets/calendar-widget/calendar-widget.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ScheduleWidgetComponent,
    AssignmentsWidgetComponent,
    CalendarWidgetComponent,
  ],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		FontAwesomeModule,
		FormsModule,
		CardComponent
	]
})
export class DashboardModule { }
