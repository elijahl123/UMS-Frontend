import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SideNavigationItemComponent } from './side-navigation/side-navigation-item/side-navigation-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../ui/button/button.component';


@NgModule({
  declarations: [
    SideNavigationComponent,
    SideNavigationItemComponent
  ],
  exports: [
    SideNavigationComponent,
    SideNavigationItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonComponent
  ]
})
export class FeaturesModule { }
