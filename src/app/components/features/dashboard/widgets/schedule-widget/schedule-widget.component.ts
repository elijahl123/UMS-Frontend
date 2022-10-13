import { Component, NgIterable, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faCog, faMap,
  faSchool,
  faSquareArrowUpRight, faVideo
} from '@fortawesome/pro-solid-svg-icons';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

interface Schedule {
  course: { name: string, color: string, uid: string },
  startTime: string,
  endTime: string,
  link: string,
  zoomPassword: string
  location: string,
}

function getCurrentDate() {
  const date = new Date();
  // Convert to a Locale String in the format yyyy-mm-dd. Make sure to replace the slashes with dashes.
  return date.toLocaleDateString('en-CA').replace(/\//g, '-');
}

@Component({
  selector: 'app-schedule-widget',
  templateUrl: './schedule-widget.component.html',
  styleUrls: ['./schedule-widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleWidgetComponent<T> implements OnInit {
  cogIcon: IconDefinition = faCog;
  chevronLeftIcon: IconDefinition = faChevronLeft;
  chevronRightIcon: IconDefinition = faChevronRight;
  date: BehaviorSubject<string>;
  schedule: BehaviorSubject<Schedule[] | null | undefined> = new BehaviorSubject<Schedule[] | null | undefined>(null);
  assignmentsDueSoon: BehaviorSubject<{ node: { name: string; dueDate: string; dueTime: string; course: { uid: string }; }; }[] | null> = new BehaviorSubject<{ node: { name: string; dueDate: string; dueTime: string; course: { uid: string }; }; }[] | null>(null);
  schoolIcon: IconDefinition = faSchool;
  assignmentIcon: IconDefinition = faBook;
  linkIcon: IconDefinition = faSquareArrowUpRight;

  openCourses: Schedule[] = [];
  videoIcon: IconDefinition = faVideo;
  mapIcon: IconDefinition = faMap;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    // Every time the date changes, we want to update the schedule
    this.date = new BehaviorSubject<string>(getCurrentDate());
    this.date.subscribe((date) => {
      this.apollo.query<{ getSchedule: Schedule[]; }>({
        query: gql`
          query {
            getSchedule(date: "${date}") {
              course {
                uid
                name
                color
              }
              startTime
              endTime
              link
              zoomPassword
              location
            }
          }
        `
      }).subscribe((data) => {
        data.data.getSchedule.length > 0 ? this.schedule.next(data.data.getSchedule) : this.schedule.next(null);
      });
      this.apollo.query<{ homeworkAssignments: { edges: { node: { name: string, dueDate: string, dueTime: string, course: { uid: string } } }[] } }>({
        query: gql`
          query {
            homeworkAssignments {
              edges {
                node {
                  name
                  dueDate
                  dueTime
                  course {
                    uid
                  }
                }
              }
            }
          }
        `
      }).subscribe(({ data }) => {
        let assignmentsDueSoon: { node: { name: string; dueDate: string; dueTime: string; course: { uid: string } }; }[] = [];
        for (const assignment of data.homeworkAssignments.edges) {
          // Check if the assignment is due within the next three days
          const dueDate = new Date(assignment.node.dueDate);
          const dueDateTime = new Date(dueDate.toISOString().split('T')[0] + 'T' + assignment.node.dueTime);
          const currentDate = new Date(date);
          const currentDatePlusThreeDays = new Date(date);
          currentDatePlusThreeDays.setDate(currentDatePlusThreeDays.getDate() + 3);
          if (dueDateTime > currentDate && dueDateTime < currentDatePlusThreeDays) {
            assignmentsDueSoon.push(assignment);
          }
        }
        this.assignmentsDueSoon.next(assignmentsDueSoon);
      });
    });
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
      const courseTimeObjects: Schedule[] = [];
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

  isCourseCurrent(course: Schedule): boolean {
    const selectedTime = new Date(this.date.value);
    const currentTime = new Date();
    // Get the start time and subtract 1 day
    const startTime = new Date(selectedTime.toISOString().split('T')[0] + 'T' + course.startTime);
    const endTime = new Date(selectedTime.toISOString().split('T')[0] + 'T' + course.endTime);
    selectedTime.setDate(selectedTime.getDate() + 1);
    // If the current time is not in the open courses list, and the current time is between the start and end time of the course, add it to the list
    if (!this.openCourses.includes(course) && currentTime > startTime && currentTime < endTime) {
      this.openCourses.push(course);
    }

    return this.openCourses.includes(course);
  }

  toggleCourse(course: Schedule) {
    if (this.openCourses.includes(course)) {
      this.openCourses.splice(this.openCourses.indexOf(course), 1);
    } else {
      this.openCourses.push(course);
    }
  }

  courseContainsAssignments(course: Schedule): boolean {
    if (this.assignmentsDueSoon.value) {
      for (const assignment of this.assignmentsDueSoon.value) {
        if (assignment.node.course.uid === course.course.uid) {
          return true;
        }
      }
    }
    return false;
  }
}
