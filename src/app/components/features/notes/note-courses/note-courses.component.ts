import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotesService } from '../../../../services/components/features/notes/notes.service';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faPlus, faSchool, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { CourseType, NoteType } from '../../../../../generated/graphql';

@Component({
  selector: 'app-note-courses',
  templateUrl: './note-courses.component.html',
  styleUrls: ['./note-courses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteCoursesComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;
  schoolIcon: IconDefinition = faSchool;
  deleteIcon: IconDefinition = faTrash;

  constructor(private notesService: NotesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getCourses() {
    return this.notesService.courses.getValue();
  }

  getNotes(course: CourseType) {
    return this.notesService.notes.getValue().filter(note => note?.course?.uid === course.uid);
  }

  getNoteContent(content: NoteType["content"]) {
    // Strip HTML tags and remove &nbsp;
    // If the content is longer than 100 characters, truncate it
    return content ? content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '') : 'None';
  }

  selectNote(note: NoteType) {
    this.router.navigate(['/notes', 'note', note.uid]);
  }
}
