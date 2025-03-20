import { Component, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  Chevrons,
  Filters,
  InputSort,
  InputType,
  Locations,
  SelectorType,
} from '../../interfaces/interfaces';
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
    CommonModule,
  ],
  templateUrl: './pet-filters.component.html',
  styleUrl: './pet-filters.component.scss',
})
export class PetFiltersComponent implements OnInit {
  petFilters = output<Filters>();
  public categories$!: Observable<string[]>;
  public gender$!: Observable<string[]>;
  public type$!: Observable<string[]>;
  public locations$!: Observable<Locations[]>;
  public category!: string;
  public gender!: string;
  public type!: string;
  selectorTypes = SelectorType;
  inputTypes = InputType;
  inputSort = InputSort;
  public query: string = '';
  public locationQuery!: string;
  public sortPopular!: 'true' | 'false' | null;
  public sortPrice!: 'true' | 'false' | null;
  public sort = {
    cheap: false,
    expensive: false,
    popular: false,
    unpopular: false,
  };
  public chevrons: Chevrons = {
    category: false,
    gender: false,
    type: false,
  };

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.categories$ = this.service.getCategory();
    this.gender$ = this.service.getGender();
    this.type$ = this.service.getSpecies();
    this.locations$ = this.service.getLocations();
  }

  public clearSort(type: InputSort): void {
    switch (type) {
      case 'price':
        this.sortPrice = null;
        break;
      case 'popularity':
        this.sortPopular = null;
        break;
    }
    this.handleSubmit();
  }

  public handleSubmit(): void {
    let filters: Filters = {};
    if (this.query && this.query.trim() !== '') {
      filters.keyword = this.query;
    }
    if (this.locationQuery && this.locationQuery.trim() !== '') {
      filters.locationId = this.locationQuery;
    }
    this.sortPrice && (filters.byPrice = this.sortPrice === 'true');
    this.sortPopular && (filters.byPopularity = this.sortPopular === 'true');
    this.category && (filters.category = this.category);
    this.gender && (filters.sex = this.gender);
    this.type && (filters.species = this.type);

    this.petFilters.emit(filters);
  }
  public handleChevron(type: SelectorType): void {
    this.chevrons[type] = !this.chevrons[type];
  }
  public clearInput(type: InputType): void {
    switch (type) {
      case 'query':
        this.query = '';
        this.handleSubmit();
        break;
      case 'location':
        this.locationQuery = '';
        this.handleSubmit();
        break;
    }
  }
}
