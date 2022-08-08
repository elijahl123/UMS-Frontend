import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CloseButtonComponent } from './close-button/close-button.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastsComponent } from './toasts/toasts.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbItemComponent } from './breadcrumb/breadcrumb-item/breadcrumb-item.component';


@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent,
    CloseButtonComponent,
    CollapseComponent,
    DropdownsComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    ProgressComponent,
    SpinnersComponent,
    ToastsComponent,
    BreadcrumbItemComponent
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AlertComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class UmsUiModule {
}
