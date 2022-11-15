import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GetHomeworkAssignmentsGQL, HomeworkAssignmentType } from '../../../../../generated/graphql';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HomeworkService {
  assignments: BehaviorSubject<HomeworkAssignmentType[]> = new BehaviorSubject<HomeworkAssignmentType[]>([]);
  selectedAssignment: BehaviorSubject<HomeworkAssignmentType | null> = new BehaviorSubject<HomeworkAssignmentType | null>(null);

  constructor(private route: ActivatedRoute, private getAssignmentsService: GetHomeworkAssignmentsGQL, private router: Router, private authService: AuthService) {
    this.getAssignmentsService.fetch({
      token: this.authService.getToken()
    }).toPromise().then(data => {
      this.assignments.next(data?.data?.homeworkAssignments?.edges.map(edge => edge?.node) as HomeworkAssignmentType[]);
    })
  }

  getAssignments(date?: Date) {
    // Return a list of all the assignments that are not completed and are not late
    if (date) {
      return this.assignments.getValue().filter(assignment => {
        const dueDate = new Date(assignment.dueDate + 'T' + assignment.dueTime);
        return !assignment.completed && dueDate >= new Date() && dueDate.toDateString() === date.toDateString();
      });
    } else {
      return this.assignments.getValue().filter(assignment => {
        const dueDate = new Date(assignment.dueDate + 'T' + assignment.dueTime);
        return !assignment.completed && dueDate >= new Date();
      });
    }
  }

  selectAssignment(assignmentObj: HomeworkAssignmentType | null) {
    if (assignmentObj) {
      this.router.navigate(['/homework', 'assignment', assignmentObj.uid]);
      this.selectedAssignment.next(assignmentObj);
    } else {
      this.router.navigate(['/homework']);
      this.selectedAssignment.next(null);
    }
  }
}
