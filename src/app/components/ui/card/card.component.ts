import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

/**
 * @author: Elijah Lopez
 * @description: This component is used to display a card element.
 *
 * @usage:
 * <ui-card title="Card Title" class="text-utility-primary">
 *     <img alt="Test Image" image class="card-image"
 *          src="https://cdn4.buysellads.net/uu/1/116661/1651013349-_260x200_100_cloud_server_credit.jpg">
 *     Some quick example text to build on the card title and make up the bulk of the card's
 *     content.
 *     <ng-container footer>
 *       <ui-button text="Close" class="rounded-lg secondary-muted"></ui-button>
 *       <ui-button text="Go Somewhere" class="rounded-lg primary"></ui-button>
 *     </ng-container>
 *   </ui-card>
 */
@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent extends BaseUiComponent implements OnInit {
  @Input() title: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
