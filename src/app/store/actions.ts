import { createAction, props } from "@ngrx/store";
import { Friends, NewsData } from "../interfaces/interfaces";

export const getFriends = createAction('[Data] Get Friends')
export const getFriendsSuccess = createAction('[Data] Get FriendsSuccess', props<{friends: Friends[]}>())
export const getNews = createAction('[Data] Get News', props<{page: number, search: string}>())
export const getNewsSuccess = createAction('[Data] Get NewsSuccess', props<{news:NewsData}>())