import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from '../../../services/routing/components/features/calendar/calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CalendarInfoComponent } from './calendar-info/calendar-info.component';
import { CalendarDateComponent } from './calendar-date/calendar-date.component';
import { CardComponent } from '../../ui/card/card.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarInfoComponent,
    CalendarDateComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CardComponent
  ]
})
export class CalendarModule {
}
