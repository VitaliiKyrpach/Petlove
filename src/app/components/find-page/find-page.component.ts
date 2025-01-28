import { Component, OnInit } from '@angular/core';

import { AsyncPipe, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { getPets } from '../../store/actions';
import { selectPets } from '../../store/selectors';
import { Observable } from 'rxjs';
import { Filters, Pages, Pet, PetData } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { PaginationComponent } from '../pagination/pagination.component';
import { PetFiltersComponent } from '../pet-filters/pet-filters.component';
import { PetCardComponent } from '../pet-card/pet-card.component';

@Component({
  selector: 'app-find-page',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    IconSpriteModule,
    PaginationComponent,
    PetFiltersComponent,
    PetCardComponent,
  ],
  templateUrl: './find-page.component.html',
  styleUrl: './find-page.component.scss',
})
export class FindPageComponent implements OnInit {
  public PetData$!: Observable<PetData>;
  public pets: Pet[] = [];
  public pages: Pages = {
    page: 1,
    totalPages: 1,
  };
  public filters: Filters | null = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.PetData$ = this.store.select(selectPets);
    this.PetData$.subscribe((data) => {
      if (!data.results.length && this.filters === null) {
        console.log('dispatch works');
        this.store.dispatch(getPets({ page: 1, filters: this.filters }));
      }
      console.log(data);
      this.pets = data.results;
      this.pages.page = data.page;
      this.pages.totalPages = data.totalPages;
    });
  }

  public handlePage(newPage: number): void {
    console.log('pagination');
    this.pages.page = newPage;
    this.store.dispatch(
      getPets({ page: this.pages.page, filters: this.filters })
    );
  }

  public petFilters(filters: Filters): void {
    this.filters = filters;
    this.store.dispatch(getPets({ page: 1, filters }));
  }
}
