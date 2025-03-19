import { createAction, props } from '@ngrx/store';
import { LoginData, LoginResponse, User, UserResponse } from '../interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';

export const login = createAction('[Auth] Login', props<{ data: LoginData }>());
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: LoginResponse }>()
);
export const loginFailure = createAction(
  '[Auth] Login Fail',
  props<{ error: HttpErrorResponse }>()
);

export const registration = createAction(
  '[Auth] Registration',
  props<{ data: LoginData }>()
);
export const registrationSuccess = createAction(
  '[Auth] Registration Success',
  props<{ data: LoginResponse }>()
);
export const registrationFailure = createAction(
  '[Auth] Registration Fail',
  props<{ error: HttpErrorResponse }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFail = createAction(
  '[Auth] Logout Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getUser = createAction('[Auth] Get User');
export const getUserSuccess = createAction(
  '[Auth] Get User Success',
  props<{data: UserResponse}>()
);
export const getUserFailure = createAction(
  '[Auth] Get User Fail',
  props<{ error: HttpErrorResponse }>()
);
export const editUser = createAction(
  '[Auth] Edit User',
  props<{ event: string; user: User }>()
);
export const editUserSuccess = createAction(
  '[Auth] Edit User Success',
  props<{ data: UserResponse }>()
);
export const editUserFailure = createAction(
  '[Auth] Edit User Fail',
  props<{ error: HttpErrorResponse }>()
);
