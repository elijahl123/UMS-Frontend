import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCalendar, faClose, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { GetCalendarEventsInfoGQL } from '../../../../../generated/graphql';
import { AuthService } from '../../../../services/components/features/auth/auth.service';

interface CalendarEvent {
  date: string
  time: string
  title: string,
  description: string,
  link: string,
  course: {
    name: string,
    color: string
  }
}


@Component({
  selector: 'app-calendar-info',
  templateUrl: './calendar-info.component.html',
  styleUrls: ['./calendar-info.component.css'],
})
export class CalendarInfoComponent implements OnInit {
  events: CalendarEvent[] = [];
  dateObj: BehaviorSubject<Date | null> = new BehaviorSubject<Date | null>(null);
  plusIcon: IconDefinition = faPlus;
  eventIcon: IconDefinition = faCalendar;

  selectedEvent: CalendarEvent | null = null;
  closeIcon: IconDefinition = faClose;

  constructor(private route: ActivatedRoute, private router: Router, private getCalendarEventInfo: GetCalendarEventsInfoGQL, private authService: AuthService) {
  }

  get date() {
    return this.dateObj.getValue();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dateObj.next(new Date(params.date + 'T00:00:00'));
    })
    this.dateObj.subscribe(date => {
      if (date) {
        // print the date in the format of YYYY-MM-DD
        const dateStr = date.toLocaleDateString('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).replace(/\//g, '-');
        this.getCalendarEventInfo.fetch({
          date: dateStr,
          token: this.authService.getToken()
        }).toPromise().then(data => {
          // Add the calendar events
          this.events = data?.data?.calendarEvents?.edges.map(edge => edge?.node) as CalendarEvent[];

          // Add the homework assignments
          this.events = this.events.concat(data?.data?.homeworkAssignments?.edges.map((edge) => {
            return {
              date: edge?.node?.dueDate,
              time: edge?.node?.dueTime === '00:00:00' ? undefined : edge?.node?.dueTime,
              title: edge?.node?.name,
              description: edge?.node?.description,
              link: edge?.node?.link,
              course: {
                name: edge?.node?.course?.name,
                color: edge?.node?.course?.color
              }
            }
          }) as CalendarEvent[]);
        });
      }
    });
  }

  getEventDateTime(event: CalendarEvent) {
    // Convert the time into a human-readable format
    const time = event.time?.split(':');
    const hours = parseInt(time?.[0] ?? '0');
    const minutes = parseInt(time?.[1] ?? '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = hours12 + ':' + minutesStr + ampm;

    return event.course.name ? `${event.course.name}: Due at ${timeStr}` : `At ${timeStr}`;
  }

  selectEvent(event: CalendarEvent) {
    // If the event is already selected, deselect it
    if (this.selectedEvent === event) {
      this.selectedEvent = null;
    } else {
      this.selectedEvent = event;
    }
  }

  getSelectedColor() {
    if (this.selectedEvent) {
      return this.selectedEvent.course.color.toLowerCase();
    } else {
      return 'brand-main';
    }
  }

  closeMenu() {
    this.router.navigate(['../'], { relativeTo: this.route }).then();
  }
}
