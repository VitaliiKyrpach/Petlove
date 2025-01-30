import { Component, inject } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  modalService = inject(ModalService);
  public openModal() {
    this.modalService.openModal('profile');
  }
}
