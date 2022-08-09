import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'ui-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css']
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() leftIcon: IconDefinition;
  @Input() text: string = "";
  @Input() color: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
