import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from '../../../../../components/features/forms/forms.component';

const routes: Routes = [
  {
    path: 'add/:mutation',
    component: FormsComponent,
  },
  {
    path: 'edit/:mutation/:uid',
    component: FormsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
