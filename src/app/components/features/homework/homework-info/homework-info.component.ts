import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeworkService } from '../../../../services/components/features/homework/homework.service';
import { HomeworkAssignment } from '../homework.component';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faBook, faCalendar, faCheckCircle, faSquareArrowUpRight, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-homework-info',
  templateUrl: './homework-info.component.html',
  styleUrls: ['./homework-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeworkInfoComponent implements OnInit {
  assignment: HomeworkAssignment | null;
  bookIcon: IconDefinition = faBook;
  closeIcon: IconDefinition = faTimes;
  linkIcon: IconDefinition = faSquareArrowUpRight;
  calendarIcon: IconDefinition = faCalendar;
  checkIcon: IconDefinition = faCheckCircle;

  constructor(private homeworkService: HomeworkService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.homeworkService.selectedAssignment.subscribe(assignment => {
      this.assignment = assignment;
    });
    let uid = this.route.snapshot.paramMap.get('uid');
    this.homeworkService.assignments.pipe(filter(assignments => assignments.length > 0)).subscribe(assignments => {
      this.assignment = assignments.find(assignment => assignment.uid === uid) || null;
    })
  }

  closeMenu() {
    this.router.navigate(['/homework']);
  }

  getAssignmentDueDate(assignment: HomeworkAssignment) {
    return new Date(assignment.dueDate + 'T' + assignment.dueTime);
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  goToCalendar(dueDate: string) {
    this.router.navigate(['/calendar', 'date', dueDate]);
  }
}
