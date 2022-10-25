import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarEventMin } from '../calendar.component';

@Component({
   selector: 'app-calendar-date',
   templateUrl: './calendar-date.component.html',
   styleUrls: ['./calendar-date.component.css']
})
export class CalendarDateComponent implements OnInit {
   @Input() class: string;
   @Input() date: Date;
   @Output() selectDate: EventEmitter<Date> = new EventEmitter<Date>();

   @Input() events: CalendarEventMin[] = [];

   constructor() {
   }

   ngOnInit(): void {
   }

   getClassName(event: CalendarEventMin): string {
      if (event.course) {
         return event.course.name + ': ';
      } else {
         return '';
      }
   }
}
