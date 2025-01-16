import { createReducer, on } from '@ngrx/store';
import { getFriendsSuccess, getNewsSuccess, getPetsSuccess } from './actions';
import { InitState } from '../interfaces/interfaces';
export const initialState: InitState = {
    friends: [],
    news: {page: 1,
        perPage: 6,
        totalPages: 1,
        results: []},
    pets: {page: 1,
        perPage: 6,
        totalPages: 1,
        results: []}
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
    }),
    on(getPetsSuccess, (state, {pets})=> {
        return {
            ...state,
            pets
        }
    })
)
