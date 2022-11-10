import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetCourseResponse, ReadService } from '../../../../services/model/read/read.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faBook, faChevronRight, faClock, faInfoCircle, faTrash } from '@fortawesome/pro-solid-svg-icons';

class CourseData {
  course: {
    uid: string;
    name: string;
    title: string;
    teacher: string;
    color: string;
  }
  courseTimes: {
    startTime: string;
    endTime: string;
    weekday: string;
  }[]
  homeworkAssignments: {
    name: string;
    dueDate: string;
    dueTime: string;
  }[]
  courseFiles: {
    title: string;
  }[]
  courseLinks: {
    title: string;
    link: string;
  }[]
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {
  data: CourseData;
  uid: BehaviorSubject<string> = new BehaviorSubject<string>(this.route.snapshot.params['uid']);
  trashIcon: IconDefinition = faTrash;
  infoIcon: IconDefinition = faInfoCircle;
  bookIcon: IconDefinition = faBook;
  clockIcon: IconDefinition = faClock;
  rightIcon: IconDefinition = faChevronRight;

  constructor(private read: ReadService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // Update the uid when the route changes
      if (event.constructor.name === 'NavigationEnd') {
        this.uid.next(this.route.snapshot.params['uid']);
      }
    })
    this.uid.subscribe((uid) => {
      this.read.getCourse(uid).then((data: GetCourseResponse) => {
        console.log(data);
        this.data = {
          course: {
            uid: data.courses.edges[0].node.uid,
            name: data.courses.edges[0].node.name,
            title: data.courses.edges[0].node.title,
            teacher: data.courses.edges[0].node.teacher,
            color: data.courses.edges[0].node.color
          },
          courseTimes: data.courseTimes.edges.map((edge) => edge.node),
          homeworkAssignments: data.homeworkAssignments.edges.map((edge) => edge.node),
          courseFiles: data.courseFiles.edges.map((edge) => edge.node),
          courseLinks: data.courseLinks.edges.map((edge) => edge.node)
        }
      })
    });
  }

  getCourseTimes() {
    // Return a course time object for every course time object as well as every weekday. Only return the first three course times.
    let courseTimes: {weekday: string, startTime: string, endTime: string}[] = [];
    this.data.courseTimes.forEach((courseTime) => {
      // Convert the weekdays from the format "['Monday']" to a list of weekdays
      let weekdays = courseTime.weekday.replace(/[\[\]']+/g, '').split(', ');
      weekdays.forEach((weekday) => {
        courseTimes.push({
          weekday: weekday,
          startTime: courseTime.startTime,
          endTime: courseTime.endTime
        })
      });
    });
    return courseTimes.slice(0, 3);
  }

  getAssignments() {
    // Return a homework assignment object for every homework assignment object. Only return the first three assignments.
    return this.data.homeworkAssignments.slice(0, 3);
  }
}
