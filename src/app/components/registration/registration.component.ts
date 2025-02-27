import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import {
  IsShown,
  RegErrors,
  RegForm,
} from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { registration } from '../../store/actions-auth';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, IconSpriteModule, NgClass],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(
    private router: Router,
    private store: Store,
  ) {}
 
  public isShown: IsShown = {
    pass: false,
    confirm: false,
  };
  public regForm: FormGroup<RegForm> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
    confirm: new FormControl('', [Validators.required]),
  });

  public onSubmit(): void {
    const data = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
    };
    console.log(data);
    this.store.dispatch(registration({ data, event: 'registration' }));
    this.regForm.reset();
  }

  public redirect(): void {
    this.router.navigate(['login']);
  }
  public handleShown(type: 'pass' | 'confirm'): void {
    this.isShown[type] = !this.isShown[type];
  }

  public errors: RegErrors = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };

  get name(): FormControl {
    return this.regForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.regForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.regForm.get('password') as FormControl;
  }
  get confirm(): FormControl {
    return this.regForm.get('confirm') as FormControl;
  }

  public updErrorMsg(type: string): void {
    switch (type) {
      case 'name':
        if (this.name && this.name.hasError('required')) {
          this.errors.name = 'Name is required';
        } else {
          this.errors.name = '';
        }
        break;
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
      case 'confirm':
        if (this.confirm && this.confirm.hasError('required')) {
          this.errors.confirm = 'Confirmation password is required';
        } else if (this.confirm.value !== this.password.value) {
          this.errors.confirm = 'Confirmation password does not match';
        } else {
          this.errors.confirm = '';
        }
    }
  }
}
