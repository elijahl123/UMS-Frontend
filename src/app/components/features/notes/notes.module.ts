import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from '../../../services/routing/components/features/notes/notes-routing.module';
import { NotesComponent } from './notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteComponent } from './note/note.component';
import { NoteCoursesComponent } from './note-courses/note-courses.component';
import { CardComponent } from '../../ui/card/card.component';


@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NoteCoursesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FontAwesomeModule,
    CardComponent
  ]
})
export class NotesModule {
}
