import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { Store } from '@ngrx/store';
import { getUser } from './store/actions-auth';
import { selectError, selectUser } from './store/selectors';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconSpriteModule, HeaderComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Petlove';
  private isExpired!: boolean;
  constructor(
    private store: Store,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.store.select(selectError).subscribe((toast) => {
      console.log(toast.message);
      if (toast.type === 'error' && toast.message !== '') {
        this.toastr.error(toast.message);
      } else if (toast.type === 'success' && toast.message !== '') {
        this.toastr.success(toast.message);
      }
    });
    const token = localStorage.getItem('token');
    if (token) {
      this.isExpired = this.authService.expiredToken(token);
      
      if (this.isExpired) {
        console.log('expired')
        localStorage.removeItem('token');
      } else {
        console.log('not expired')
        this.store.dispatch(getUser());
        this.store.select(selectUser).subscribe((data) => {
          const favorites = data.noticesFavorites.map((cards) => cards._id);
        });
      }
    }
  }
}
