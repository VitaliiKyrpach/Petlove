import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { AuthNavComponent } from '../auth-nav/auth-nav.component';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn, selectIsRefresh } from '../../store/selectors';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    IconSpriteModule,
    AuthNavComponent,
    UserNavComponent,
    MobileMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean = false;
  public isRefresh: boolean = false;
  public isOpen: boolean = false;
  public path: string = '';

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectIsLoggedIn).subscribe((data) => {
      this.isLogged = data;
    });
    this.store.select(selectIsRefresh).subscribe((data) => {
      this.isRefresh = data;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.length > 1) {
          this.path = event.url.replace('/', '');
        } else {
          this.path = event.url;
        }
      });
  }
  public openMenu(): void {
    this.isOpen = true;
  }
  public closeMenu(): void {
    this.isOpen = false;
  }
}
