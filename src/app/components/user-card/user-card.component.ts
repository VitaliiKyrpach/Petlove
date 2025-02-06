import { Component, inject, Input, OnInit } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/selectors';
import { User, UserData } from '../../interfaces/interfaces';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent  {
  @Input() user!: UserData;
  private modalService = inject(ModalService);
  constructor(private store: Store) {}
  // ngOnInit(): void {
  //   this.store.select(selectUser).subscribe((data) => {
  //     console.log(data)
  //     this.user = data});
  // }
  public openModal() {
    this.modalService.openModal('profile', this.user);
    console.log(this.user)
  }
}
