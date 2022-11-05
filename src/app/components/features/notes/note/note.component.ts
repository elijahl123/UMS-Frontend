import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';
import { Course, NotesService } from '../../../../services/components/features/notes/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    // Check if the notes and courses have been initialized
    if (this.notesService.notes.getValue().length === 0) {
      this.notesService.initNotes();
    }
    if (this.notesService.courses.getValue().length === 0) {
      this.notesService.initCourses();
    }
  }

  getNotes(course: Course) {
    return this.notesService.notes.getValue().filter(note => note.course.uid === course.uid);
  }

  getCourses() {
    return this.notesService.courses.getValue();
  }
}
