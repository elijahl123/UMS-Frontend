import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '../../../services/routing/components/features/auth/auth-routing.module';
import { AuthComponent } from './auth.component';
import { SpinnerComponent } from '../../ui/spinner/spinner.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UmsFormsModule } from '../../forms/ums-forms.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertComponent } from '../../ui/alert/alert.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
   declarations: [
      AuthComponent,
      LoginComponent,
      SignupComponent
   ],
   imports: [
      CommonModule,
      AuthRoutingModule,
      SpinnerComponent,
      ReactiveFormsModule,
      UmsFormsModule,
      FormsModule,
      FontAwesomeModule,
      AlertComponent
   ]
})
export class AuthModule {
}
