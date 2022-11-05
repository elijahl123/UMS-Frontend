import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faEdit, faPlus, faSchool } from '@fortawesome/pro-solid-svg-icons';
import { Router } from '@angular/router';
import { Course, Note, NotesService } from '../../../services/components/features/notes/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;

  constructor(private notesService: NotesService, private router: Router) {
  }

  ngOnInit(): void {
    this.notesService.initCourses();
    this.notesService.initNotes();
  }
}
