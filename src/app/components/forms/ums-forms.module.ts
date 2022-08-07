import { NgModule } from '@angular/core';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { SelectInputComponent } from './select-input/select-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { MultiSelectInputComponent } from './multi-select-input/multi-select-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    SelectInputComponent,
    TextAreaComponent,
    MultiSelectInputComponent,
    SearchInputComponent,
    NumberInputComponent,
    CheckboxInputComponent,
    RadioInputComponent,
    SwitchInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UmsFormsModule {
}
