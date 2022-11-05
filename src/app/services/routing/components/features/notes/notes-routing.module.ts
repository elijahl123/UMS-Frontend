import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from '../../../../../components/features/notes/notes.component';
import { NoteComponent } from '../../../../../components/features/notes/note/note.component';
import { NoteCoursesComponent } from '../../../../../components/features/notes/note-courses/note-courses.component';

const routes: Routes = [
   {
      path: '',
      component: NotesComponent,
      children: [
         {
            path: '',
            component: NoteCoursesComponent,
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
