import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseType, GetCoursesGQL, GetNotesGQL, NoteType } from '../../../../../generated/graphql';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class NotesService {
  courses = new BehaviorSubject<CourseType[]>([]);
  notes = new BehaviorSubject<NoteType[]>([]);
  selectedNote: BehaviorSubject<NoteType | null> = new BehaviorSubject<NoteType | null>(null);

  constructor(private getCoursesService: GetCoursesGQL, private router: Router, private route: ActivatedRoute, private authService: AuthService, private getNotesService: GetNotesGQL) {
  }

  init() {
    this.initCourses();
    this.initNotes();
    this.initSelectedNote();
  }

  initCourses() {
    this.getCoursesService.fetch({
      token: this.authService.getToken()
    }).toPromise().then(data => {
      this.courses.next(data?.data?.courses?.edges.map(edge => edge?.node) as CourseType[]);
    })
  }

  initNotes() {
    const data = this.getNotesService.fetch({
      token: this.authService.getToken()
    }).toPromise().then(data => {
      this.notes.next(data?.data?.notes?.edges.map(edge => edge?.node) as NoteType[]);
    });
  }

  initSelectedNote() {
    // Subscribe to route changes
    this.router.events.subscribe(() => {
      // Get the note UID from the route
      const uid = this.route.firstChild?.snapshot.paramMap.get('uid');

      // If the note UID is not null, set the selected note
      if (uid) {
        this.selectedNote.next(this.getNote(uid) || null);
      }
    })
    this.route.firstChild?.params.subscribe(params => {
      const note = this.getNote(params.uid);
      this.selectedNote.next(note || null);
    })
  }

  getNote(uid: string) {
    return this.notes.getValue().find(note => note.uid === uid);
  }
}
