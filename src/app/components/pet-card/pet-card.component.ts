import { Component, inject, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { CommonModule, DatePipe } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { addToFavorites, removeFromFav } from '../../store/actions';
import {  Observable, of } from 'rxjs';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [IconSpriteModule, DatePipe, CommonModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss',
})
export class PetCardComponent implements OnInit {
  @Input() pet!: Pet;
  @Input() place!: string;
  @Input() favorites$!: Observable<string[]>;
  @Input() isLoggedIn: boolean = false;
  public isFavorite: boolean = false;

  private modalService = inject(ModalService);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favorites$.subscribe((favorites) => {
      this.isFavorite = favorites.includes(this.pet._id);
       });
       console.log(this.pet.popularity)
  }

  public openModal(): void {
    const data = {
      id: this.pet._id,
      isFavorite$: this.favorites$
    }
    if (this.isLoggedIn) {
           this.modalService.openModal('petModal',  data);
    } else {
      this.modalService.openModal('attention');
    }
  }

  public addToFav(id: string): void {

    if (this.isLoggedIn) {
      if(this.isFavorite){
        this.store.dispatch(removeFromFav({id}))
      } else{
           this.store.dispatch(addToFavorites({ id }));
      }
    } else {
      this.modalService.openModal('attention');
    }
  }
}
