import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from '../../../core/components/ui/base.ui.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'ui-empty-space',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './empty-space.component.html',
  styleUrls: ['./empty-space.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmptySpaceComponent extends BaseUiComponent implements OnInit {
  @Input() head: string;
  @Input() sub: string;
  @Input() icon: IconDefinition;
  @Input() size: string = '2xl';
  @Input() iconSize: SizeProp = '4x';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
