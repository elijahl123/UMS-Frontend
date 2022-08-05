import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../services/routing/app-routing.module';
import { AppComponent } from '../components/app.component';
import { StoreModule } from '@ngrx/store';
import { UmsUiModule } from '../components/ui/ums-ui.module';
import { UmsFormsModule } from '../components/forms/ums-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    UmsUiModule,
    UmsFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
