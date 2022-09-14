import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { BaseUiComponent } from '../../../../core/components/ui/base.ui.component';

@Component({
  selector: 'app-top-navigation-item',
  templateUrl: './top-navigation-item.component.html',
  styleUrls: ['./top-navigation-item.component.css']
})
export class TopNavigationItemComponent extends BaseUiComponent implements OnInit {
  @Input() leftIcon: IconDefinition;
  @Input() text: string;
  @Input() routerLink: string;
  @Input() routerLinkActive: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
