import { createAction, props } from '@ngrx/store';
import {
  Filters,
  Friends,
  NewPet,
  NewsData,
  Pet,
  PetData,
} from '../interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';

export const getFriends = createAction('[Data] Get Friends');
export const getFriendsSuccess = createAction(
  '[Data] Get FriendsSuccess',
  props<{ friends: Friends[] }>()
);
export const getNews = createAction(
  '[Data] Get News',
  props<{ page: number; search: string }>()
);
export const getDataFailure = createAction('[Data] Get DataFail',props<{error: HttpErrorResponse}>())
export const getNewsSuccess = createAction(
  '[Data] Get NewsSuccess',
  props<{ news: NewsData }>()
);
export const getPets = createAction(
  '[Data] Get Pets',
  props<{ page: number; filters: Filters | null }>()
);
export const getPetsSuccess = createAction(
  '[Data] Get PetsSuccess',
  props<{ pets: PetData }>()
);

export const addToFavorites = createAction(
  '[Data] Add Pet To Favorites',
  props<{ id: string }>()
);
export const addToFavSuccess = createAction(
  '[Data] Add Pet To FavoritesSuccess',
  props<{ data: Pet }>()
);
export const addToFavFailure = createAction(
  '[Data] Add Pet To FavoritesFail',
  props<{ error: HttpErrorResponse; }>()
);
export const removeFromFav = createAction(
  '[Data] Remove Pet From Favorites',
  props<{ id: string }>()
);
export const removeFromFavSuccess = createAction(
  '[Data] Remove Pet From FavoritesSuccess',
  props<{ data: Pet }>()
);
export const removeFromFavFailure = createAction(
  '[Data] Remove Pet From FavoritesFail',
  props<{ error: HttpErrorResponse }>()
);
export const addNewPet = createAction(
  '[Data] Add New Pet',
  props<{ data: NewPet }>()
);
export const addNewPetSuccess = createAction(
  '[Data] Add New PetSuccess',
  props<{ data: Pet[] }>()
);
export const addNewPetFailure = createAction(
  '[Data] Add New PetFail',
  props<{ error: HttpErrorResponse }>()
);
export const deletePet = createAction(
  '[Data] Delete Pet',
  props<{ id: string }>()
);
export const deletePetSuccess = createAction(
  '[Data] Delete PetSuccess',
  props<{ data: Pet[] }>()
);
export const deletePetFailure = createAction(
  '[Data] Delete PetFail',
  props<{ error: HttpErrorResponse }>()
);
export const resetError = createAction('[Data] Reset Error');