import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';

@Component({
  selector: 'form-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxInputComponent extends BaseFormsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
