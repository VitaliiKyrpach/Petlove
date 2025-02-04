import { Component, inject, OnInit } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/selectors';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  public user!: User;
  private modalService = inject(ModalService);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.select(selectUser).subscribe((data) => (this.user = data));
  }
  public openModal() {
    this.modalService.openModal('profile');
  }
}
