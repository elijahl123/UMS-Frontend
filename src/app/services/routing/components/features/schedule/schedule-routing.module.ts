import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from '../../../../../components/features/schedule/schedule.component';
import {
  ScheduleInfoComponent
} from '../../../../../components/features/schedule/schedule-info/schedule-info.component';
import {
  ScheduleManageComponent
} from '../../../../../components/features/schedule/schedule-manage/schedule-manage.component';
import { AuthGuard } from '../../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'course-time/:uid',
        component: ScheduleInfoComponent
      },
      {
        path: 'manage',
        component: ScheduleManageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule {
}
