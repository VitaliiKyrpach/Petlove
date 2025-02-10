import { Component, inject, Input, OnInit } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/selectors';
import { User, UserData } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { editUser } from '../../store/actions-auth';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent  {
  @Input() user!: UserData;
  private AvatarUrl!: string;
  private modalService = inject(ModalService);
  constructor(private store: Store, private service: ServiceService) {}
 
  public openModal() {
    this.modalService.openModal('profile', this.user);
    console.log(this.user)
  }
  public setAvatar(data: any){
    console.log('send', data.target.files[0])
    this.service.setAvatar(data.target.files[0]).subscribe(res=> {
      this.AvatarUrl = res.secure_url;
      const user = {name: this.user.name,
        email: this.user.email, phone: this.user.phone, avatar: res.secure_url}
        this.store.dispatch(editUser({event: 'editUser',user}))
      })
  }

}
