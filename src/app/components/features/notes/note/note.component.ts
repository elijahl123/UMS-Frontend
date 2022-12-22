import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faNote, faPlus, faSchool, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseType, GetCoursesGQL, GetNotesGQL, NoteType } from '../../../../../generated/graphql';
import { faFilePen } from '@fortawesome/pro-duotone-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../../services/components/features/auth/auth.service';

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
  content: string = '';
  noteIconDuo: IconDefinition = faFilePen;
  courses: CourseType[] = [];
  notes: NoteType[] = [];
  selectedNoteObj: BehaviorSubject<NoteType | null> = new BehaviorSubject<NoteType | null>(null);

  constructor(private getCoursesService: GetCoursesGQL, private router: Router, private route: ActivatedRoute, private authService: AuthService, private getNotesService: GetNotesGQL) {
  }

  get selectedNote() {
    return this.selectedNoteObj.getValue();
  }

  async ngOnInit() {
    this.courses = (await this.getCoursesService.fetch({
      token: this.authService.getToken()
    }).toPromise()).data.courses?.edges?.map(edge => edge?.node) as CourseType[];

    this.notes = (await this.getNotesService.fetch({
      token: this.authService.getToken()
    }).toPromise()).data.notes?.edges?.map(edge => edge?.node) as NoteType[];

    this.route.paramMap.subscribe((paramMap) => {
      // Get the note UID from the route
      const uid = paramMap.get('uid');

      // If the note UID is not null, set the selected note
      if (uid) {
        this.selectedNoteObj.next(this.getNote(uid) || null);
      }
    });

    this.selectedNoteObj.subscribe(note => {
      this.content = note?.content || '';
    })
  }

  getNotes(course: CourseType) {
    return this.notes.filter(note => note?.course?.uid === course.uid);
  }

  getNote(uid: string) {
    return this.notes.find(note => note.uid === uid);
  }

  async selectNote(note: NoteType) {
    await this.router.navigate(['notes', 'note', note.uid]);
  }

  getNoteTitle() {
    return this.selectedNote?.title || 'No note selected';
  }
}
