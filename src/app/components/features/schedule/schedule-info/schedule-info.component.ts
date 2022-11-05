import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faMap, faPlus, faSchool, faSquareArrowUpRight, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { faFilePen } from '@fortawesome/pro-duotone-svg-icons';
import { ReadService } from '../../../../services/model/read/read.service';
import { BehaviorSubject } from 'rxjs';

export interface ScheduleInfo {
  uid: string;
  course: {
    name: string;
    color: string;
  };
  startTime: string;
  weekday: string;
  location: string;
  link: string;
  zoomPassword: string;
}

@Component({
  selector: 'app-schedule-info',
  templateUrl: './schedule-info.component.html',
  styleUrls: ['./schedule-info.component.css']
})
export class ScheduleInfoComponent implements OnInit, OnDestroy {
  courseTime: ScheduleInfo;
  uid: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  schoolIcon: IconDefinition = faSchool;
  linkIcon: IconDefinition = faSquareArrowUpRight;
  openNotesIcon: IconDefinition = faFilePen;
  addIcon: IconDefinition = faPlus;
  mapIcon: IconDefinition = faMap;
  closeIcon: IconDefinition = faTimes;

  constructor(private route: ActivatedRoute, private router: Router, private read: ReadService) {
  }

  ngOnInit(): void {
    // Pull the course time from the route
    this.route.params.subscribe((params) => {
      this.uid.next(params.uid);
    });
    this.uid.subscribe(uid => {
      if (uid) {
        this.read.getScheduleInfo(uid).then(data => {
          this.courseTime = data.courseTimes.edges[0].node;
        });
      }
    });
  }

  getWeekdays() {
    return this.courseTime.weekday.split('[')[1].split(']')[0].split('\'').filter((weekday) => (weekday !== '' && weekday !== ', '));
  }

  closeMenu() {
    this.router.navigate(['/schedule']);
  }

  ngOnDestroy(): void {
  }
}
