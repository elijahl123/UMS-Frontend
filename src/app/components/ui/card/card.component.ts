import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';

@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule
   ],
   selector: 'ui-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class CardComponent extends BaseUiComponent implements OnInit {
   @Input() title: string;
   @Input() leftIcon: IconDefinition | null;
   @Input() color: string;
   @Input() rightIcon: IconDefinition;
   @Input() head: string;
   @Input() sub: string;
   @Input() href: string;

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

   onClick($event: MouseEvent) {
      if (this.href) {
         window.open(this.href, '_blank');
      } else {
         // Prevent default behavior
         $event.preventDefault();
      }
   }
}
