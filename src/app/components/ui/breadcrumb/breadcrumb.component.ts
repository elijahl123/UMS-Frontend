import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() mainIcon: IconDefinition = faFolder;

  constructor() { }

  ngOnInit(): void {
  }

}
