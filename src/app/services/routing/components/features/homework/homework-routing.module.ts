import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkComponent } from '../../../../../components/features/homework/homework.component';
import {
  HomeworkInfoComponent
} from '../../../../../components/features/homework/homework-info/homework-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeworkComponent,
    children: [
      {
        path: ':uid',
        component: HomeworkInfoComponent,
        outlet: 'homeworkInfo'
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
