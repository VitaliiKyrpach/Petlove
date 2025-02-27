import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServiceService } from '../services/service.service';
import { AuthService } from '../services/auth.service';
import {
  addNewPet,
  addNewPetFailure,
  addNewPetSuccess,
  addToFavFailure,
  addToFavorites,
  addToFavSuccess,
  deletePet,
  deletePetFailure,
  deletePetSuccess,
  getDataFailure,
  getFriends,
  getFriendsSuccess,
  getNews,
  getNewsSuccess,
  getPets,
  getPetsSuccess,
  removeFromFav,
  removeFromFavFailure,
  removeFromFavSuccess,
  resetError,
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
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class dataEffects {
  private actions$ = inject(Actions);
  constructor(
    private service: ServiceService,
    private authService: AuthService,
    private store: Store
  ) {}

  loadFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFriends),
      tap(() => this.store.dispatch(resetError())),
      switchMap(() =>
        this.service.getFriends().pipe(
          map((friends) => getFriendsSuccess({ friends })),
          catchError((error) => of(getDataFailure({error})))
        )
      )
    )
  );

  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNews),
      tap(() => this.store.dispatch(resetError())),
      switchMap((action) => {
        return this.service.getNews(action.page, action.search).pipe(
          map((news) => getNewsSuccess({ news })),
          catchError((error) => of(getDataFailure({error})))
        );
      })
    )
  );

  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPets),
      tap(() => this.store.dispatch(resetError())),
      switchMap((action) => {
        return this.service.getPets(action.page, action.filters).pipe(
          map((pets) => getPetsSuccess({ pets })),
          catchError((error) =>  of(getDataFailure({error})))
        );
      })
    )
  );

  Login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(() => this.store.dispatch(resetError())),
      switchMap((action) => {
        return this.authService.logIn(action.data).pipe(
          map((data) => {
            localStorage.setItem('token', data.token);

            return loginSuccess({ data });
          }),
          catchError((error) => {
            return of(loginFailure({ error }));
          })
        );
      })
    )
  );
  Register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registration),
      tap(() => this.store.dispatch(resetError())),
      switchMap((action) => {
        return this.authService.registration(action.data).pipe(
          map((data) => {
            localStorage.setItem('token', data.token);
            return registrationSuccess({ data });
          }),
          catchError((error) => {
            return of(registrationFailure({ error }));
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
            return of(getUserFailure({ error }));
          })
        );
      })
    )
  );
  Logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            localStorage.removeItem('token');
            return logoutSuccess();
          }),
          catchError((error) => {
            return of(logoutFail({ error }));
          })
        );
      })
    )
  );
  EditUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUser),
      tap(() => this.store.dispatch(resetError())),
      switchMap((action) => {
        return this.authService.editUser(action.user).pipe(
          map((data) => {
            return editUserSuccess({ data });
          }),
          catchError((error) => {
            console.log(error);
            return of(editUserFailure({ error }));
          })
        );
      })
    )
  );
  EdToFav$ = createEffect(() =>
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
                return of(addToFavFailure({ error }));
              })
            );
          }),
          catchError((error) => {
            console.log(error);
            return of(addToFavFailure({ error }));
          })
        );
      })
    )
  );
  RemoveToFav$ = createEffect(() =>
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
                return of(removeFromFavFailure({ error }));
              })
            );
          }),
          catchError((error) => {
            console.log(error);
            return of(removeFromFavFailure({ error}));
          })
        );
      })
    )
  );
  AddnewPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNewPet),
      switchMap((action) => {
        return this.service.addNewPet(action.data).pipe(
          map((data) => {
            console.log('effect', data);
            return addNewPetSuccess({ data: data.pets });
          }),
          catchError((error) => {
            console.log(error);
            return of(addNewPetFailure({ error}));
          })
        );
      })
    )
  );
  deletePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePet),
      switchMap((action) => {
        return this.service.removePet(action.id).pipe(
          map((data) => {
            return deletePetSuccess({ data: data.pets });
          }),
          catchError((error) => {
            return of(deletePetFailure({ error}));
          })
        );
      })
    )
  );
}
