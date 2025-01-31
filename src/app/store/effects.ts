import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServiceService } from '../services/service.service';
import { AuthService } from '../services/auth.service';
import {
  getFriends,
  getFriendsSuccess,
  getNews,
  getNewsSuccess,
  getPets,
  getPetsSuccess,
} from './actions';
import {
  login,
  loginFailure,
  loginSuccess,
  registration,
  registrationFailure,
  registrationSuccess,
} from './actions-auth';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';

@Injectable()
export class dataEffects {
  private actions$ = inject(Actions);
  constructor(
    private service: ServiceService,
    private authService: AuthService
  ) {}

  loadFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFriends),
      switchMap(() =>
        this.service.getFriends().pipe(
          map((friends) => getFriendsSuccess({ friends })),
          catchError((error) => EMPTY)
        )
      )
    )
  );

  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNews),
      switchMap((action) => {
        return this.service.getNews(action.page, action.search).pipe(
          map((news) => getNewsSuccess({ news })),
          catchError((error) => EMPTY)
        );
      })
    )
  );

  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPets),
      switchMap((action) => {
        return this.service.getPets(action.page, action.filters).pipe(
          map((pets) => getPetsSuccess({ pets })),
          catchError((error) => EMPTY)
        );
      })
    )
  );

  loadLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) => {
        return this.authService.logIn(action.data).pipe(
          map((data) => loginSuccess({ data })),
          catchError((error) => {
            return of(loginFailure({ error, event: action.event }));
          })
        );
      })
    )
  );
  loadRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registration),
      switchMap((action) => {
        return this.authService.registration(action.data).pipe(
          map((data) => registrationSuccess({ data })),
          catchError((error) => {
            return of(registrationFailure({ error, event: action.event }));
          })
        );
      })
    )
  );
}
