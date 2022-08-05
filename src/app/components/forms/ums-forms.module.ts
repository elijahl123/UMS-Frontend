import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control/control.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { RangeComponent } from './range/range.component';



@NgModule({
  declarations: [
    ControlComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    RangeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UmsFormsModule { }
