import { Component, OnInit, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToggleUiComponent } from '../../../core/components/ui/toggle.ui.component';

/**
 * usage:
 *
 * <ui-collapse [isOpen]="isOpen">
 *     <ui-button head text="Open Collapse" [rightIcon]="isOpen ? upChevron : downChevron" (click)="isOpen = !isOpen"
 *       class="brand-main rounded-lg w-full flex !justify-between"></ui-button>
 *     <p class="text-brand-secondary">
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 *       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 *       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 *       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *     </p>
 *   </ui-collapse>
 */
/**
 * @author: Elijah Lopez
 * @description: This component is used to create a collapse element.
 */
@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  selector: 'ui-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent extends ToggleUiComponent implements OnInit {

  @ViewChild('collapseBody', { static: false }) collapseBody: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

