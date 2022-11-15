import { Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCog, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CourseTimeType, GetCourseTimesGQL } from '../../../../generated/graphql';
import { AuthService } from '../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleComponent implements OnInit, OnDestroy {
  plusIcon: IconDefinition = faPlus;
  cogIcon: IconDefinition = faCog;
  courseTimes: CourseTimeType[] = [];
  selectedCourseTime: Subject<CourseTimeType | null> = new Subject<CourseTimeType | null>();
  selectedCourseTimeValue: CourseTimeType | null;
  @ViewChildren(RouterOutlet) routerOutlets: QueryList<RouterOutlet>;

  constructor(private getCourseTimes: GetCourseTimesGQL, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    // Pull all the course times from the user
    this.getCourseTimes.fetch({
      token: this.authService.getToken()
    }).toPromise().then(data => {
      this.courseTimes = data.data.courseTimes?.edges.map(edge => edge?.node) as CourseTimeType[];

      // Check the activated route for a course time uid. The uid is in the router outlet named courseTimeInfo
      const courseTimeUid = this.route.snapshot.children[0]?.params.uid;
      if (courseTimeUid) {
        // If the uid is found, find the course time with that uid and select it
        const courseTime = this.courseTimes.find(courseTime => courseTime.uid === courseTimeUid);
        if (courseTime) {
          this.selectedCourseTime.next(courseTime);
        } else {
          // If the uid is not found, navigate to the schedule page
          this.selectedCourseTime.next(null);
        }
      } else {
        // If the uid is not found, navigate to the schedule page
        this.selectedCourseTime.next(null);
      }
    });
    this.selectedCourseTime.subscribe(courseTime => {
      if (courseTime) {
        // If a course time is selected, navigate to the course time info page
        this.router.navigate(['course-time', courseTime.uid], { relativeTo: this.route });
      } else {
        // If no course time is selected, navigate to the schedule page
        if (this.selectedCourseTimeValue) {
          this.router.navigate(['.'], { relativeTo: this.route });
        }
      }
      this.selectedCourseTimeValue = courseTime;
    })
  }

  getTimes() {
    // Return a list of times from the earliest time in the schedule to the latest time in the schedule.
    // Use 30-minute intervals
    const times = [];
    let earliestTime = 24;
    let latestTime = 0;
    this.courseTimes.forEach(courseTime => {
      const startTime = Number(courseTime.startTime.split(':')[0]);
      const endTime = Number(courseTime.endTime.split(':')[0]);
      if (startTime < earliestTime) {
        earliestTime = startTime;
      }
      if (endTime > latestTime) {
        latestTime = endTime;
      }
    });
    earliestTime = earliestTime - 1;
    latestTime = latestTime + 1;
    for (let i = earliestTime; i <= latestTime; i++) {
      if (i < 12) {
        times.push(`${i}:00 AM`);
        times.push(`${i}:30 AM`);
      } else if (i === 12) {
        times.push(`${i}:00 PM`);
        times.push(`${i}:30 PM`);
      } else {
        times.push(`${i - 12}:00 PM`);
        times.push(`${i - 12}:30 PM`);
      }
    }
    return times;
  }

  getDays() {
    // For each day of the week, return a list of times from getTimes()
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(...this.getTimes());
    }
    return days;
  }

  getStyle(courseTime: CourseTimeType): { [key: string]: string } {
    // For the given course time, calculate which row and column it should be in. For each time, round to the nearest 30 minutes
    let startTime = Number(courseTime.startTime.split(':')[0]) * 2;
    let endTime = Number(courseTime.endTime.split(':')[0]) * 2;
    const startMinute = Number(courseTime.startTime.split(':')[1]);
    const endMinute = Number(courseTime.endTime.split(':')[1]);
    if (startMinute >= 30) {
      startTime += 1;
    }
    if (endMinute >= 30) {
      endTime += 1;
    }
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const times = this.getTimes().map(time => {
      // Return a list of integers in 48 hour time representing the times in 30-minute intervals
      const hour = Number(time.split(':')[0]);
      const minute = time.split(':')[1].split(' ')[0];

      // Convert to 48 hour time representing 30-minute intervals and be sure to account for 12 and 12:30
      if (time.split(' ')[1] === 'AM') {
        if (hour === 12) {
          return 0 + (minute === '30' ? 1 : 0);
        }
        return hour * 2 + (minute === '30' ? 1 : 0);
      } else {
        if (hour === 12) {
          return 24 + (minute === '30' ? 1 : 0);
        }
        return hour * 2 + 24 + (minute === '30' ? 1 : 0);
      }
    });

    const startRow = times.indexOf(startTime) + 1;
    const endRow = times.indexOf(endTime) + 2;
    const column = daysOfWeek.indexOf(courseTime.weekday) + 1;

    return {
      'grid-row': `${startRow} / ${endRow}`,
      'grid-column': `${column} / ${column + 1}`,
    }
  }

  getBodyContainerStyle(): { [key: string]: string } {
    return {
      'grid-template-rows': `repeat(${this.getTimes().length}, 1fr)`,
    }
  }

  getTotalCourseTimes() {
    // Create a Schedule object for each course time for each day of the week
    const courseTimes: CourseTimeType[] = [];
    this.courseTimes.forEach(courseTime => {
      const weekday = courseTime.weekday.substring(1, courseTime.weekday.length - 1).split(', ').map(weekday => weekday.substring(1, weekday.length - 1));
      for (let i = 0; i < weekday.length; i++) {
        courseTimes.push({
          uid: courseTime.uid,
          course: courseTime.course,
          startTime: courseTime.startTime,
          endTime: courseTime.endTime,
          weekday: weekday[i],
        } as CourseTimeType);
      }
    });
    return courseTimes;
  }

  getBodyStyle() {
    return {
      'grid-template-rows': `repeat(${this.getTimes().length}, 1fr)`,
    }
  }

  selectCourse(courseTime: CourseTimeType) {
    if (this.selectedCourseTimeValue) {
      if (this.selectedCourseTimeValue.uid === courseTime.uid) {
        this.selectedCourseTime.next(null);
      } else {
        this.selectedCourseTime.next(courseTime);
      }
    } else {
      this.selectedCourseTime.next(courseTime);
    }
  }

  getDaysOfWeek() {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

  isDayOfWeekToday(dayOfWeek: string) {
    // dayOfWeek is a string representing a day of the week in the format 'Sun', 'Mon', etc.
    // Return true if the day of the week is today
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();
    return daysOfWeek[today] === dayOfWeek;
  }

  isRouterOnHomepage() {
    return this.router.url === '/schedule';
  }

  getBodyContainerWrapperStyle() {
    let classes = ['class-schedule-body-container-wrapper'];
    if (!this.isRouterOnHomepage()) {
      classes.push('gap-4');
    }
    return classes;
  }

  onManageSchedule() {
    // Check if the scheduleInfo outlet is activated. If so, deactivate it, otherwise activate it
    if (!this.router.url.startsWith('/schedule/manage')) {
      this.router.navigate(['/schedule', 'manage'])
    } else {
      this.router.navigate(['/schedule']);
    }
  }

  ngOnDestroy() {
  }
}
