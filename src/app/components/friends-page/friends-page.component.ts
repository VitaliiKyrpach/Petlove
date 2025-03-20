import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Friends } from '../../interfaces/interfaces';
import { AsyncPipe } from '@angular/common';
import { AddressPipe } from '../../pipes/address.pipe';
import { Store } from '@ngrx/store';
import { selectFriends } from '../../store/selectors';
import { getFriends } from '../../store/actions';

@Component({
  selector: 'app-friends-page',
  standalone: true,
  imports: [AsyncPipe, AddressPipe],
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.scss'
})
export class FriendsPageComponent implements OnInit {
  public friends$!: Observable<Friends[]>;

  constructor(private store: Store){}
  
  ngOnInit(){
   this.friends$ = this.store.select(selectFriends)
   this.friends$.pipe(first()).subscribe(data => {
    if(!data.length){
      this.store.dispatch(getFriends())
    }
   })
  }
}
