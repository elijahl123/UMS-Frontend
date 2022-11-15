import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';
import { faSchool } from '@fortawesome/pro-duotone-svg-icons';
import { Router } from '@angular/router';
import { CourseType, GetCoursesGQL } from '../../../../generated/graphql';
import { AuthService } from '../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;
  courses: CourseType[];
  courseIconDuo: IconDefinition = faSchool;

  constructor(private getCoursesService: GetCoursesGQL, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getCoursesService.fetch({
      token: this.authService.getToken()
    }).toPromise().then((data) => {
      this.courses = data.data.courses!.edges.map((edge) => edge!.node) as CourseType[];
    });
  }

  getCourses(): CourseType[] {
    return this.courses;
  }

  isOnHomepage() {
    return this.router.url === '/courses';
  }
}
