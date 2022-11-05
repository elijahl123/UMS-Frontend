import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faClose, faInfo } from '@fortawesome/pro-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { Subject } from 'rxjs';

/**
 * @author: Elijah Lopez
 * @description: This component is used to display a toast element.
 *
 * @usage:
 * <ui-toast class="warning" [leftIcon]="infoTriangle" header="Hello World">
 *   <div class="toast-text-content">
 *     <ui-button text="Action" class="toast-button warning-muted"></ui-button>
 *     <ui-button text="Action" class="toast-button warning-muted"></ui-button>
 *   </div>
 * </ui-toast>
 */
@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    ButtonComponent
  ],
  selector: 'ui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent extends BaseUiComponent implements OnInit, OnDestroy {
  closeIcon: IconDefinition = faClose;
  @Input() leftIcon: IconDefinition = faInfo;
  @Input() header: string = 'Default Message';
  @Input() sub: string = 'Today at 10:00AM';
  @Input() hide: Subject<boolean> = new Subject<boolean>();
  isHidden: boolean = false;

  @ViewChild('toastContent', { static: true }) toastContent: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.hide.subscribe((isHidden) => {
      this.isHidden = isHidden;
    })
  }

  onClose() {
    this.hide.next(true);
  }

  getHidden() {
    return this.isHidden ? '!hidden' : '';
  }

  ngOnDestroy(): void {
    this.hide.unsubscribe();
  }
}
