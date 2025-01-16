import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitState } from "../interfaces/interfaces";

export const selectFeatureData = createFeatureSelector<InitState>('data')
export const selectFriends = createSelector(selectFeatureData, state=> state.friends)
export const selectNews = createSelector(selectFeatureData, state=> state.news)
export const selectPets = createSelector(selectFeatureData, state=> state.pets)