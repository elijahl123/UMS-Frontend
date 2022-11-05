import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-solid-svg-icons';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToggleUiComponent } from '../../../../core/components/ui/toggle.ui.component';

/**
 * @author Elijah Lopez
 * @description This is an accordion item component used to display information.
 * @see [ Angular UI Components ] (https://angular.io/guide/components#ui-components)
 */
@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  selector: 'ui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent extends ToggleUiComponent implements OnInit {
  @Input('isOpen') isOpen: boolean = false;
  @Input() heading: string = 'Accordion Item';

  chevronDown: IconDefinition = faChevronDown;
  chevronUp: IconDefinition = faChevronUp;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.isOpen = !this.isOpen;

  }

  getIcon(): IconDefinition {
    return this.isOpen ? this.chevronUp : this.chevronDown;
  }

  getHeaderClassList(): string[] {
    return this.isOpen ? ['accordion-header-open'] : [];
  }
}
