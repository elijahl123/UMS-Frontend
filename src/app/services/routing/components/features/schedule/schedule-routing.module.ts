import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from '../../../../../components/features/schedule/schedule.component';
import {
  ScheduleInfoComponent
} from '../../../../../components/features/schedule/schedule-info/schedule-info.component';
import {
  ScheduleManageComponent
} from '../../../../../components/features/schedule/schedule-manage/schedule-manage.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      {
        path: ':uid',
        outlet: 'courseTimeInfo',
        component: ScheduleInfoComponent
      },
      {
        path: 'manage',
        outlet: 'scheduleInfo',
        component: ScheduleManageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
