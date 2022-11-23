import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import schema from '../../../../generated/graphql.schema.json';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { CourseType, GetCoursesGQL } from '../../../../generated/graphql';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../services/components/features/auth/auth.service';

export interface IntrospectionInputValue {
  type: {
    kind?: string;
    name?: string;
    ofType?: {
      kind: string;
      name: string;
      ofType: any;
    }
  };
  name: string;
  description: string;
  defaultValue: any;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  form: FormGroup;
  fields: IntrospectionInputValue[];
  courses: CourseType[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public appComponent: AppComponent,
    private authService: AuthService,
    private getCourses: GetCoursesGQL
  )
  {
  }

  ngOnInit(): void {
    this.getCourses.fetch({
      token: this.authService.getToken()
    }).pipe(
      map(result => result.data.courses?.edges?.map(edge => edge?.node))
    ).subscribe(courses => {
      this.courses = courses as CourseType[];
    })
    // First, we need to determine if we are adding or editing a record.
    this.route.params.subscribe(async params => {
      let model = params.model.charAt(0).toUpperCase() + params.model.replace(/-([a-z])/g, function (g: string) {
        return g[1].toUpperCase();
      }).slice(1);
      let modelName = model.concat('MutationInput');
      if (params.uid) {
        console.log('We are editing a record.');
      } else {
        modelName = 'Add' + modelName;
      }
      let formType = model.concat('Type');
      const fields = (schema.__schema.types.find(type => type.name === modelName)!.inputFields as { name: string }[]).filter(field => {
        return field.name !== 'clientMutationId' && field.name !== 'id' && field.name !== 'user';
      });
      let formFields = (schema.__schema.types.find(type => type.name === formType)!.fields as unknown as IntrospectionInputValue[]).filter(field => {
        return fields.find(f => f.name === field.name);
      });
      this.fields = formFields;
      this.form = this.toFormGroup(formFields);
    });
  }

  toFormGroup(fields: IntrospectionInputValue[]): FormGroup {
    const group: any = {};
    fields.forEach(field => {
      group[field.name] = [field.defaultValue, ...this.getValidators(field)];
    });
    return this.fb.group(group);
  }

  getValidators(field: IntrospectionInputValue): ValidatorFn[] {
    let validators = [];
    if (field.type.kind === 'NON_NULL') {
      validators.push(Validators.required);
    }
    if (field.type.kind === 'SCALAR') {
      if (field.type.name === 'Int') {
        validators.push(Validators.pattern('^[0-9]*$'));
      }
    }
    return validators;
  }

  getEnumValues(name?: string) {
    return schema.__schema.types.find(type => type.name === name)!.enumValues;
  }

  getObjectValues(name?: string) {
    const type = schema.__schema.types.find(type => type.name === name);
    switch (type!.name) {
      case 'CourseType':
        return this.courses;
        break;
      default:
        return [];
    }
  }

  camelCaseToTitle(name: string) {
    return name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }

  getDaysOfWeek() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
