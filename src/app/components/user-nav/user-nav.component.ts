import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { CommonModule } from '@angular/common';
import { selectUser } from '../../store/selectors';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [IconSpriteModule, CommonModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
})
export class UserNavComponent implements OnInit {
  @Input() path: string = '';

  private modalService = inject(ModalService);

  public userName!: string | null;
  public avatar!: string | null;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select(selectUser)
      .subscribe((user) => {this.userName = user.name
        this.avatar = user.avatar
      });
  }
  public handleLogout(): void {
    this.modalService.openModal('logoutModal');
  }

  public goToProfile() {
    this.router.navigate(['profile']);
  }
}
