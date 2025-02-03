import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../store/selectors';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const store = inject(Store);
  const router = inject(Router);

  return new Observable<boolean>((observer) => {
    store.select(selectIsLoggedIn).subscribe(isLoggedIn => {
      console.log(isLoggedIn);
      if (isLoggedIn) {
        if (state.url === '/login' || state.url === '/registration') {
          router.navigate(['/profile']);
          observer.next(false);  
        } else {
          observer.next(true);
        }
      } else {
        if (state.url === '/profile') {
          router.navigate(['/login']);
          observer.next(false);
        } else {
          observer.next(true); 
        }
      }
      observer.complete();
    });
  });
};

