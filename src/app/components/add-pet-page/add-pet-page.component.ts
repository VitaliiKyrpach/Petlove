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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { AddPet } from '../../interfaces/interfaces';

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
    ReactiveFormsModule
  ],
  templateUrl: './add-pet-page.component.html',
  styleUrl: './add-pet-page.component.scss',
})
export class AddPetPageComponent implements OnInit {
  public species$!: Observable<string[]>;
  public filename: string = '';
  private avatarUrl: string = '';
  public avatarPhoto!: string;
  public date = new Date()
  public chevron: boolean = false;
  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.species$ = this.service.getSpecies();
  }

  public addPetForm: FormGroup<AddPet> = new FormGroup({
    name: new FormControl<string>(''),
  title: new FormControl<string>(''),
  imgURL: new FormControl<string>(''),
  species: new FormControl<string | null>(null),
  birthday: new FormControl<string | null>(null),
  sex: new FormControl<string>('')
  })

  public handleChevron() {
    this.chevron = !this.chevron;
  }
  public handlepick() {}
  public showSex() {
    console.log(this.sex);
  }

  get name(): FormControl{
    return this.addPetForm.get('name') as FormControl
  }
  get title():FormControl{
    return this.addPetForm.get('title') as FormControl
  }
  get imgURL():FormControl{
    return this.addPetForm.get('imgURL') as FormControl
  }
  get species(): FormControl{
    return this.addPetForm.get('species') as FormControl
  }
  get birthday(): FormControl{
    return this.addPetForm.get('birthday') as FormControl
  }
  get sex():FormControl{
    return this.addPetForm.get('sex') as FormControl
  }

  public onFileChange(event: any) {
    const file = event.target.files[0];
    this.filename = file.name;
    console.log(file);
    if (file) {
      this.service.setAvatar(file).subscribe(res=> this.avatarUrl = res.secure_url)
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPhoto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    // this.updErrorMsg('avatar')
  }

  public onSubmit(){

   
      const data = new Date(this.birthday.value).toISOString().split('T')[0]
      const pet = {
        name: this.name.value,
        title: this.title.value,
        imgURL: this.avatarUrl,
        species: this.species.value,
        birthday: data,
        sex: this.sex.value
      }
      console.log(pet)
    }
}
