import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faNote, faPlus, faSchool, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { NotesService } from '../../../../services/components/features/notes/notes.service';
import { Router } from '@angular/router';
import { CourseType, NoteType } from '../../../../../generated/graphql';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;
  noteIcon: IconDefinition = faNote;
  schoolIcon: IconDefinition = faSchool;
  deleteIcon: IconDefinition = faTrash;

  constructor(private notesService: NotesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  get selectedNote(): NoteType | null {
    return this.notesService.selectedNote.getValue();
  }

  getNotes(course: CourseType) {
    return this.notesService.notes.getValue().filter(note => note?.course?.uid === course.uid);
  }

  getCourses() {
    return this.notesService.courses.getValue();
  }

  async selectNote(note: NoteType) {
    await this.router.navigate(['notes', 'note', note.uid]);
  }
}
