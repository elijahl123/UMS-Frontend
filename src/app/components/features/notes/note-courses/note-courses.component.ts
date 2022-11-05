import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course, Note, NotesService } from '../../../../services/components/features/notes/notes.service';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faEdit, faPlus, faSchool } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-note-courses',
  templateUrl: './note-courses.component.html',
  styleUrls: ['./note-courses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteCoursesComponent implements OnInit {
   plusIcon: IconDefinition = faPlus;
   schoolIcon: IconDefinition = faSchool;
   editIcon: IconDefinition = faEdit;

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
  }

   getCourses() {
      return this.notesService.courses.getValue();
   }

   getNotes(course: Course) {
      return this.notesService.notes.getValue().filter(note => note.course.uid === course.uid);
   }

   getNoteContent(content: string) {
      // Strip HTML tags and remove &nbsp;
      // If the content is longer than 100 characters, truncate it
      return content ? content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '') : 'None';
   }

   selectNote(note: Note) {
      this.router.navigate(['/notes', 'note', note.uid]);
   }
}
