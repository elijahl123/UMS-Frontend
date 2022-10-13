import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../services/routing/app-routing.module';
import { AppComponent } from '../components/app.component';
import { UmsUiModule } from '../components/ui/ums-ui.module';
import { UmsFormsModule } from '../components/forms/ums-forms.module';
import { ModalDirective } from '../components/directives/ui/modal.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesModule } from '../components/features/features.module';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UmsUiModule,
    UmsFormsModule,
    ModalDirective,
    FontAwesomeModule,
    FeaturesModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}