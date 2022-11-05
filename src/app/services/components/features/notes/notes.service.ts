import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReadService } from '../../../model/read/read.service';
import { AuthService } from '../auth/auth.service';

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
   courses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
   notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);

  constructor(private read: ReadService) {
  }

   initCourses() {
      this.read.getCourses().then(data => {
         this.courses.next(data.courses.edges.map(edge => edge.node));
      })
   }

   initNotes() {
      this.read.getNotes().then(data => {
         this.notes.next(data.notes.edges.map(edge => edge.node));
      })
   }
}
