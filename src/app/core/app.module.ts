import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../services/routing/app-routing.module';
import { AppComponent } from '../components/app.component';
import { ModalDirective } from '../components/directives/ui/modal.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesModule } from '../components/features/features.module';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from '../components/ui/spinner/spinner.component';
import { ButtonComponent } from '../components/ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalDirective,
    FontAwesomeModule,
    FeaturesModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SpinnerComponent,
    ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
