import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CalendarEvent } from '../calendar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCalendar, faClose, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { ReadService } from '../../../../services/model/read/read.service';

@Component({
  selector: 'app-calendar-info',
  templateUrl: './calendar-info.component.html',
  styleUrls: ['./calendar-info.component.css'],
})
export class CalendarInfoComponent implements OnInit {
  events: CalendarEvent[] = [];
  date: Date;
  plusIcon: IconDefinition = faPlus;
  eventIcon: IconDefinition = faCalendar;

  selectedEvent: CalendarEvent | null = null;
  closeIcon: IconDefinition = faClose;

  constructor(private apollo: Apollo, private route: ActivatedRoute, private router: Router, private read: ReadService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.read.getCalendarEventInfo(params.date).then(data => {
        // Add the calendar events
        this.events = data.calendarEvents.edges.map(edge => {
          return {
            date: edge.node.date,
            time: edge.node.time === '00:00:00' ? undefined : edge.node.time,
            title: edge.node.title,
            description: edge.node.description,
            course: {
              color: 'brand-main'
            }
          }
        });

        // Add the homework assignments
        this.events = this.events.concat(data.homeworkAssignments.edges.map((edge) => {
          return {
            date: edge.node.dueDate,
            time: edge.node.dueTime === '00:00:00' ? undefined : edge.node.dueTime,
            title: edge.node.name,
            description: edge.node.description,
            link: edge.node.link,
            course: {
              name: edge.node.course.name,
              color: edge.node.course.color
            }
          }
        }));
        this.date = new Date(params.date + 'T00:00:00');
      });
    })
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
