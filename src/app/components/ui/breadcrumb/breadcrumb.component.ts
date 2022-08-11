import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    BreadcrumbItemComponent
  ],
  selector: 'ui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent extends BaseUiComponent implements OnInit {
  @Input() mainIcon: IconDefinition = faFolder;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
