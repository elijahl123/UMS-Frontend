import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from '../../../services/routing/components/features/notes/notes-routing.module';
import { NotesComponent } from './notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    NotesComponent
  ],
   imports: [
      CommonModule,
      NotesRoutingModule,
      FontAwesomeModule
   ]
})
export class NotesModule { }
