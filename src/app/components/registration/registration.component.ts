import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, IconSpriteModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  public isShown = {
    pass: false,
    confirm: false,
  };
  public regForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm: new FormControl(''),
  });

  public onSubmit(): void {
    console.log(this.regForm.value);
  }

  public redirect(): void {
    this.router.navigate(['login']);
  }
  public handleShown(type: 'pass' | 'confirm') {
    this.isShown[type] = !this.isShown[type];
  }
}
