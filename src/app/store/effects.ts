import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServiceService } from '../services/service.service';
import { AuthService } from '../services/auth.service';
import {
  addToFavFailure,
  addToFavorites,
  addToFavSuccess,
  getFriends,
  getFriendsSuccess,
  getNews,
  getNewsSuccess,
  getPets,
  getPetsSuccess,
  removeFromFav,
  removeFromFavFailure,
  removeFromFavSuccess,
} from './actions';
import {
  editUser,
  editUserFailure,
  editUserSuccess,
  getUser,
  getUserFailure,
  getUserSuccess,
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFail,
  logoutSuccess,
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
          map((data) => {
            localStorage.setItem('token', data.token);

            return loginSuccess({ data });
          }),
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
          map((data) => {
            localStorage.setItem('token', data.token);
            return registrationSuccess({ data });
          }),
          catchError((error) => {
            return of(registrationFailure({ error, event: action.event }));
          })
        );
      })
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess, getUser),
      switchMap(() => {
        return this.authService.getUser().pipe(
          map((data) => {
            return getUserSuccess({ data });
          }),
          catchError((error) => {
            return of(getUserFailure({ error, event: 'getUser' }));
          })
        );
      })
    )
  );
  loadLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap((action) => {
        return this.authService.logout().pipe(
          map(() => {
            localStorage.removeItem('token');
            return logoutSuccess();
          }),
          catchError((error) => {
            return of(logoutFail({ error, event: action.event }));
          })
        );
      })
    )
  );
  loadEditUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUser),
      switchMap((action) => {
        return this.authService.editUser(action.user).pipe(
          map((data) => {
            return editUserSuccess({ data });
          }),
          catchError((error) => {
            console.log(error);
            return of(editUserFailure({ error, event: action.event }));
          })
        );
      })
    )
  );
  loadEdToFav$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavorites),
      switchMap((action) => {
        return this.service.addToFav(action.id).pipe(
          switchMap(() => {
            return this.service.getPet(action.id).pipe(
              map((data) => {
                return addToFavSuccess({ data });
              }),
              catchError((error) => {
                console.log(error);
                return of(addToFavFailure({ error, event: 'getPet' }));
              })
            );
          }),
          catchError((error) => {
            console.log(error);
            return of(addToFavFailure({ error, event: 'addToFav' }));
          })
        );
      })
    )
  );
  loadRemoveToFav$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromFav),
      switchMap((action) => {
        return this.service.removeFromFav(action.id).pipe(
          switchMap(() => {
            return this.service.getPet(action.id).pipe(
              map((data) => {
                return removeFromFavSuccess({ data });
              }),
              catchError((error) => {
                console.log(error);
                return of(removeFromFavFailure({ error, event: 'getPet' }));
              })
            );
          }),
          catchError((error) => {
            console.log(error);
            return of(removeFromFavFailure({ error, event: 'addToFav' }));
          })
        );
      })
    )
  );
}
