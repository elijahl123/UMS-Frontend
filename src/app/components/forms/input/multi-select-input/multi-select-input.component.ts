import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';

/**
 * @usage:
 * <form-multi-select-input>
 *   <option selected>Open this select menu</option>
 *   <option value="1">One</option>
 *   <option value="2">Two</option>
 *   <option value="3">Three</option>
 * </form-multi-select-input>
 */
@Component({
   selector: 'form-multi-select-input',
   templateUrl: './multi-select-input.component.html',
   styleUrls: ['./multi-select-input.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class MultiSelectInputComponent extends BaseFormsComponent implements OnInit {

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

}
