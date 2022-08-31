import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faClose, faInfoCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent extends BaseUiComponent implements OnInit {
  @Input('text') message: string = 'This is an alert!';
  @Input('icon') leftIcon: IconDefinition = faInfoCircle;
  closeIcon: IconDefinition = faClose;

  @ViewChild('alert', { static: false }) alertRef: ElementRef;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onCloseButtonClick() {
    this.alertRef.nativeElement.classList.add('hidden');
  }
}
