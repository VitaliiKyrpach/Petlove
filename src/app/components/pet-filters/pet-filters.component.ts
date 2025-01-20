import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { InputType, SelectorType } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-pet-filters',
  standalone: true,
  imports: [FormsModule, AsyncPipe, IconSpriteModule, NgSelectModule],
  templateUrl: './pet-filters.component.html',
  styleUrl: './pet-filters.component.scss'
})
export class PetFiltersComponent implements OnInit {
public categories$!: Observable<string[]>;
public gender$!: Observable<string[]>;
public type$!: Observable<string[]>
public category: string = '';
public gender: string = '';
public type: string = '';
selectorTypes = SelectorType;
inputTypes = InputType;
public query:string = '';
public location: string = ''
constructor(private service: ServiceService){}
ngOnInit(): void {
  this.categories$ = this.service.getCategory();
  this.gender$ = this.service.getGender();
  this.type$ = this.service.getSpecies()
}
public selectCategory(type: SelectorType){
  console.log(type)
}
public handleInput(type: InputType){}
}
