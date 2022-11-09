import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from '../../../../services/components/features/notes/notes.service';
import { GetCoursesResponse, ReadService } from '../../../../services/model/read/read.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faBook, faClock, faInfoCircle, faTrash } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {
  course: Course;
  uid: BehaviorSubject<string> = new BehaviorSubject<string>(this.route.snapshot.params['uid']);
  trashIcon: IconDefinition = faTrash;
  infoIcon: IconDefinition = faInfoCircle;
  bookIcon: IconDefinition = faBook;
  clockIcon: IconDefinition = faClock;

  constructor(private read: ReadService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.uid = this.route.snapshot.params['uid'];
    })
    this.uid.subscribe((uid) => {
      this.read.getCourse(uid).then((data: GetCoursesResponse) => {
        this.course = data.courses.edges[0].node;
      })
    });
  }

}
