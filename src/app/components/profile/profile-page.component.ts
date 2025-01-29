import { Component } from '@angular/core';
import { UserNoticesComponent } from '../user-notices/user-notices.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserPetsComponent } from '../user-pets/user-pets.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [UserNoticesComponent, UserCardComponent, UserPetsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {}
