import { Component, NgIterable, OnInit, ViewEncapsulation } from '@angular/core';
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

  openCourses: BehaviorSubject<Schedule[]> = new BehaviorSubject<Schedule[]>([]);
  videoIcon: IconDefinition = faVideo;
  mapIcon: IconDefinition = faMap;

  courseLinks: BehaviorSubject<{ course: { uid: string }; link: string; title: string; }[]> = new BehaviorSubject<{ course: { uid: string }; link: string; title: string; }[]>([]);
  externalLinkIcon: IconDefinition = faLink;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    // Every time the date changes, we want to update the schedule
    this.date = new BehaviorSubject<string>(getCurrentDate());
    this.date.subscribe((date) => {
      this.openCourses.next([]);
      this.apollo.query<{
          getSchedule: {
            course: {
              uid: string,
              name: string,
              color: string,
            },
            startTime: string,
            endTime: string,
            link: string,
            zoomPassword: string,
            location: string,
          }[],
          homeworkAssignments: {
            edges: {
              node: {
                name: string,
                dueDate: string,
                dueTime: string,
                course: {
                  uid: string
                }
              }
            }[]
          },
          courseLinks: {
            edges: {
              node: {
                course: {
                  uid: string,
                }
                link: string
                title: string
              }
            }[]
          }
        }>({
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
            homeworkAssignments(completed: false) {
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
            courseLinks {
              edges {
                node {
                  course {
                    uid
                  }
                  link
                  title
                }
              }
            }
          }
        `
      }).subscribe((data) => {
        data.data.getSchedule.length > 0 ? this.schedule.next(data.data.getSchedule) : this.schedule.next(null);
        for (const course of data.data.getSchedule) {
          this.isCourseCurrent(course);
        }

        let assignmentsDueSoon: { node: { name: string; dueDate: string; dueTime: string; course: { uid: string } }; }[] = [];
        for (const assignment of data.data.homeworkAssignments.edges) {
          // Check if the assignment is due within the next three days
          const dueDateTime = new Date(assignment.node.dueDate + 'T' + assignment.node.dueTime);
          const currentDate = new Date(date + 'T00:00:00');
          const currentDatePlusThreeDays = new Date(date + 'T00:00:00');
          currentDatePlusThreeDays.setDate(currentDatePlusThreeDays.getDate() + 3);
          if (dueDateTime > currentDate && dueDateTime < currentDatePlusThreeDays) {
            assignmentsDueSoon.push(assignment);
          }
        }
        this.assignmentsDueSoon.next(assignmentsDueSoon);

        this.courseLinks.next(data.data.courseLinks.edges.map((edge) => edge.node));
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

  isCourseCurrent(course: Schedule): void {
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

  toggleCourse(course: Schedule) {
    if (this.openCourses.value.includes(course)) {
      this.openCourses.value.splice(this.openCourses.value.indexOf(course), 1);
    } else {
      this.openCourses.value.push(course);
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

  courseContainsLinks(course: Schedule): boolean {
    if (this.courseLinks.value) {
      for (const link of this.courseLinks.value) {
        if (link.course.uid === course.course.uid) {
          return true;
        }
      }
    }
    return false;
  }
}
