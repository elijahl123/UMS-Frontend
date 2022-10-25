import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule
   ],
   selector: 'ui-spinner',
   templateUrl: './spinner.component.html',
   styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent extends BaseUiComponent implements OnInit {
   @ViewChild('spinner', { static: true }) spinner: ElementRef;
   @Input() spinnerSize: string;
   @Input() lineColor: string = 'brand-secondary';
   @Input() ringColor: string = 'brand-background';

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

   getStyle() {
      return {
         '--spinner-size': this.spinnerSize,
         '--line-color': `rgb(var(--color-${this.lineColor}))`,
         '--ring-color': `rgb(var(--color-${this.ringColor}))`
      }
   }
}
