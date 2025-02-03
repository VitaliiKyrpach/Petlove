import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { logout } from '../../store/actions-auth';
import { CommonModule } from '@angular/common';
import { selectUser } from '../../store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [IconSpriteModule, CommonModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
})
export class UserNavComponent implements OnInit{
    @Input() path:string = ''
  
    public userName!: string | null;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user=> this.userName = user.name)
  }
  public handleLogout(): void {
    this.store.dispatch(logout({ event: 'logout' }));
  }

  public goToProfile(){
    this.router.navigate(['profile'])
  }
}
