import { createAction, props } from '@ngrx/store';
import { Filters, Friends, NewsData, PetData } from '../interfaces/interfaces';

export const getFriends = createAction('[Data] Get Friends');
export const getFriendsSuccess = createAction(
  '[Data] Get FriendsSuccess',
  props<{ friends: Friends[] }>()
);
export const getNews = createAction(
  '[Data] Get News',
  props<{ page: number; search: string }>()
);
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
  props<{ data: any }>()
);
export const addToFavFailure = createAction(
  '[Data] Add Pet To FavoritesFail',
  props<{ error: any; event: string }>()
);
