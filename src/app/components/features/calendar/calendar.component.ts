import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadService } from '../../../services/model/read/read.service';

export interface CalendarEvent {
  uid?: string;
  date: string;
  time?: string;
  title: string;
  description?: string;
  link?: string;
  course: {
    name?: string;
    color: string;
  }
}

export interface CalendarEventMin {
  title: string,
  date: string,
  course?: {
    name: string,
    color: string
  },
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  @ViewChild('changeDateInput') changeDateInput: ElementRef;
  chevronLeftIcon: IconDefinition = faChevronLeft;
  chevronRightIcon: IconDefinition = faChevronRight;
  currentDates: Date[] = [];

  date: Date;
  events: CalendarEventMin[] = [];

  plusIcon: IconDefinition = faPlus;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private read: ReadService) {
  }

  ngOnInit(): void {
    // Set the date to today in the format of YYYY-MM-DD. If the router has a date parameter, use that instead
    if (this.activatedRoute.children[0]?.snapshot.paramMap.has('date')) {
      // Check if the date is valid
      const date = new Date(<string> this.activatedRoute.children[0].snapshot.paramMap.get('date') + 'T00:00:00');
      if (date.toString() !== 'Invalid Date') {
        this.date = date;
        this.currentDates = this.getDates();
      } else {
        this.date = new Date();
        this.currentDates = this.getDates();
      }
    } else {
      this.date = new Date();
      this.currentDates = this.getDates();
    }

    this.read.getCalendarEvents().then((data) => {
      this.events = data.calendarEvents.edges.map(edge => {
        return {
          title: edge.node.title,
          date: edge.node.date,
        }
      }).concat(data.homeworkAssignments.edges.map(edge => {
        return {
          title: edge.node.name,
          date: edge.node.dueDate,
          course: {
            name: edge.node.course.name,
            color: edge.node.course.color,
          }
        }
      }));
    })
  }

  decrementDate() {
    if (this.router.url !== '/calendar') {
      this.selectDate(new Date(this.date.getFullYear(), this.date.getMonth() - 1, this.date.getDate()));
    } else {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, this.date.getDate());
      this.currentDates = this.getDates();
    }
  }

  incrementDate() {
    if (this.router.url !== '/calendar') {
      this.selectDate(new Date(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate()));
    } else {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate());
      this.currentDates = this.getDates();
    }
  }

  eventsForDate(date: Date): CalendarEventMin[] {
    return this.events.filter(event => event.date === date.toISOString().slice(0, 10));
  }

  focusOnInput() {
    // Focus on the input when the user clicks on the calendar icon
    this.changeDateInput.nativeElement.focus();
  }

  getDates(): Date[] {
    // Get all the dates for the current month and include the dates at the beginning and end of the month that are needed to fill the calendar
    const dates = [];
    const firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const lastDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    const firstDayOfCalendar = new Date(firstDayOfMonth);
    firstDayOfCalendar.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());
    const lastDayOfCalendar = new Date(lastDayOfMonth);
    lastDayOfCalendar.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));
    for (let d = firstDayOfCalendar; d <= lastDayOfCalendar; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }
    return dates;
  }

  getDateStr() {
    // Get the date in the format of YYYY-MM-DD
    return this.date.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '-');
  }

  getMonthName() {
    return this.date.toLocaleDateString('en-CA', { month: 'long' });
  }

  isDateToday(date: Date) {
    return this.date.toLocaleDateString() === date.toLocaleDateString();
  }

  isInfoShowing() {
    return this.router.url !== '/calendar';
  }

  onDateChange(event: Event) {
    const date = new Date((event.target as HTMLInputElement).value + 'T00:00:00');
    if (date.toString() !== 'Invalid Date') {
      if (this.router.url !== '/calendar') {
        this.selectDate(date);
      } else {
        this.date = date;
        this.currentDates = this.getDates();
      }
    } else {
      this.selectDate(new Date());
    }
  }

  selectDate(date: Date) {
    this.date = date;
    this.currentDates = this.getDates();
    // Check if the date parameter is the same as the date selected
    if (this.activatedRoute.children[0]?.snapshot.paramMap.has('date')) {
      if (this.activatedRoute.children[0].snapshot.paramMap.get('date') !== this.getDateStr()) {
        this.router.navigate(['/calendar', {
          outlets: {
            'calendarInfo': [this.getDateStr()]
          }
        }]).then();
      } else {
        this.router.navigate(['/calendar', { outlets: { 'calendarInfo': null } }]).then();
      }
    } else {
      this.router.navigate(['/calendar', {
        outlets: {
          'calendarInfo': [this.getDateStr()]
        }
      }]).then();
    }
  }

  setDateToToday() {
    this.selectDate(new Date());
  }
}
