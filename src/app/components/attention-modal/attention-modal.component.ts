import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-attention-modal',
  standalone: true,
  imports: [],
  templateUrl: './attention-modal.component.html',
  styleUrl: './attention-modal.component.scss',
})
export class AttentionModalComponent {
  @Input() type!: string;
  modalService = inject(ModalService);

  constructor(private router: Router) {}

  public goToLogin(): void {
    this.router.navigate(['/login']);
    this.modalService.closeModal();
  }
  public goToReg(): void {
    this.router.navigate(['/registration']);
    this.modalService.closeModal();
  }
  public goToProfile(): void {
    this.router.navigate(['/profile']);
    this.modalService.closeModal();
  }
}
