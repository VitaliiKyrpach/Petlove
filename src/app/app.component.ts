import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { Store } from '@ngrx/store';
import { getUser } from './store/actions-auth';
import { selectUser } from './store/selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconSpriteModule, HeaderComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Petlove';
  constructor(private store: Store) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.store.dispatch(getUser());
      this.store.select(selectUser).subscribe((data) => {
        console.log(data)
        const favorites = data.noticesFavorites.map((cards) => cards._id);
        console.log(favorites);
      });
    }
  }
}
