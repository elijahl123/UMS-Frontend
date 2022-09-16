import { Component, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { NgForm } from '@angular/forms';

@Component({
  standalone: true,
  template: ""
})
export class BaseFormsComponent {
  @Input() style: { [key: string]: string } = {};
  @Input() class: string | string[] = '';
  @Input() value: any;
  @Input() type: string = 'text';
  @Input() name: string = 'name';
  @Input() label: string = 'label';
  @Input() id: string = uuidv4();
  @Input() placeholder: string = "";
  @Input() required: string = "false";
  @Input() f: NgForm;
}

