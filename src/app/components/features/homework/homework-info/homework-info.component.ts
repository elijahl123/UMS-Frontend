import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeworkService } from '../../../../services/components/features/homework/homework.service';
import { HomeworkAssignment } from '../homework.component';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faBook, faCalendar, faCheckCircle, faSquareArrowUpRight, faTimes } from '@fortawesome/pro-solid-svg-icons';

@Component({
   selector: 'app-homework-info',
   templateUrl: './homework-info.component.html',
   styleUrls: ['./homework-info.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class HomeworkInfoComponent implements OnInit {
   bookIcon: IconDefinition = faBook;
   closeIcon: IconDefinition = faTimes;
   linkIcon: IconDefinition = faSquareArrowUpRight;
   calendarIcon: IconDefinition = faCalendar;
   checkIcon: IconDefinition = faCheckCircle;

   constructor(private homeworkService: HomeworkService, private router: Router, private route: ActivatedRoute) {
   }

   ngOnInit(): void {
   }

   get assignment(): HomeworkAssignment | null {
      return this.homeworkService.selectedAssignment.getValue();
   }

   closeMenu() {
      this.router.navigate(['..'], { relativeTo: this.route });
   }

   getAssignmentDueDate(assignment: HomeworkAssignment) {
      return new Date(assignment.dueDate + 'T' + assignment.dueTime);
   }

   openLink(link: string) {
      window.open(link, '_blank');
   }

   goToCalendar(dueDate: string) {
      this.router.navigate(['/calendar', { outlets: { 'calendarInfo': dueDate } }]);
   }
}
