import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faEdit, faPlus, faSchool } from '@fortawesome/pro-solid-svg-icons';
import { ReadService } from '../../../services/model/read/read.service';
import { BehaviorSubject } from 'rxjs';

class Course {
   uid: string;
   name: string;
   color: string;
}

class Note {
   uid: string;
   title: string;
   content: string;
   uploaded: string;
   modified: string;
   course: {
      uid: string;
   }
}

@Component({
   selector: 'app-notes',
   templateUrl: './notes.component.html',
   styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
   plusIcon: IconDefinition = faPlus;
   courses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
   notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
   schoolIcon: IconDefinition = faSchool;
   editIcon: IconDefinition = faEdit;

   constructor(private read: ReadService) {
   }

   ngOnInit(): void {
      this.read.getCourses().then(data => {
         this.courses.next(data.courses.edges.map(edge => edge.node));
      })
      this.read.getNotes().then(data => {
         this.notes.next(data.notes.edges.map(edge => edge.node));
      })
   }

   getCourses() {
      return this.courses.getValue();
   }

   getNotes(course: Course) {
      return this.notes.getValue().filter(note => note.course.uid === course.uid);
   }

   getNoteContent(content: string) {
      // Strip HTML tags and remove &nbsp;
      // If the content is longer than 100 characters, truncate it
      return content ? content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '') : 'None';
   }
}
