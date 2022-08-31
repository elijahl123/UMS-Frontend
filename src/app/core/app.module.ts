import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../services/routing/app-routing.module';
import { AppComponent } from '../components/app.component';
import { StoreModule } from '@ngrx/store';
import { UmsUiModule } from '../components/ui/ums-ui.module';
import { UmsFormsModule } from '../components/forms/ums-forms.module';
import { metaReducers, reducers } from './store';
import { ModalDirective } from '../components/directives/ui/modal.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		UmsUiModule,
		UmsFormsModule,
		ModalDirective,
  FontAwesomeModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
