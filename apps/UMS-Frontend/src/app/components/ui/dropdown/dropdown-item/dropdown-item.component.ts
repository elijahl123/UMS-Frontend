import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { BaseUiComponent } from '../../../../core/components/ui/base.ui.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent extends BaseUiComponent implements OnInit {
  @Input() text: string = 'This is a dropdown item';
  @Input() leftIcon: IconDefinition;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
