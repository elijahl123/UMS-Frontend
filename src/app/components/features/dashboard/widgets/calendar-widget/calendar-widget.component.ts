import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
   selector: 'app-calendar-widget',
   templateUrl: './calendar-widget.component.html',
   styleUrls: ['./calendar-widget.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class CalendarWidgetComponent implements OnInit {
   plusIcon: IconDefinition = faPlus;
   currentDate: Date;

   constructor(private router: Router) {
   }

   ngOnInit(): void {
      this.currentDate = new Date();
   }

   getDates(): Date[] | null | undefined {
      // Get all the dates for the current month plus the days at the beginning and end of the month that are needed to fill the calendar
      const dates: Date[] = [];
      const currentMonth = this.currentDate.getMonth();
      const currentYear = this.currentDate.getFullYear();
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      const firstDayOfCalendar = new Date(firstDayOfMonth);
      const lastDayOfCalendar = new Date(lastDayOfMonth);
      firstDayOfCalendar.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());
      lastDayOfCalendar.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

      // Add all the dates to the array
      let currentDateToAdd = firstDayOfCalendar;
      while (currentDateToAdd <= lastDayOfCalendar) {
         dates.push(new Date(currentDateToAdd));
         currentDateToAdd.setDate(currentDateToAdd.getDate() + 1);
      }

      return dates;
   }

   isDateInMonth(date: Date) {
      const currentMonth = this.currentDate.getMonth();
      const currentYear = this.currentDate.getFullYear();
      return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
   }

   isToday(date: Date) {
      return date.getDate() === this.currentDate.getDate() && date.getMonth() === this.currentDate.getMonth() && date.getFullYear() === this.currentDate.getFullYear();
   }

   getDateLink(date: Date) {
      this.router.navigate(['/calendar', {
         outlets: {
            calendarInfo: [date.toLocaleDateString('en-CA', {
               year: 'numeric',
               month: '2-digit',
               day: '2-digit'
            }).replace(/\//g, '-')]
         }
      }]).then();
   }
}
