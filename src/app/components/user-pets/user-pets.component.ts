import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconSpriteComponent, IconSpriteModule } from 'ng-svg-icon-sprite';
import { Observable } from 'rxjs';
import { Pet } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { selectMyPets } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '../../pipes/date.pipe';
import { deletePet } from '../../store/actions';

@Component({
  selector: 'app-user-pets',
  standalone: true,
  imports: [IconSpriteModule, AsyncPipe, IconSpriteModule, DatePipe],
  templateUrl: './user-pets.component.html',
  styleUrl: './user-pets.component.scss',
})
export class UserPetsComponent implements OnInit {
  public myPets$!: Observable<Pet[]>;
  constructor(private router: Router, private store: Store) {
    this.myPets$ = this.store.select(selectMyPets);
  }
  ngOnInit(): void {}
  public goToAddPet() {
    this.router.navigate(['add-pet']);
  }
  public removePet(id: string): void {
    this.store.dispatch(deletePet({ id }));
  }
}
