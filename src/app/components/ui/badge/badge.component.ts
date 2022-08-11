import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  selector: 'ui-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent extends BaseUiComponent implements OnInit {
  @Input() text: string = 'Badge';
  @Input() leftIcon: IconDefinition;
  @Input() rightIcon: IconDefinition;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
