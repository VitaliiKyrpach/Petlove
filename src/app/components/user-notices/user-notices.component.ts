import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserData } from '../../interfaces/interfaces';
import { PetCardComponent } from '../pet-card/pet-card.component';

@Component({
  selector: 'app-user-notices',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  templateUrl: './user-notices.component.html',
  styleUrl: './user-notices.component.scss',
})
export class UserNoticesComponent {
    @Input() user!: UserData;
  
  public tab: string = 'favorite';
  public changeTab(tab: string) {
    this.tab = tab;
  }
}
