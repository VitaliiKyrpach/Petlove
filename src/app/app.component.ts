import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { Store } from '@ngrx/store';
import { getUser } from './store/actions-auth';
import { selectError, selectUser } from './store/selectors';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconSpriteModule, HeaderComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Petlove';

  constructor(private store: Store, private toastr: ToastrService) {
    }

  ngOnInit(): void {
    this.store.select(selectError).subscribe(error => {
      console.log(error)
      if(error !== ''){
        this.toastr.error(error);
      }
    })
    const token = localStorage.getItem('token');
    console.log(token)
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
