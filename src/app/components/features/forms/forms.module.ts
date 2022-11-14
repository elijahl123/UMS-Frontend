import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from '../../../services/routing/components/features/forms/forms-routing.module';
import { FormsComponent } from './forms.component';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
