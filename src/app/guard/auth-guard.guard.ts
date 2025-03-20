import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn, selectIsRefresh } from '../store/selectors';
import { combineLatest, Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const store = inject(Store);
  const router = inject(Router);

  return new Observable<boolean>((observer) => {
    combineLatest([store.select(selectIsLoggedIn), store.select(selectIsRefresh)]).subscribe(([isLoggedIn, isRefresh]) => {
      if (isLoggedIn && !isRefresh) {
        if (state.url === '/login' || state.url === '/registration') {
          router.navigate(['/profile']);
          observer.next(false);
        } else {
          observer.next(true);
        }
      } else if(!isLoggedIn && !isRefresh){
        if (state.url === '/profile' || state.url === '/add-pet') {
          router.navigate(['/login']);
          observer.next(false);
        } else {
          observer.next(true);
        }
      }})
    })
  }
