import { Component, NgIterable, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faCog,
  faLink,
  faMap,
  faSchool,
  faSquareArrowUpRight,
  faVideo
} from '@fortawesome/pro-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import {
  CourseLinkType,
  CourseTimeType,
  GetScheduleGQL,
  HomeworkAssignmentType,
  HomeworkAssignmentTypeConnection, HomeworkAssignmentTypeEdge, Maybe, Scalars
} from '../../../../../../generated/graphql';
import { AuthService } from '../../../../../services/components/features/auth/auth.service';

function getCurrentDate() {
  const date = new Date();
  // Convert to a Locale String in the format yyyy-mm-dd. Make sure to replace the slashes with dashes.
  return date.toLocaleDateString('en-CA').replace(/\//g, '-');
}

@Component({
  selector: 'app-schedule-widget',
  templateUrl: './schedule-widget.component.html',
  styleUrls: ['./schedule-widget.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleWidgetComponent implements OnInit, OnDestroy {
  cogIcon: IconDefinition = faCog;
  chevronLeftIcon: IconDefinition = faChevronLeft;
  chevronRightIcon: IconDefinition = faChevronRight;
  date: BehaviorSubject<string>;
  schedule: BehaviorSubject<CourseTimeType[] | null | undefined> = new BehaviorSubject<CourseTimeType[] | null | undefined>(null);
  assignmentsDueSoon: BehaviorSubject<HomeworkAssignmentTypeEdge[] | null> = new BehaviorSubject<HomeworkAssignmentTypeEdge[] | null>(null);
  schoolIcon: IconDefinition = faSchool;
  assignmentIcon: IconDefinition = faBook;
  linkIcon: IconDefinition = faSquareArrowUpRight;

  openCourses: BehaviorSubject<CourseTimeType[]>;
  videoIcon: IconDefinition = faVideo;
  mapIcon: IconDefinition = faMap;

  courseLinks: BehaviorSubject<CourseLinkType[]>;
  externalLinkIcon: IconDefinition = faLink;

  constructor(private getScheduleService: GetScheduleGQL, private authService: AuthService) {
  }

  ngOnInit(): void {
    // Every time the date changes, we want to update the schedule
    this.date = new BehaviorSubject<string>(getCurrentDate());
    this.openCourses = new BehaviorSubject<CourseTimeType[]>([]);
    this.courseLinks = new BehaviorSubject<CourseLinkType[]>([]);
    this.date.subscribe((date) => {
      this.openCourses.next([]);

      this.getScheduleService.fetch({
        date: date,
        token: this.authService.getToken()
      }).toPromise().then((data) => {
        if (data.data.getSchedule) {
          data.data.getSchedule.length > 0 ? this.schedule.next(data.data.getSchedule as CourseTimeType[]) : this.schedule.next(null);
          for (const course of data.data.getSchedule) {
            this.isCourseCurrent(course as CourseTimeType);
          }
        }
        if (data.data.homeworkAssignments) {
          let assignmentsDueSoon: HomeworkAssignmentTypeEdge[] = [];
          for (const assignment of data.data.homeworkAssignments.edges) {
            // Check if the assignment is due within the next three days
            const dueDateTime = new Date(assignment?.node?.dueDate + 'T' + assignment?.node?.dueTime);
            const currentDate = new Date(date + 'T00:00:00');
            const currentDatePlusThreeDays = new Date(date + 'T00:00:00');
            currentDatePlusThreeDays.setDate(currentDatePlusThreeDays.getDate() + 3);
            if (dueDateTime > currentDate && dueDateTime < currentDatePlusThreeDays) {
              assignmentsDueSoon.push(assignment as HomeworkAssignmentTypeEdge);
            }
          }
          this.assignmentsDueSoon.next(assignmentsDueSoon);
        }
        if (data.data.courseLinks) {
          this.courseLinks.next(data.data.courseLinks.edges.map(edge => edge?.node) as CourseLinkType[]);
        }
      })
    })
  }

  incrementDate() {
    const nextDay = new Date(this.date.value);
    nextDay.setDate(nextDay.getDate() + 1);
    this.date.next(nextDay.toISOString().split('T')[0]);
  }

  decrementDate() {
    const previousDay = new Date(this.date.value);
    previousDay.setDate(previousDay.getDate() - 1);
    this.date.next(previousDay.toISOString().split('T')[0]);
  }

  onDateChanged($event: Event) {
    this.date.next(($event.target as HTMLInputElement).value);
  }

  getCourseTimeObjects(): NgIterable<any> | undefined | null {
    if (this.schedule.value) {
      const courseTimeObjects: CourseTimeType[] = [];
      this.schedule.value.forEach((schedule) => {
        courseTimeObjects.push(schedule);
      });
      return courseTimeObjects;
    }
    return null;
  }

  formatTime(startTime: string) {
    // Get the AM/PM time
    let time = startTime.split(':');
    let hours = parseInt(time[0]);
    let minutes = time[1];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  isCourseCurrent(course: CourseTimeType): void {
    const selectedTime = new Date(this.date.value);
    const currentTime = new Date();
    // Get the start time and subtract 1 day
    const startTime = new Date(selectedTime.toISOString().split('T')[0] + 'T' + course.startTime);
    const endTime = new Date(selectedTime.toISOString().split('T')[0] + 'T' + course.endTime);
    selectedTime.setDate(selectedTime.getDate() + 1);
    // If the current time is not in the open courses list, and the current time is between the start and end time of the course, add it to the list
    if (!this.openCourses.value.includes(course) && currentTime > startTime && currentTime < endTime) {
      // Remove the other courses from the list
      this.openCourses.next([course]);
    }

    // If the current time is in the open courses list, and the current time is not between the start and end time of the course, remove it from the list
    if (this.openCourses.value.includes(course) && (currentTime < startTime || currentTime > endTime)) {
      this.openCourses.next(this.openCourses.value.filter((openCourse) => openCourse !== course));
    }

    // If the open courses list is empty, make the current course the first one in the list
    if (this.openCourses.value.length === 0) {
      this.openCourses.next([course]);
    }
  }

  toggleCourse(course: CourseTimeType) {
    if (this.openCourses.value.includes(course)) {
      this.openCourses.value.splice(this.openCourses.value.indexOf(course), 1);
    } else {
      this.openCourses.value.push(course);
    }
  }

  courseContainsAssignments(course: CourseTimeType): boolean {
    if (this.assignmentsDueSoon.value) {
      for (const assignment of this.assignmentsDueSoon.value) {
        if (assignment?.node?.course?.uid === course.course.uid) {
          return true;
        }
      }
    }
    return false;
  }

  courseContainsLinks(course: CourseTimeType): boolean {
    if (this.courseLinks.value) {
      for (const link of this.courseLinks.value) {
        if (link.course.uid === course.course.uid) {
          return true;
        }
      }
    }
    return false;
  }

  ngOnDestroy() {
    // Zero out all the data
    this.schedule.next(null);
    this.openCourses.next([]);
    this.assignmentsDueSoon.next(null);
    this.courseLinks.next([]);
  }

  getDate() {
    return this.date.getValue();
  }

  getSchedule() {
    return this.schedule.getValue();
  }

  getOpenCourses() {
    return this.openCourses.getValue();
  }

  getCourseLinks() {
    return this.courseLinks.getValue();
  }

  getAssignmentsDueSoon() {
    return this.assignmentsDueSoon.getValue();
  }

  getAssignmentDueDate(dueDate: string): string {
    if (dueDate) {
      return dueDate;
    } else {
      return 'No Due Date';
    }
  }
}
