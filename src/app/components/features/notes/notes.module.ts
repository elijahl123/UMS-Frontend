import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from '../../../services/routing/components/features/notes/notes-routing.module';
import { NotesComponent } from './notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteComponent } from './note/note.component';
import { NotesService } from '../../../services/components/features/notes/notes.service';
import { NoteCoursesComponent } from './note-courses/note-courses.component';


@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NoteCoursesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FontAwesomeModule
  ]
})
export class NotesModule {
}
