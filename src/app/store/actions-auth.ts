import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/interfaces';

export const login = createAction(
  '[Auth] Login',
  props<{ data: any; event: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: any }>()
);
export const loginFailure = createAction(
  '[Auth] Login Fail',
  props<{ error: any}>()
);

export const registration = createAction(
  '[Auth] Registration',
  props<{ data: any; event: string }>()
);
export const registrationSuccess = createAction(
  '[Auth] Registration Success',
  props<{ data: any }>()
);
export const registrationFailure = createAction(
  '[Auth] Registration Fail',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout', props<{ event: string }>());
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFail = createAction(
  '[Auth] Logout Fail',
  props<{ error: any}>()
);

export const getUser = createAction('[Auth] Get User');
export const getUserSuccess = createAction(
  '[Auth] Get User Success',
  props<any>()
);
export const getUserFailure = createAction(
  '[Auth] Get User Fail',
  props<{ error: any }>()
);
export const editUser = createAction(
  '[Auth] Edit User',
  props<{ event: string; user: User }>()
);
export const editUserSuccess = createAction(
  '[Auth] Edit User Success',
  props<{ data: any }>()
);
export const editUserFailure = createAction(
  '[Auth] Edit User Fail',
  props<{ error: any }>()
);
