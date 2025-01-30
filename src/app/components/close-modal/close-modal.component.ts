import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-close-modal',
  standalone: true,
  imports: [],
  templateUrl: './close-modal.component.html',
  styleUrl: './close-modal.component.scss',
})
export class CloseModalComponent {
  modalService = inject(ModalService);
  public closeModal() {
    this.modalService.closeModal();
  }
}
