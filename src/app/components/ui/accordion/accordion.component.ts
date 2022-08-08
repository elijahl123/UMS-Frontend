import { Component, Input, OnInit } from '@angular/core';

/**
 * @author Elijah Lopez
 * @description This is a UI component that is used to display a collapsible accordion with **ui-accordion-item**s inside.
 * @see [ Angular UI Components ] (https://angular.io/guide/components#ui-components)
 */
@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // initialize the isOpen property depending on content
  }

}
