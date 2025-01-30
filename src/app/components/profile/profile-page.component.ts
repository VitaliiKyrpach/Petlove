import { Component, inject } from '@angular/core';
import { UserNoticesComponent } from '../user-notices/user-notices.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserPetsComponent } from '../user-pets/user-pets.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [UserNoticesComponent, UserCardComponent, UserPetsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  modalService = inject(ModalService);
  public openModal() {
    this.modalService.openModal('logoutModal');
  }
}
