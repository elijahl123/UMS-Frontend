import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from '../../../services/routing/components/features/notes/notes-routing.module';
import { NotesComponent } from './notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteComponent } from './note/note.component';
import { CardComponent } from '../../ui/card/card.component';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { EmptySpaceComponent } from '../../ui/empty-space/empty-space.component';


@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FontAwesomeModule,
    CardComponent,
    EditorComponent,
    FormsModule,
    EmptySpaceComponent
  ]
})
export class NotesModule {
}
