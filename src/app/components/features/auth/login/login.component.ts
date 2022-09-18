import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  googleIcon: IconDefinition = faGoogle;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  onSubmit() {
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
}
