import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from '../../../services/routing/components/features/courses/courses-routing.module';
import { CoursesComponent } from './courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../../ui/card/card.component';
import { CourseComponent } from './course/course.component';
import { EmptySpaceComponent } from '../../ui/empty-space/empty-space.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent
  ],
	imports: [
		CommonModule,
		CoursesRoutingModule,
		FontAwesomeModule,
		CardComponent,
		EmptySpaceComponent
	]
})
export class CoursesModule { }
