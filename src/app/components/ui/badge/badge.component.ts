import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'ui-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input() text: string = 'Badge';
  @Input() leftIcon: IconDefinition;
  @Input() rightIcon: IconDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
