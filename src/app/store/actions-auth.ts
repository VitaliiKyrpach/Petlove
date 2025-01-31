import { createAction, props } from '@ngrx/store';

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
  props<{ error: any; event: string }>()
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
  props<{ error: any; event: string }>()
);

export const logout = createAction('[Auth] Logout');
