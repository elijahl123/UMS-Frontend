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
      this.read.getAssignments().then(assignments => {
         this.assignments.next(assignments.homeworkAssignments.edges.map(edge => edge.node));
         let uid = this.route.firstChild?.snapshot.paramMap.get('uid')
         if (uid) {
            this.selectedAssignment.next(this.getAssignment(uid));
         }
      });
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

   getAssignment(uid: string | null): HomeworkAssignment | null {
      return this.assignments.getValue().find(assignment => assignment.uid === uid) || null;
   }

   selectAssignment(assignmentObj: HomeworkAssignment | null) {
      if (assignmentObj) {
         this.router.navigate(['/homework', assignmentObj.uid]);
         this.selectedAssignment.next(assignmentObj);
      } else {
         this.router.navigate(['/homework']);
         this.selectedAssignment.next(null);
      }
   }
}
