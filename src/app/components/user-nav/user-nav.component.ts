import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { logout } from '../../store/actions-auth';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
})
export class UserNavComponent {
  constructor(private store: Store) {}
  public handleLogout(): void {
    this.store.dispatch(logout({ event: 'logout' }));
  }
}
