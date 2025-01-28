import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { PetModalComponent } from '../pet-modal/pet-modal.component';
import { IconSpriteComponent, IconSpriteModule } from 'ng-svg-icon-sprite';
import { CloseModalDirective } from '../../directives/close-modal.directive';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [PetModalComponent, IconSpriteModule, CloseModalDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  modalService = inject(ModalService);
  public isOpen: boolean = false;
  public data!: any;
  public type!: string;

  ngOnInit(): void {
    this.modalService.modalOpen$.subscribe((open) => (this.isOpen = open));
    this.modalService.data$.subscribe((data) => (this.data = data));
    this.modalService.type$.subscribe((type) => (this.type = type));
  }

  public closeModal() {
    this.modalService.closeModal();
  }
}
