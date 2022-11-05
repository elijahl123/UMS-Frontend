import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';

@Component({
  selector: 'form-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TextInputComponent extends BaseFormsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
