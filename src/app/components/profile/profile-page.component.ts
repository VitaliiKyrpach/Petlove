import { Component, inject } from '@angular/core';
import { UserNoticesComponent } from '../user-notices/user-notices.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserPetsComponent } from '../user-pets/user-pets.component';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/selectors';
import { UserData } from '../../interfaces/interfaces';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [UserNoticesComponent, UserCardComponent, UserPetsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  public user!: UserData;

  private modalService = inject(ModalService);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((data) => {
      this.user = data;
    });
  }
  public openModal(): void {
    this.modalService.openModal('logoutModal');
  }
}
