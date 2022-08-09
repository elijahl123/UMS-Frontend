import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input('type') buttonType: string = 'button';
  @Input() text: string = 'Button';
  @Input() leftIcon: IconDefinition;
  @Input() rightIcon: IconDefinition;
  @Input() rounded: string = 'lg';

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  getRoundedValue(): string {
    return `rounded-${this.rounded}`;
  }
}
