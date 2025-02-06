import { Component, inject, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { DatePipe } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../store/selectors';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [IconSpriteModule, DatePipe],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss',
})
export class PetCardComponent implements OnInit {
  @Input() pet!: Pet;
  @Input() place!: string;
  private isLoggedIn: boolean = false;
  private modalService = inject(ModalService);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store
      .select(selectIsLoggedIn)
      .subscribe((data) => (this.isLoggedIn = data));
  }
  public openModal(): void {
    if (this.isLoggedIn) {
      this.modalService.openModal('petModal', this.pet._id);
    } else {
      this.modalService.openModal('attention');
    }
  }
  public addToFav(): void {
    if (this.isLoggedIn) {
      console.log('add to fav');
    } else {
      this.modalService.openModal('attention');
    }
  }
}
