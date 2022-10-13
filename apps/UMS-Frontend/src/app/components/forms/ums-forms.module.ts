import { NgModule } from '@angular/core';
import { TextInputComponent } from './input/text-input/text-input.component';
import { TextAreaComponent } from './input/text-area/text-area.component';
import { SearchInputComponent } from './input/search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { SelectInputComponent } from './input/select-input/select-input.component';
import { NumberInputComponent } from './input/number-input/number-input.component';
import { MultiSelectInputComponent } from './input/multi-select-input/multi-select-input.component';
import { CheckboxInputComponent } from './input/checkbox-input/checkbox-input.component';
import { RadioInputComponent } from './input/radio-input/radio-input.component';
import { SwitchInputComponent } from './input/switch-input/switch-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseFormComponent } from './base/base-form.component';
import { BaseFieldComponent } from './field/base/base-field.component';

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
    SwitchInputComponent,
    BaseFieldComponent,
    BaseFormComponent,
  ],
  exports: [
    CheckboxInputComponent,
    RadioInputComponent,
    MultiSelectInputComponent,
    NumberInputComponent,
    SearchInputComponent,
    SelectInputComponent,
    SwitchInputComponent,
    TextAreaComponent,
    TextInputComponent,
    BaseFieldComponent,
    BaseFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class UmsFormsModule {
}
