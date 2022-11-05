import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';

/**
 * @usage:
 * <form-select-input>
 *   <option selected>Open this select menu</option>
 *   <option value="1">One</option>
 *   <option value="2">Two</option>
 *   <option value="3">Three</option>
 * </form-select-input>
 */
@Component({
  selector: 'form-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectInputComponent extends BaseFormsComponent implements OnInit {
  caretIcon: IconDefinition = faChevronDown;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
