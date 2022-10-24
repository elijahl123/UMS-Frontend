import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeworkService } from '../../../../services/components/features/homework/homework.service';
import { HomeworkAssignment } from '../homework.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homework-info',
  templateUrl: './homework-info.component.html',
  styleUrls: ['./homework-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeworkInfoComponent implements OnInit {
  assignment: HomeworkAssignment | null;

  constructor(private homeworkService: HomeworkService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.homeworkService.selectedAssignment.subscribe(assignment => {
      this.assignment = assignment;
    })
  }

}
