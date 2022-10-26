import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from '../../../services/routing/components/features/homework/homework-routing.module';
import { HomeworkComponent } from './homework.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../../ui/card/card.component';
import { HomeworkItemComponent } from './homework-item/homework-item.component';
import { TimeModule } from '../../pipes/time/time.module';
import { HomeworkInfoComponent } from './homework-info/homework-info.component';
import { HomeworkService } from '../../../services/components/features/homework/homework.service';


@NgModule({
   declarations: [
      HomeworkComponent,
      HomeworkItemComponent,
      HomeworkInfoComponent
   ],
   imports: [
      CommonModule,
      HomeworkRoutingModule,
      FontAwesomeModule,
      CardComponent,
      TimeModule
   ],
   providers: [HomeworkService]
})
export class HomeworkModule {
}
