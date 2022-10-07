import { Component, NgIterable, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faChevronLeft, faChevronRight, faCog, faSchool } from '@fortawesome/pro-solid-svg-icons';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

interface Schedule {
  course: { name: string, color: string },
  startTime: string,
  link: string,
  zoomPassword: string
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
  date: BehaviorSubject<string> = new BehaviorSubject<string>(new Date().toISOString().split('T')[0]);
  schedule: BehaviorSubject<Schedule[] | null | undefined> = new BehaviorSubject<Schedule[] | null | undefined>(null);
  schoolIcon: IconDefinition = faSchool;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    // Every time the date changes, we want to update the schedule
    this.date.subscribe((date) => {
      this.apollo.query<{ getSchedule: Schedule[]; }>({
        query: gql`
          query {
            getSchedule(date: "${this.date.value}") {
              course {
                name
                color
              }
              startTime
              link
              zoomPassword
            }
          }
        `
      })
      .subscribe((data) => {
        data.data.getSchedule.length > 0 ? this.schedule.next(data.data.getSchedule) : this.schedule.next(null);
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
}
