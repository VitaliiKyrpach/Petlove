import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { logout } from '../../store/actions-auth';

@Component({
  selector: 'app-close-modal',
  standalone: true,
  imports: [],
  templateUrl: './close-modal.component.html',
  styleUrl: './close-modal.component.scss',
})
export class CloseModalComponent {
  modalService = inject(ModalService);
  constructor(private store: Store) {}
  public closeModal(action: string) {
    switch (action) {
      case 'no':
        this.modalService.closeModal();
        break;
      case 'yes':
        this.store.dispatch(logout());
        this.modalService.closeModal();
    }
  }
}
