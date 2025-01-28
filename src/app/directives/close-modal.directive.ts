import { Directive, OnDestroy } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Directive({
  selector: '[appCloseModal]',
  standalone: true,
})
export class CloseModalDirective implements OnDestroy {
  private keydownListener: (event: KeyboardEvent) => void;

  constructor(private modalService: ModalService) {
    this.keydownListener = (event: KeyboardEvent) => this.closeModal(event);
    document.addEventListener('keydown', this.keydownListener);
  }

  closeModal(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.modalService.closeModal();
    }
  }
  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.keydownListener);
  }
}
