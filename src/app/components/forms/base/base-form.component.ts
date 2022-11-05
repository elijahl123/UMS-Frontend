import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-base',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
