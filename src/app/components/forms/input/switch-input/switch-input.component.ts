import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';

@Component({
   selector: 'form-switch-input',
   templateUrl: './switch-input.component.html',
   styleUrls: ['./switch-input.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class SwitchInputComponent extends BaseFormsComponent implements OnInit {

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

}
