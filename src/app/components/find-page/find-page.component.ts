import { Component, OnInit } from '@angular/core';

import { AsyncPipe, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { getPets } from '../../store/actions';
import { selectPets } from '../../store/selectors';
import { Observable } from 'rxjs';
import { Pet, PetData } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-find-page',
  standalone: true,
  imports: [AsyncPipe, DatePipe, IconSpriteModule, PaginationComponent],
  templateUrl: './find-page.component.html',
  styleUrl: './find-page.component.scss'
})
export class FindPageComponent implements OnInit{
  public PetData$!: Observable<PetData>
  public pets: Pet[] = []
  public pages = {
    page: 1,
    totalPages: 1
  }
  constructor(private store: Store){}

  ngOnInit(): void {
    this.PetData$ = this.store.select(selectPets)
    this.PetData$.subscribe(data=> {
      if(!data.results.length){
        this.store.dispatch(getPets({page: 1}))
    }
    console.log(data)
    this.pets = data.results
    this.pages.page = data.page
    this.pages.totalPages = data.totalPages
  })  
  }

  public handlePage(newPage: number){
      this.pages.page = newPage
      this.store.dispatch(getPets({ page: this.pages.page,}))
    }
}
