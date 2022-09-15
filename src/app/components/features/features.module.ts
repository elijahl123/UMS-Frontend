import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SideNavigationItemComponent } from './side-navigation/side-navigation-item/side-navigation-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../ui/button/button.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TopNavigationItemComponent } from './top-navigation/top-navigation-item/top-navigation-item.component';


@NgModule({
  declarations: [
    SideNavigationComponent,
    SideNavigationItemComponent,
    TopNavigationComponent,
    TopNavigationItemComponent
  ],
  exports: [
    SideNavigationComponent,
    SideNavigationItemComponent,
    TopNavigationComponent,
    TopNavigationItemComponent,
  ],
	imports: [
		CommonModule,
		FontAwesomeModule,
		ButtonComponent,
		DashboardModule,
		RouterModule
	]
})
export class FeaturesModule { }
