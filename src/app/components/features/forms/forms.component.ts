import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import schema from '../../../../generated/graphql.schema.json';
import { Observable, Subject } from 'rxjs';
import { IntrospectionInputValue } from 'graphql/utilities';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormType {
  name: string;
  fields: {
    args: [];
    description: string;
    isDeprecated: boolean;
    name: string;
    type: {[key: string]: any};
  };
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  form: FormGroup;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // First, we need to determine if we are adding or editing a record.
    this.route.params.subscribe(async params => {
      let modelName = params.model.charAt(0).toUpperCase() + params.model.replace(/-([a-z])/g, function (g: string) {
        return g[1].toUpperCase();
      }).concat('MutationInput').slice(1);
      if (params.uid) {
        console.log('We are editing a record.');
      } else {
        modelName = 'Add' + modelName;
      }
      const fields = schema.__schema.types.find(type => type.name === modelName)!.inputFields!.filter(val => {
        return (val.name !== 'clientMutationId') && (val.name !== 'id');
      }) as IntrospectionInputValue[];
      this.form = new FormGroup(fields.map(field => {
        return new FormControl('', field.type.kind === 'NON_NULL' ? Validators.required : null);
      }));
      console.log(this.form);
    });
  }

}
