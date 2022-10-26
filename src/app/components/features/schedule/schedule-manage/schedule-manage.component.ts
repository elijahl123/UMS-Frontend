import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faPen, faSchool, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { Router } from '@angular/router';
import { ReadService } from '../../../../services/model/read/read.service';

@Component({
   selector: 'app-schedule-manage',
   templateUrl: './schedule-manage.component.html',
   styleUrls: ['./schedule-manage.component.css'],
})
export class ScheduleManageComponent implements OnInit {
   courseTimes: Schedule[] = []
   courseIcon: IconDefinition = faSchool;
   editIcon: IconDefinition = faPen;
   closeIcon: IconDefinition = faTimes;

   constructor(private read: ReadService, private router: Router) {
   }

   ngOnInit(): void {
      this.read.getCourseTimes().then((data) => {
         this.courseTimes = data.courseTimes.edges.map((edge) => edge.node);
      })
   }

   getWeekdayStr(courseTime: Schedule) {
      // Return the sub text for the card in the format "Monday, Wednesday, Friday at 9:00 AM"
      // First convert the weekdays from a string of a list of strings to a list of strings
      let weekdays = courseTime.weekday
         .split('[')[1]
         .split(']')[0]
         .split(',')
         .map((weekday) => weekday.trim().slice(1, -1));
      return weekdays.join(', ');
   }

   closeMenu() {
      // Redirect to the schedule page
      this.router.navigate(['/schedule']);
   }
}
