import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { EditForm, User } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { editUser } from '../../store/actions-auth';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [IconSpriteModule, ReactiveFormsModule, CommonModule],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.scss',
})
export class ProfileModalComponent implements OnChanges {
  @Input() data!: User | null;
  public filename: string = '';
  public avatarPhoto!: string;
  private avatarUrl: string = ''
  public profileForm: FormGroup<EditForm> = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      [Validators.required, Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]
    ),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+38\d{10}$/)]),
    avatar: new FormControl(
      '',
      Validators.pattern(/^.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/)
    ),
  });
  constructor(private store: Store){}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.profileForm.patchValue({
        name: this.data.name || '',
        email: this.data.email || '',
        phone: this.data.phone || '',
        avatar: this.data.avatar || ''
      });
    }
  }

  public handleSubmit() {

    const user: User = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      avatar: this.avatarUrl
    }
    this.store.dispatch(editUser({event: 'editUser',user}))
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
        case 'avatar':
          if(this.avatar && this.avatar.hasError('pattern')){
            this.errors.avatar = 'Avatar is invalid'
            console.log(this.errors.avatar, this.avatar.errors)
          }
    }
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.filename = file.name;
    console.log(file);
    if (file) {
      this.avatarUrl = `https://${file.name}`
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPhoto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    this.updErrorMsg('avatar')
  }
}
