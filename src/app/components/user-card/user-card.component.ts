import { Component } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {}
