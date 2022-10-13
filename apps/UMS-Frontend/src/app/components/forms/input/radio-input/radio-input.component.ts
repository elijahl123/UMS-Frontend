import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';

@Component({
  selector: 'form-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadioInputComponent extends BaseFormsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
