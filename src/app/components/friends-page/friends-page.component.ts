import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { Friends } from '../../interfaces/interfaces';
import { AsyncPipe } from '@angular/common';
import { AddressPipe } from '../../pipes/address.pipe';

@Component({
  selector: 'app-friends-page',
  standalone: true,
  imports: [AsyncPipe, AddressPipe],
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.scss'
})
export class FriendsPageComponent implements OnInit {
  public friends$!: Observable<Friends[]>
  constructor(private service: ServiceService){}
  ngOnInit(){
    this.friends$ = this.service.getFriends()
    this.friends$.subscribe(data=> console.log(data))
  }
}
