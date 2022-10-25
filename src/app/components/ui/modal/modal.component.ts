import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';
import { ButtonComponent } from '../button/button.component';
import { ModalDirective } from '../../directives/ui/modal.directive';
import { faClose, IconDefinition } from '@fortawesome/pro-solid-svg-icons';

/**
 * usage:
 * <ui-modal uiModal title="Modal Title">
 *   <ui-button class="primary rounded-lg" text="Modal Button" trigger></ui-button>
 *   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 *     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 *     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 *     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
 *     laborum. </p>
 *   <ui-button class="success rounded-lg" foot text="Save"></ui-button>
 * </ui-modal>
 */
/**
 * @author: Elijah Lopez
 * @description: This component is used to create a modal element.
 */
@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule,
      ButtonComponent
   ],
   selector: 'ui-modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class ModalComponent extends BaseUiComponent implements OnInit {
   closeIcon: IconDefinition = faClose;
   @Input() title: string = 'Modal Title';

   constructor(private modalDirective: ModalDirective) {
      super();
   }

   ngOnInit(): void {
      console.log(this.modalDirective);
   }

   onClose() {
      this.modalDirective.toggleOpen();
   }
}
