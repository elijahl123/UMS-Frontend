import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastsComponent } from './toasts/toasts.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { BreadcrumbItemComponent } from './breadcrumb/breadcrumb-item/breadcrumb-item.component';


@NgModule({
  declarations: [],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CollapseComponent,
    DropdownComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    ProgressComponent,
    SpinnersComponent,
    ToastsComponent,
  ],
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CollapseComponent,
    DropdownComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    ProgressComponent,
    SpinnersComponent,
    ToastsComponent,
  ]
})
export class UmsUiModule {
}
