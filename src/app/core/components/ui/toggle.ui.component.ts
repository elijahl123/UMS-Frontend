import { Component, Input } from '@angular/core';
import { BaseUiComponent } from './base.ui.component';

@Component({
  standalone: true,
  template: ""
})
export class ToggleUiComponent extends BaseUiComponent {
  @Input() isOpen: boolean;
}

