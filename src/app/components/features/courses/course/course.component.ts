import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import {
  faBook,
  faChevronRight,
  faClock,
  faFile,
  faInfoCircle,
  faLink,
  faTrash
} from '@fortawesome/pro-solid-svg-icons';
import { GetCourseGQL, GetCourseQuery } from '../../../../../generated/graphql';
import { AuthService } from '../../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {
  data: GetCourseQuery;
  uid: BehaviorSubject<string> = new BehaviorSubject<string>(this.route.snapshot.params['uid']);
  trashIcon: IconDefinition = faTrash;
  infoIcon: IconDefinition = faInfoCircle;
  bookIcon: IconDefinition = faBook;
  clockIcon: IconDefinition = faClock;
  rightIcon: IconDefinition = faChevronRight;
  fileIcon: IconDefinition = faFile;
  linkIcon: IconDefinition = faLink;

  constructor(private getCourseService: GetCourseGQL, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // Update the uid when the route changes
      if (event.constructor.name === 'NavigationEnd') {
        this.uid.next(this.route.snapshot.params['uid']);
      }
    })
    this.uid.subscribe((uid) => {
      this.getCourseService.fetch({
        token: this.authService.getToken(),
        uid: uid
      }).toPromise().then((data) => {
        this.data = data.data as GetCourseQuery;
      })
    });
  }

  getCourseTimes() {
    // Return a course time object for every course time object as well as every weekday. Only return the first three course times.
    let courseTimes: {weekday: string, startTime: string, endTime: string}[] = [];
    this.data.courseTimes?.edges.forEach((courseTime) => {
      // Convert the weekdays from the format "['Monday']" to a list of weekdays
      let weekdays = courseTime?.node?.weekday?.replace(/[\[\]']+/g, '').split(', ');
      weekdays?.forEach((weekday) => {
        courseTimes.push({
          weekday: weekday,
          startTime: courseTime?.node?.startTime,
          endTime: courseTime?.node?.endTime
        })
      });
    });
    return courseTimes.slice(0, 3);
  }

  getAssignments() {
    // Return a homework assignment object for every homework assignment object. Only return the first three assignments.
    return this.data.homeworkAssignments?.edges.slice(0, 3);
  }

  getCourseFiles() {
    // Return a course file object for every course file object. Only return the first three course files.
    return this.data.courseFiles?.edges.slice(0, 3);
  }

  getCourseLinks() {
    // Return a course link object for every course link object. Only return the first three course links.
    return this.data.courseLinks?.edges.slice(0, 3);
  }
}
