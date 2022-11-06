import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReadService } from '../../../model/read/read.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Note {
  uid: string;
  title: string;
  content: string;
  uploaded: string;
  modified: string;
  course: {
    uid: string;
  }
}

export class Course {
  uid: string;
  name: string;
  color: string;
}

@Injectable()
export class NotesService {
  courses = new BehaviorSubject<Course[]>([]);
  notes = new BehaviorSubject<Note[]>([]);
  selectedNote: BehaviorSubject<Note | null> = new BehaviorSubject<Note | null>(null);

  constructor(private read: ReadService, private router: Router, private route: ActivatedRoute) {
  }

  async init() {
    await this.initCourses();
    await this.initNotes();
    this.initSelectedNote();
  }

  async initCourses() {
    const data = await this.read.getCourses();
    this.courses.next(data.courses.edges.map(edge => edge.node));
  }

  async initNotes() {
    const data = await this.read.getNotes();
    this.notes.next(data.notes.edges.map(edge => edge.node));
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
