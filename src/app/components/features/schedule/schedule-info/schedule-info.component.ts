import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faMap, faSchool, faSquareArrowUpRight, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { faEdit, faFilePen } from '@fortawesome/pro-duotone-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { CourseTimeType, GetScheduleInfoGQL } from '../../../../../generated/graphql';
import { AuthService } from '../../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-schedule-info',
  templateUrl: './schedule-info.component.html',
  styleUrls: ['./schedule-info.component.css']
})
export class ScheduleInfoComponent implements OnInit, OnDestroy {
  courseTime: CourseTimeType;
  uid: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  schoolIcon: IconDefinition = faSchool;
  linkIcon: IconDefinition = faSquareArrowUpRight;
  openNotesIcon: IconDefinition = faFilePen;
  editIcon: IconDefinition = faEdit;
  mapIcon: IconDefinition = faMap;
  closeIcon: IconDefinition = faTimes;

  constructor(private route: ActivatedRoute, private router: Router, private getScheduleInfoService: GetScheduleInfoGQL, private authService: AuthService) {
  }

  ngOnInit(): void {
    // Pull the course time from the route
    this.route.params.subscribe((params) => {
      this.uid.next(params.uid);
    });
    this.uid.subscribe(uid => {
      if (uid) {
        this.getScheduleInfoService.fetch({
          uid: uid,
          token: this.authService.getToken(),
        }).toPromise().then((data) => {
          this.courseTime = data.data.courseTimes?.edges[0]?.node as CourseTimeType;
        })
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
