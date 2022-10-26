import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { BaseUiComponent } from '../../../../core/components/ui/base.ui.component';
import { Router } from '@angular/router';

@Component({
   selector: 'app-top-navigation-item',
   templateUrl: './top-navigation-item.component.html',
   styleUrls: ['./top-navigation-item.component.css']
})
export class TopNavigationItemComponent extends BaseUiComponent implements OnInit {
   @Input() leftIcon: IconDefinition;
   @Input() text: string;
   @Input() routerLink: string;
   @Input() routerLinkActive: string = 'active';

   constructor(private router: Router) {
      super();
   }

   ngOnInit(): void {
   }

   routeTo() {
      console.log(this.routerLink);
      this.router.navigate([this.routerLink]);
   }
}
