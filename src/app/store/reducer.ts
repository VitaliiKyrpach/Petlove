import { createReducer, on } from '@ngrx/store';
import { getFriendsSuccess } from './actions';
import { InitState } from '../interfaces/interfaces';
export const initialState: InitState = {
    friends: []
}

export const dataReducer = createReducer(
    initialState,
    on(getFriendsSuccess, (state, {friends}) => {
        return {
            ...state,
            friends: friends
        }
    })
)
