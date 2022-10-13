import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { BaseUiComponent } from '../../../../core/components/ui/base.ui.component';

@Component({
  selector: 'ui-list-group-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.css']
})
export class ListGroupItemComponent extends BaseUiComponent implements OnInit {
  @Input() text: string;
  @Input() leftIcon: IconDefinition;
  @Input() rightIcon: IconDefinition;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
