import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToggleUiComponent } from '../../../core/components/ui/toggle.ui.component';

/**
 * @author Elijah Lopez
 * @description This is a UI component that is used to display a collapsible accordion with **ui-accordion-item**s inside.
 * @see [ Angular UI Components ] (https://angular.io/guide/components#ui-components)
 */
@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule
   ],
   selector: 'ui-accordion',
   templateUrl: './accordion.component.html',
   styleUrls: ['./accordion.component.css']
})
export class AccordionComponent extends ToggleUiComponent implements OnInit {

   constructor() {
      super();
   }

   ngOnInit(): void {
      // initialize the isOpen property depending on content
   }

}
