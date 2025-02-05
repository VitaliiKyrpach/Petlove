import { createReducer, on } from '@ngrx/store';
import {
  editUserFailure,
  editUserSuccess,
  getUser,
  getUserFailure,
  getUserSuccess,
  loginFailure,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  registrationFailure,
  registrationSuccess,
} from './actions-auth';
import { InitAuthState } from '../interfaces/interfaces';

export const initialAuthState: InitAuthState = {
  user: { name: null, email: null, avatar: null, phone: null, pets: [] },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  error: {
    type: '',
    message: '',
  },
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { data }) => {
    console.log(data);
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
  on(getUser, (state) => {
    return {
      ...state,
      isRefresh: true,
    };
  }),
  on(getUserSuccess, (state, { data }) => {
    return {
      ...state,
      user: {
        ...state.user,
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        phone: data.phone,
        pets: data.pets,
      },
      token: data.token,
      isLoggedIn: true,
      isRefresh: false,
      error: {
        type: '',
        message: '',
      },
    };
  }),
  on(getUserFailure, (state, { error, event }) => {
    return {
      ...initialAuthState,
      error: {
        message: error.error.message,
        type: event,
      },
    };
  }),
  on(editUserSuccess, (state, {data})=>{
    return {
      ...state,
      user: data
    }
  }),
  on(editUserFailure, (state, { error, event }) => {
    return {
      ...state,
      error: {
        message: error.error.message,
        type: event,
      },
    };
  }), 
  on(logoutSuccess, (state) => {
    return initialAuthState;
  }),
  on(logoutFail, (state, { error, event }) => {
    return {
      ...state,
      error: {
        message: error.error.message,
        type: event,
      },
    };
  })
);
