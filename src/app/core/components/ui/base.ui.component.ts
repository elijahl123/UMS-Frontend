import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: ''
})
export class BaseUiComponent {
  @Input() style: { [key: string]: string } = {};
  @Input() class: string | string[] = '';
}

