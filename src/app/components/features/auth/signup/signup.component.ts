import { Component, NgIterable, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../../../services/components/features/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  signupForm: FormGroup;
  googleIcon: IconDefinition = faGoogle;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = this.createForm();
  }

  onSubmit() {
    this.loading = true;
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.email, this.signupForm.value.username, this.signupForm.value.password1, this.signupForm.value.password2)
        .subscribe(({ data }) => {
          if (data) {
            if (data.signup.errors.length > 0) {
              for (const error of data.signup.errors) {
                this.signupForm.controls[error.field].setErrors({messages: error.messages});
              }
            } else {
              if (data.signup.token) {
                this.authService.setToken(data.signup.token);
                this.router.navigate(['/']).then();
              }
            }
          }
        });
    }

  }

  createForm(): FormGroup {
    return this.fb.group(
      {
        firstName: [null, Validators.compose([
          Validators.required
        ])
        ],
        lastName: [null, Validators.compose([
          Validators.required
        ])
        ],
        email: [null, Validators.compose([
          Validators.email,
          Validators.required
        ])
        ],
        username: [null, Validators.compose([
          Validators.minLength(3),
          Validators.required
        ])
        ],
        password1: [null, Validators.compose([
          Validators.required,
        ])],
        password2: [null, Validators.compose([
          Validators.required,
        ])]
      });
  }

  getFormErrors(): NgIterable<any> | undefined | null {
    let errors: string[] = [];
    if (this.signupForm.errors) {
      for (const value of Object.values(this.signupForm.errors)) {
        errors.push(value.message);
      }
    }
    return errors;
  }

}
