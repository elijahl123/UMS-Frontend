import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';

@Component({
   selector: 'form-number-input',
   templateUrl: './number-input.component.html',
   styleUrls: ['./number-input.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class NumberInputComponent extends BaseFormsComponent implements OnInit {
   @Input() value: number = 0;
   upArrow: IconDefinition = faCaretUp;
   downArrow: IconDefinition = faCaretDown;

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

   public increment(): void {
      this.value++;
   }

   public decrement(): void {
      this.value--;
   }

}
