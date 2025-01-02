import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public onSubmit(): void {
    console.log(this.loginForm.value);
  }
  public redirect(): void {
    this.router.navigate(['registration']);
  }
}
