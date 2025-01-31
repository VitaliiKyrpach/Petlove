import { createReducer, on } from '@ngrx/store';
import {
  loginFailure,
  loginSuccess,
  logout,
  registrationFailure,
  registrationSuccess,
} from './actions-auth';

export const initialAuthState = {
  user: { name: null, email: null, avatar: null, phone: null, pets: [] },
  token: null,
  isLoggedIn: false,
  error: {
    type: '',
    message: '',
  },
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { data }) => {
    return {
      ...state,
      user: {
        ...state.user,
        name: data.name,
        email: data.email,
      },
      token: data.token,
      isLoggedIn: true,
      error: {
        type: '',
        message: '',
      },
    };
  }),
  on(loginFailure, (state, { error, event }) => {
    return {
      ...initialAuthState,
      error: {
        message: error.error.message,
        type: event,
      },
    };
  }),
  on(registrationFailure, (state, { error, event }) => {
    return {
      ...initialAuthState,
      error: {
        message: error.error.message,
        type: event,
      },
    };
  }),
  on(registrationSuccess, (state, { data }) => {
    return {
      ...state,
      user: {
        ...state.user,
        name: data.name,
        email: data.email,
      },
      token: data.token,
      isLoggedIn: true,
      error: {
        type: '',
        message: '',
      },
    };
  }),
  on(logout, (state) => {
    return initialAuthState;
  })
);
