import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input('color') color: string = 'primary';
  @Input('message') message: string = 'This is an alert!';
  closeButton: IconDefinition = faClose;
  @Input('icon') leftIcon: IconDefinition = faInfoCircle;

  @ViewChild('alert', { static: false }) alertRef: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCloseButtonClick() {
    this.alertRef.nativeElement.classList.add('hidden');
  }
}
