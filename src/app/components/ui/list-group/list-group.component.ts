import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
   standalone: true,
   imports: [
      FontAwesomeModule,
      CommonModule
   ],
   selector: 'ui-list-group',
   templateUrl: './list-group.component.html',
   styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent extends BaseUiComponent implements OnInit {

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

}
