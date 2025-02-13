import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { PetModalComponent } from '../pet-modal/pet-modal.component';
import { IconSpriteComponent, IconSpriteModule } from 'ng-svg-icon-sprite';
import { CloseModalDirective } from '../../directives/close-modal.directive';
import { CloseModalComponent } from '../close-modal/close-modal.component';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { AttentionModalComponent } from '../attention-modal/attention-modal.component';
import { CardData, User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    PetModalComponent,
    IconSpriteModule,
    CloseModalDirective,
    CloseModalComponent,
    ProfileModalComponent,
    AttentionModalComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
  export class ModalComponent implements OnInit {
    modalService = inject(ModalService);
    public isOpen: boolean = false;
    public data!:  User ;
    public card!: CardData ;
    public type!: string;

    ngOnInit(): void {
      this.modalService.modalOpen$.subscribe((open) => (this.isOpen = open));
      this.modalService.data$.subscribe((data) => {
        console.log(data)
        if (data && (data as CardData).id) {
          this.card = data as CardData;
        } else if (data && (data as User).name) {
          this.data = data as User;
        }
      });
      this.modalService.type$.subscribe((type) => (this.type = type));
      console.log(this.type);
    }

    public closeModal() {
      this.modalService.closeModal();
    }
  }
