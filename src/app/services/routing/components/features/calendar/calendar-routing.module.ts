import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../../../../../components/features/calendar/calendar.component';
import {
  CalendarInfoComponent
} from '../../../../../components/features/calendar/calendar-info/calendar-info.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
    children: [
      {
        outlet: 'calendarInfo',
        path: ':date',
        component: CalendarInfoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {
}
