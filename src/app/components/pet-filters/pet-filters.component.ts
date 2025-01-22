import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { InputType, Locations, SelectorType } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule,
} from '@ng-select/ng-select';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-pet-filters',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    IconSpriteModule,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    NgSelectModule,
    CapitalizePipe,
  ],
  templateUrl: './pet-filters.component.html',
  styleUrl: './pet-filters.component.scss',
})
export class PetFiltersComponent implements OnInit {
  public categories$!: Observable<string[]>;
  public gender$!: Observable<string[]>;
  public type$!: Observable<string[]>;
  public locations$!: Observable<Locations[]>
  public category!: string;
  public gender!: string;
  public type!: string;
  selectorTypes = SelectorType;
  inputTypes = InputType;
  public query: string = '';
  public locationQuery!: string;

  public chevrons = {
    category: false,
    gender: false,
    type: false
  }

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.categories$ = this.service.getCategory();
    this.gender$ = this.service.getGender();
    this.type$ = this.service.getSpecies();
    this.locations$ = this.service.getLocations()
  }

  public selectCategory(type: SelectorType) {
    console.log(type);
  }
  public handleInput(type: InputType, input?: string) {
    console.log(type, this.query, this.locationQuery)

  }
  public handleChevron(type: SelectorType){
    this.chevrons[type] = !this.chevrons[type]
  }
  
}
