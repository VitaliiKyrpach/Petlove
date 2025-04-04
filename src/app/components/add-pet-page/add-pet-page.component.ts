import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule,
} from '@ng-select/ng-select';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { AddPet, AddPetError } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addNewPet } from '../../store/actions';

@Component({
  selector: 'app-add-pet-page',
  standalone: true,
  imports: [
    AsyncPipe,
    IconSpriteModule,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    NgSelectModule,
    CommonModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-pet-page.component.html',
  styleUrl: './add-pet-page.component.scss',
})
export class AddPetPageComponent implements OnInit {
  public species$!: Observable<string[]>;
  public filename: string = '';
  public avatarPhoto!: string;
  public date = new Date();
  public chevron: boolean = false;
  public errors: AddPetError = {
    name: '',
    title: '',
    imgURL: '',
    species: '',
    birthday: '',
    sex: '',
  };

  constructor(
    private service: ServiceService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.species$ = this.service.getSpecies();
  }

  public addPetForm: FormGroup<AddPet> = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    title: new FormControl<string>('', Validators.required),
    imgURL: new FormControl<string>('', Validators.required),
    species: new FormControl<string | null>(null, Validators.required),
    birthday: new FormControl<string | null>(null, Validators.required),
    sex: new FormControl<string>('', Validators.required),
  });

  public handleChevron(): void {
    this.chevron = !this.chevron;
  }
  public handlepick(type: string): void {
    this.updErrorMsg(type);
  }
  public showSex(): void {
    console.log(this.sex);
  }
  public goBack(): void {
    this.router.navigate(['/profile']);
  }
  get name(): FormControl {
    return this.addPetForm.get('name') as FormControl;
  }
  get title(): FormControl {
    return this.addPetForm.get('title') as FormControl;
  }
  get imgURL(): FormControl {
    return this.addPetForm.get('imgURL') as FormControl;
  }
  get species(): FormControl {
    return this.addPetForm.get('species') as FormControl;
  }
  get birthday(): FormControl {
    return this.addPetForm.get('birthday') as FormControl;
  }
  get sex(): FormControl {
    return this.addPetForm.get('sex') as FormControl;
  }

  public onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      this.filename = file.name;
      this.service.setAvatar(file).subscribe((res) => {
        this.imgURL.setValue(res.secure_url);
      });
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPhoto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    this.errors.imgURL = '';
  }
  public updErrorMsg(type: string): void {
    console.log(type);
    switch (type) {
      case 'name':
        if (this.name && this.name.hasError('required')) {
          this.errors.name = 'Name is required';
        } else {
          this.errors.name = '';
        }
        break;
      case 'title':
        if (this.title && this.title.hasError('required')) {
          this.errors.title = 'Title is required';
        } else {
          this.errors.title = '';
        }
        break;
      case 'imgURL':
        if (this.imgURL && this.imgURL.hasError('required')) {
          this.errors.imgURL = 'Avatar is required';
        } else {
          this.errors.imgURL = '';
        }
        break;
      case 'species':
        if (this.species && this.species.hasError('required')) {
          this.errors.species = 'Species is required';
        } else {
          this.errors.species = '';
        }
        break;
      case 'birthday':
        if (this.birthday && this.birthday.hasError('required')) {
          this.errors.birthday = 'Birthday is required';
        } else {
          this.errors.birthday = '';
        }
        break;
      case 'sex':
        if (this.sex && this.sex.hasError('required')) {
          this.errors.sex = 'Sex is required';
        } else {
          this.errors.sex = '';
        }
        break;
    }
  }

  public onSubmit(): void {
    let date;
    this.birthday.value
      ? (date = new Date(this.birthday.value).toISOString().split('T')[0])
      : (date = '');

    const pet = {
      name: this.name.value,
      title: this.title.value,
      imgURL: this.imgURL.value,
      species: this.species.value,
      birthday: date,
      sex: this.sex.value,
    };
    if (this.addPetForm.valid) {
      this.store.dispatch(addNewPet({ data: pet }));
      this.router.navigate(['/profile']);
    } else {
      Object.keys(this.addPetForm.controls).forEach((control) =>
        this.updErrorMsg(control)
      );
    }
  }
}
