import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthNavComponent } from '../auth-nav/auth-nav.component';
import { UserNavComponent } from '../user-nav/user-nav.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AuthNavComponent,
    UserNavComponent,
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  @Input() path: string = '';
  @Input() isLogged: boolean = false;
  @Input() isOpen: boolean = false;
  close = output<boolean>();
  public closeMenu(): void {
    this.isOpen = false;
    this.close.emit(false);
  }
}
