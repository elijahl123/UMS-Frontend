import { AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToggleUiComponent } from '../../../core/components/ui/toggle.ui.component';
import { DropdownDirective } from '../../directives/ui/dropdown.directive';

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    DropdownDirective
  ],
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent extends ToggleUiComponent implements AfterViewInit {
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  @ViewChild('dropdownButton') dropdownButton: ElementRef;
  @ViewChild('dropdownBody') dropdownBody: ElementRef;


  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    const marginModifier = 16;
    let translateY = 0;
    let translateX = 0;

    switch (this.position) {
      case 'top':
        translateY = -this.dropdownButton.nativeElement.offsetHeight - marginModifier;
        break;
      case 'bottom':
        translateY = this.dropdownButton.nativeElement.offsetHeight + marginModifier;
        break;
      case 'left':
        translateX = -this.dropdownButton.nativeElement.offsetWidth - marginModifier;
        break;
      case 'right':
        translateX = this.dropdownButton.nativeElement.offsetWidth + marginModifier;
        break;
    }

    this.dropdownBody.nativeElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
}
