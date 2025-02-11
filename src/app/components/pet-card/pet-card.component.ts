import { Component, inject, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { CommonModule, DatePipe } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../store/selectors';
import { addToFavorites } from '../../store/actions';
import { BehaviorSubject, Observable } from 'rxjs';

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
  @Input() favorites$!: Observable<any>;
  @Input() isLoggedIn: boolean = false;
  public isFavorite: boolean = false;
  private modalService = inject(ModalService);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.favorites$.subscribe((data) => {
      data.map((id: string) => {
        this.pet._id === id && (this.isFavorite = true);
      });
    });

    console.log(this.isFavorite);
    // this.store
    //   .select(selectIsLoggedIn)
    //   .subscribe((data) => (this.isLoggedIn = data));
  }
  public openModal(): void {
    if (this.isLoggedIn) {
      this.modalService.openModal('petModal', this.pet._id);
    } else {
      this.modalService.openModal('attention');
    }
  }
  public addToFav(id: string): void {
    if (this.isLoggedIn) {
      console.log('add to fav', id);
      this.store.dispatch(addToFavorites({ id }));
    } else {
      this.modalService.openModal('attention');
    }
  }
}
