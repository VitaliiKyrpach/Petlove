import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-user-pets',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-pets.component.html',
  styleUrl: './user-pets.component.scss',
})
export class UserPetsComponent {
  constructor(private router: Router) {}
  public goToAddPet() {
    this.router.navigate(['add-pet']);
  }
}
