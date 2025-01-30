import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [IconSpriteModule, ReactiveFormsModule, CommonModule],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.scss',
})
export class ProfileModalComponent {
  public filename: string = '';
  public avatarPhoto!: string;
  public profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(
      '',
      Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ),
    phone: new FormControl('', Validators.pattern(/^\+38\d{10}$/)),
    avatar: new FormControl(
      '',
      Validators.pattern(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/)
    ),
  });
  public handleSubmit() {
    console.log(this.profileForm.value);
  }

  public errors = {
    email: '',
    phone: '',
    avatar: '',
  };

  get name(): FormControl {
    return this.profileForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.profileForm.get('phone') as FormControl;
  }
  get avatar(): FormControl {
    return this.profileForm.get('avatar') as FormControl;
  }

  public updErrorMsg(type: string): void {
    switch (type) {
      case 'email':
        if (this.email && this.email.hasError('pattern')) {
          this.errors.email = 'Email is invalid';
        } else {
          this.errors.email = '';
        }
        break;
      case 'phone':
        if (this.phone && this.phone.hasError('pattern')) {
          this.errors.phone = 'Phone is invalid';
        } else {
          this.errors.phone = '';
        }
        break;
    }
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.filename = file.name;
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPhoto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
