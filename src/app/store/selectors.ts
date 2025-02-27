import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InitAuthState, InitState } from '../interfaces/interfaces';

export const selectFeatureData = createFeatureSelector<InitState>('data');
export const selectFriends = createSelector(
  selectFeatureData,
  (state) => state.friends
);
export const selectNews = createSelector(
  selectFeatureData,
  (state) => state.news
);
export const selectPets = createSelector(
  selectFeatureData,
  (state) => state.pets
);

export const selectFeatureAuth = createFeatureSelector<InitAuthState>('auth');
export const selectUser = createSelector(
  selectFeatureAuth,
  (state) => state.user
);
export const selectIsLoggedIn = createSelector(
  selectFeatureAuth,
  (state) => state.isLoggedIn
);
export const selectIsRefresh = createSelector(
  selectFeatureAuth,
  (state) => state.isRefresh
);
export const selectError = createSelector(
  selectFeatureAuth,
  (state) => state.error
);
export const selectFav = createSelector(
  selectFeatureAuth, (state)=> state.user.noticesFavorites
)
export const selectMyPets = createSelector(
  selectFeatureAuth, (state)=> state.user.pets
)

