import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeworkAssignment } from '../homework.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faBook, faInfoCircle } from '@fortawesome/pro-solid-svg-icons';

@Component({
   selector: 'app-homework-item',
   templateUrl: './homework-item.component.html',
   styleUrls: ['./homework-item.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class HomeworkItemComponent implements OnInit {
   @Input() assignment: HomeworkAssignment;
   @Input() transparent: boolean = false;
   assignmentIcon: IconDefinition = faBook;
   infoIcon: IconDefinition = faInfoCircle;

   constructor() {
   }

   ngOnInit(): void {
   }
}
