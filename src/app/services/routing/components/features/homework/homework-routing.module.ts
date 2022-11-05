import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkComponent } from '../../../../../components/features/homework/homework.component';
import {
  HomeworkInfoComponent
} from '../../../../../components/features/homework/homework-info/homework-info.component';
import { AuthGuard } from '../../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeworkComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'assignment/:uid',
        component: HomeworkInfoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworkRoutingModule {
}
