import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastComponent } from './toast/toast.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';
import { ListGroupItemComponent } from './list-group/list-group-item/list-group-item.component';


@NgModule({
  declarations: [],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CollapseComponent,
    DropdownComponent,
    DropdownItemComponent,
    ListGroupComponent,
    ListGroupItemComponent,
    SpinnerComponent,
    ToastComponent,
  ],
  imports: [
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CollapseComponent,
    DropdownComponent,
    DropdownItemComponent,
    ListGroupComponent,
    ListGroupItemComponent,
    SpinnerComponent,
    ToastComponent,
  ]
})
export class UmsUiModule {
}
