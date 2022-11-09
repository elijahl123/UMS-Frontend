import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faPlus, faTrash } from '@fortawesome/pro-solid-svg-icons';
import { faSchool } from '@fortawesome/pro-duotone-svg-icons';
import { GetCoursesResponse, ReadService } from '../../../services/model/read/read.service';
import { Course } from '../../../services/components/features/notes/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;
  courses: Course[];
  courseIconDuo: IconDefinition = faSchool;

  constructor(private read: ReadService, private router: Router) {
  }

  ngOnInit(): void {
    this.read.getCourses().then((data: GetCoursesResponse) => {
      this.courses = data.courses.edges.map((edge) => edge.node);
    });
  }

  getCourses(): Course[] {
    return this.courses;
  }

  isOnHomepage() {
    return this.router.url === '/courses';
  }
}
