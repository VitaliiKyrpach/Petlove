import { createAction, props } from "@ngrx/store";
import { Friends } from "../interfaces/interfaces";

export const getFriends = createAction('[Data] Get Friends')
export const getFriendsSuccess = createAction('[Data] Get FriendsSuccess', props<{friends: Friends[]}>())