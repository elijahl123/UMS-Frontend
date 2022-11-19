import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from '../../../services/routing/components/features/forms/forms-routing.module';
import { FormsComponent } from './forms.component';
import { UmsFormsModule } from '../../forms/ums-forms.module';


@NgModule({
  declarations: [
    FormsComponent
  ],
	imports: [
		CommonModule,
		FormsRoutingModule,
		UmsFormsModule
	]
})
export class FormsModule { }
