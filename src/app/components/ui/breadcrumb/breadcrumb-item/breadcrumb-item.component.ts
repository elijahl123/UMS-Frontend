import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { BaseUiComponent } from '../../../../core/components/ui/base.ui.component';

@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule,
      ButtonComponent
   ],
   selector: 'ui-breadcrumb-item',
   templateUrl: './breadcrumb-item.component.html',
   styleUrls: ['./breadcrumb-item.component.css']
})
export class BreadcrumbItemComponent extends BaseUiComponent implements OnInit {
   @Input() leftIcon: IconDefinition;
   @Input() text: string = '';

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

}
