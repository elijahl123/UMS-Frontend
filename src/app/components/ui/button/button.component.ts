import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule
   ],
   selector: 'ui-button',
   templateUrl: './button.component.html',
   styleUrls: ['./button.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends BaseUiComponent implements OnInit {
   @Input('type') buttonType: string = 'button';
   @Input() text: string = 'Button';
   @Input() leftIcon: IconDefinition;
   @Input() rightIcon: IconDefinition;

   constructor() {
      super();
   }

   ngOnInit(): void {
   }
}
