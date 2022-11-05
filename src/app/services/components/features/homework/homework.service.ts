import { Injectable } from '@angular/core';
import { HomeworkAssignment } from '../../../../components/features/homework/homework.component';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadService } from '../../../model/read/read.service';

@Injectable()
export class HomeworkService {
  assignments: BehaviorSubject<HomeworkAssignment[]> = new BehaviorSubject<HomeworkAssignment[]>([]);
  selectedAssignment: BehaviorSubject<HomeworkAssignment | null> = new BehaviorSubject<HomeworkAssignment | null>(null);

  constructor(private route: ActivatedRoute, private read: ReadService, private router: Router) {
    this.read.getAssignments().then(data => {
      this.assignments.next(data.homeworkAssignments.edges.map(edge => edge.node));
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

  selectAssignment(assignmentObj: HomeworkAssignment | null) {
    if (assignmentObj) {
      this.router.navigate(['/homework', 'assignment', assignmentObj.uid]);
      this.selectedAssignment.next(assignmentObj);
    } else {
      this.router.navigate(['/homework']);
      this.selectedAssignment.next(null);
    }
  }
}
