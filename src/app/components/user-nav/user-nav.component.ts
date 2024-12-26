import { Component } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss'
})
export class UserNavComponent {

}
