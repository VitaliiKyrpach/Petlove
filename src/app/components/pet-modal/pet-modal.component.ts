import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CardData, Pet } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ServiceService } from '../../services/service.service';
import { Store } from '@ngrx/store';
import { addToFavorites, removeFromFav } from '../../store/actions';
import { Subject, takeUntil } from 'rxjs';
import { RatingPipe } from '../../pipes/rating.pipe';

@Component({
  selector: 'app-pet-modal',
  standalone: true,
  imports: [DatePipe, IconSpriteModule, RatingPipe],
  templateUrl: './pet-modal.component.html',
  styleUrl: './pet-modal.component.scss',
})
export class PetModalComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<void> = new Subject();
  @Input() card!: CardData;
  public stars = [1, 2, 3, 4, 5];
  public isFavorite: boolean = false;
  public data!: Pet;
  public activeStars!: number;
  private service = inject(ServiceService);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.card.isFavorite$.pipe(takeUntil(this.onDestroy$)).subscribe((fav) => {
      this.isFavorite = fav.includes(this.card.id);
    });
    this.service
      .getPet(this.card.id)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        this.data = data;
        this.activeStars = this.countStars(this.data.popularity);
      });
  }

  public handleFav(): void {
    if (this.isFavorite) {
      this.store.dispatch(removeFromFav({ id: this.card.id }));
    } else {
      this.store.dispatch(addToFavorites({ id: this.card.id }));
    }
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  private countStars(value: number): number {
    let newValue = Math.floor(value / 250);
    if (newValue < 1) {
      return 1;
    } else if (newValue > 10) {
      return 10;
    } else {
      return newValue / 2;
    }
  }
}
