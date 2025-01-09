import { createReducer, on } from '@ngrx/store';
import { getFriendsSuccess, getNewsSuccess } from './actions';
import { InitState } from '../interfaces/interfaces';
export const initialState: InitState = {
    friends: [],
    news: []
}

export const dataReducer = createReducer(
    initialState,
    on(getFriendsSuccess, (state, {friends}) => {
        return {
            ...state,
            friends
        }
    }),
    on(getNewsSuccess, (state, {news})=>{
        return {
            ...state,
            news
        }
    })
)
