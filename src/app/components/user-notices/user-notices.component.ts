import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-notices.component.html',
  styleUrl: './user-notices.component.scss',
})
export class UserNoticesComponent {
  public tab: string = 'favorite';
  public changeTab(tab: string) {
    this.tab = tab;
  }
}
