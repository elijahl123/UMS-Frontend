import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../../../../../components/features/calendar/calendar.component';
import {
   CalendarInfoComponent
} from '../../../../../components/features/calendar/calendar-info/calendar-info.component';
import { AuthGuard } from '../../../guards/auth/auth.guard';

const routes: Routes = [
   {
      path: '',
      component: CalendarComponent,
      canActivate: [AuthGuard],
      children: [
         {
            path: 'date/:date',
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
