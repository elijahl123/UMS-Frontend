import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faExclamationTriangle, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeworkService } from '../../../services/components/features/homework/homework.service';
import { GetHomeworkAssignmentsGQL, HomeworkAssignmentType } from '../../../../generated/graphql';
import { AuthService } from '../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [HomeworkService]
})
export class HomeworkComponent implements OnInit, OnDestroy {
  assignments: BehaviorSubject<HomeworkAssignmentType[]> = new BehaviorSubject<HomeworkAssignmentType[]>([]);
  plusIcon: IconDefinition = faPlus;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  dangerIcon: IconDefinition = faExclamationTriangle;

  constructor(private homeworkService: HomeworkService, private getAssignmentsService: GetHomeworkAssignmentsGQL, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAssignmentsService.fetch({
      token: this.authService.getToken()
    }).toPromise().then(data => {
      this.assignments.next(data?.data?.homeworkAssignments?.edges.map(edge => edge?.node) as HomeworkAssignmentType[]);
    });
  }

  getDates() {
    // Return a list of all the dates that have assignments
    const dateStrings = this.homeworkService.getAssignments()
      .map(assignment => assignment.dueDate)
      .filter((value, index, self) => self.indexOf(value) === index);
    // Convert the date strings to Date objects
    return dateStrings.map(dateString => new Date(dateString + 'T00:00:00'));
  }

  getLateAssignments() {
    // Return a list of all the assignments that are not completed and are late
    return this.assignments.getValue().filter(assignment => {
      const dueDate = new Date(assignment.dueDate + 'T' + assignment.dueTime);
      return !assignment.completed && dueDate < new Date();
    });
  }

  getCompletedAssignments() {
    // Return a list of all the assignments that are completed
    return this.assignments.getValue().filter(assignment => assignment.completed);
  }

  selectAssignment(assignmentObj: HomeworkAssignmentType) {
    if (this.route.children[0]?.snapshot.paramMap.has('uid')) {
      if (this.route.children[0].snapshot.paramMap.get('uid') === assignmentObj.uid) {
        this.homeworkService.selectAssignment(null);
      } else {
        this.homeworkService.selectAssignment(assignmentObj);
      }
    } else {
      this.homeworkService.selectAssignment(assignmentObj);
    }
  }

  getAssignments() {
    return this.homeworkService.getAssignments();
  }

  dateHasChanged(assignmentObj: HomeworkAssignmentType) {
    const assignments = this.getAssignments();
    const index = assignments.indexOf(assignmentObj);
    if (index === 0) {
      return true;
    } else {
      return assignments[index - 1].dueDate !== assignmentObj.dueDate;
    }
  }

  isRouterActive() {
    return this.router.url !== '/homework';
  }

  ngOnDestroy(): void {
    this.outlet.deactivate();
  }

  isDateToday(dueDate: string) {
    const today = new Date();
    const due = new Date(dueDate + 'T00:00:00');
    return today.getDate() === due.getDate() && today.getMonth() === due.getMonth() && today.getFullYear() === due.getFullYear();
  }
}
