import {Component, NgIterable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IconDefinition} from "@fortawesome/pro-regular-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {AuthService} from "../../../../services/components/features/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
      this.authService.tokenAuth(this.signupForm.value.email, this.signupForm.value.password)
        .subscribe(({data}) => {
          if (data) {
            if (data.tokenAuth) {
              localStorage.setItem('token', data.tokenAuth.token);
              this.router.navigate(['/']).then();
            }
          }
        }, (error) => {
          this.signupForm.setErrors({error: error});
          console.log(this.signupForm.errors);
          this.loading = false;
        });
    }
  }

  createForm(): FormGroup {
    return this.fb.group(
      {
        // email is required and must be a valid email
        email: [null, Validators.compose([
          Validators.email,
          Validators.required
        ])
        ],
        password: [null, Validators.compose([
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
