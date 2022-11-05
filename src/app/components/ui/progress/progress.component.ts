import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

/**
 * Usage:
 *
 * <ui-progress class="success" [width]="20" height="100px"></ui-progress>
 */
/**
 * @author Elijah Lopez
 * @description This component is used to display a progress bar.
 */
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
  @ViewChild('progressBar', { static: true }) progressBar: ElementRef;
  @Input() width: string | number = '50%';
  @Input('height') parentHeight: string | number = '40px';

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (typeof this.width === 'number') {
      this.width = this.width + '%';
    }

    if (typeof this.parentHeight === 'number') {
      this.parentHeight = this.parentHeight + 'px';
    }

    this.progressBar.nativeElement.style.width = this.width;
    this.progressBar.nativeElement.parentElement.style.height = this.parentHeight;
  }

}
