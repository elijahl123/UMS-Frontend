import { Component, OnInit } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';

@Component({
  selector: 'form-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent extends BaseFormsComponent implements OnInit {
  cols: number;
  rows: number;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
