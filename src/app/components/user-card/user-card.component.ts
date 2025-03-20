import { Component, inject, Input } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import {  UserData } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { editUser } from '../../store/actions-auth';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user!: UserData;

  private modalService = inject(ModalService);
  constructor(private store: Store, private service: ServiceService) {}

  public openModal(): void {
    this.modalService.openModal('profile', this.user);
  }

  public setAvatar(data: Event): void {
    const input = data.target as HTMLInputElement;
    const file = input?.files?.[0]; 

    if (file) {
      this.service.setAvatar(file).subscribe((res) => {
        const user = {
          name: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          avatar: res.secure_url,
        };
        this.store.dispatch(editUser({ event: 'editUser', user }));
      });
    }
  }
}
