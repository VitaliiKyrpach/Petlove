import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { AuthNavComponent } from '../auth-nav/auth-nav.component';
import { UserNavComponent } from '../user-nav/user-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconSpriteModule, AuthNavComponent, UserNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isLoged = false
}
