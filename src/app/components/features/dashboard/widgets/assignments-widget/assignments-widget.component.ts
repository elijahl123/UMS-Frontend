import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faMemoPad, faPlus, faSquareArrowUpRight } from '@fortawesome/pro-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { GetHomeworkAssignmentsGQL, HomeworkAssignmentType } from '../../../../../../generated/graphql';
import { AuthService } from '../../../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-assignments-widget',
  templateUrl: './assignments-widget.component.html',
  styleUrls: ['./assignments-widget.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AssignmentsWidgetComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;
  upcomingAssignments: BehaviorSubject<HomeworkAssignmentType[]> = new BehaviorSubject<HomeworkAssignmentType[]>([]);
  assignmentIcon: IconDefinition = faMemoPad;
  linkIcon: IconDefinition = faSquareArrowUpRight;

  constructor(private getHomeworkAssignmentsService: GetHomeworkAssignmentsGQL, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getHomeworkAssignmentsService.fetch({
      token: this.authService.getToken()
    }).toPromise().then((data) => {
      // Check if the assignment is late, or it is due within the next 3 days
      const now = new Date();
      const threeDaysFromNow = new Date();
      threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
      const upcomingAssignments = data.data.homeworkAssignments?.edges.map((edge) => edge?.node).filter((assignment) => {
          const dueDate = new Date(assignment?.dueDate);
          return dueDate < now || (dueDate >= now && dueDate <= threeDaysFromNow);
        }
      );
      this.upcomingAssignments.next(upcomingAssignments as HomeworkAssignmentType[]);
    });
  }

  formatTime(inTime: string) {
    // Get the AM/PM time
    let time = inTime.split(':');
    let hours = parseInt(time[0]);
    let minutes = time[1];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  getUpcomingAssignments() {
    return this.upcomingAssignments.getValue();
  }
}
