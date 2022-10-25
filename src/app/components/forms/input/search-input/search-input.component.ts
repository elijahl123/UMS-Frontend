import { Component, OnInit } from '@angular/core';
import { BaseFormsComponent } from '../../../../core/components/forms/base.forms.component';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';

@Component({
   selector: 'form-search-input',
   templateUrl: './search-input.component.html',
   styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent extends BaseFormsComponent implements OnInit {
   searchIcon: IconDefinition = faSearch;

   constructor() {
      super();
   }

   ngOnInit(): void {
   }

}
