import { Component, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {  CardData, Pet } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ServiceService } from '../../services/service.service';
import { Store } from '@ngrx/store';
import { addToFavorites, removeFromFav } from '../../store/actions';
import { selectFav } from '../../store/selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pet-modal',
  standalone: true,
  imports: [DatePipe, IconSpriteModule],
  templateUrl: './pet-modal.component.html',
  styleUrl: './pet-modal.component.scss',
})
export class PetModalComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<void> = new Subject()
  @Input() card!: CardData ;
  public isFavorite: boolean = false;
  public data!: Pet;
  private service = inject(ServiceService);
  constructor(private store: Store){}
  ngOnInit(): void {
      this.card.isFavorite$.pipe(takeUntil(this.onDestroy$)).subscribe(fav=> {
        this.isFavorite = fav.includes(this.card.id);})
      this.service.getPet(this.card.id).pipe(takeUntil(this.onDestroy$)).subscribe((data) => {
        this.data = data;
      });
  }

  public handleFav(){
    if(this.isFavorite){
      console.log('remove')
      this.store.dispatch(removeFromFav({id: this.card.id}))
    } else{
      console.log('add')
        this.store.dispatch(addToFavorites({ id: this.card.id }));
      }
  }
  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }
}
