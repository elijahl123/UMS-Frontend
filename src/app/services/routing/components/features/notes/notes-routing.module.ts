import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from '../../../../../components/features/notes/notes.component';
import { NoteComponent } from '../../../../../components/features/notes/note/note.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      {
        path: '',
        component: NoteComponent,
        pathMatch: 'full'
      },
      {
        path: 'note/:uid',
        component: NoteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {
}
