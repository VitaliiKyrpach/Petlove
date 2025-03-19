import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { LoginErrors, LoginForm } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { login } from '../../store/actions-auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, IconSpriteModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, private store: Store) {}

  public loginForm: FormGroup<LoginForm> = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });
  public onSubmit(): void {
    const data = {
      email: this.email.value,
      password: this.password.value
    }
    this.store.dispatch(login({ data }));
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
  public redirect(): void {
    this.router.navigate(['registration']);
  }

  public errors: LoginErrors = {
    email: '',
    password: '',
  };

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public updErrorMsg(type: string): void {
    switch (type) {
      case 'email':
        if (this.email && this.email.hasError('required')) {
          this.errors.email = 'Email is required';
        } else if (this.email && this.email.hasError('pattern')) {
          this.errors.email = 'Email is invalid';
        } else {
          this.errors.email = '';
        }
        break;
      case 'password':
        if (this.password && this.password.hasError('required')) {
          this.errors.password = 'Password is required';
        } else if (this.password && this.password.hasError('minlength')) {
          this.errors.password = 'Password must contain minimum 7 symbols';
        } else {
          this.errors.password = '';
        }
        break;
    }
  }
}
