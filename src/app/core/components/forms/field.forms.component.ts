import { Component, Input } from '@angular/core';
import { BaseFormsComponent } from './base.forms.component';

@Component({
  standalone: true,
  template: ""
})
export class FieldFormsComponent extends BaseFormsComponent {
  @Input() info: boolean = false;
  @Input() required: string = "false";
}

