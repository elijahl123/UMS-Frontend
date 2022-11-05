import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldFormsComponent } from '../../../../core/components/forms/field.forms.component';

/**
 * @usage:
 * <form-field label="This is a label" subLabel="This is a sub label" [horizontal]="true">
 *   <form-checkbox-input></form-checkbox-input>
 * </form-field>
 */
@Component({
  selector: 'form-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseFieldComponent extends FieldFormsComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() label: string = 'Label';
  @Input() subLabel: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getFormFieldClass() {
    return this.horizontal ? 'row' : '';
  }
}
