import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  selector: 'ui-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent extends BaseUiComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
