import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { List } from 'postcss/lib/list';

/**
 * @author Elijah Lopez
 * @description This is an accordion item component used to display information.
 * @see [ Angular UI Components ] (https://angular.io/guide/components#ui-components)
 */
@Component({
  selector: 'ui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input('isOpen') isOpen: boolean = false;
  @Input() heading: string = "Accordion Item";

  chevronDown: IconDefinition = faChevronDown;
  chevronUp: IconDefinition = faChevronUp;

  constructor() { }

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
