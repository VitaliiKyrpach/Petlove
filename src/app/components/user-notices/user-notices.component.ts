import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/interfaces';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-notices',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  templateUrl: './user-notices.component.html',
  styleUrl: './user-notices.component.scss',
})
export class UserNoticesComponent implements OnInit{
    public favorites$ = new BehaviorSubject<string[]>([]);
    @Input() user!: UserData;

  ngOnInit(): void {
    const favorites = this.user.noticesFavorites.map(card=> card._id)
    this.favorites$.next(favorites);
  }
  public tab: string = 'favorite';
  public changeTab(tab: string) {
    this.tab = tab;
  }
}
