import { Component } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-user-pets',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-pets.component.html',
  styleUrl: './user-pets.component.scss',
})
export class UserPetsComponent {}
