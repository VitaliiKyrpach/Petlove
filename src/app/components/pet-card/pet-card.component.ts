import { Component, inject, Input } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { DatePipe } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [IconSpriteModule, DatePipe],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss',
})
export class PetCardComponent {
  @Input() pet!: Pet;
  modalService = inject(ModalService);
  public openModal() {
    this.modalService.openModal(this.pet, 'petModal');
  }
}
