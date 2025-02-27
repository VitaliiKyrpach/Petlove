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
import {
  addNewPetFailure,
  addNewPetSuccess,
  addToFavFailure,
  addToFavSuccess,
  deletePetFailure,
  deletePetSuccess,
  getDataFailure,
  removeFromFavFailure,
  removeFromFavSuccess,
  resetError,
} from './actions';

export const initialAuthState: InitAuthState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    phone: null,
    pets: [],
    noticesViewed: [],
    noticesFavorites: [],
  },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  error: '',
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
      error: '',
    };
  }),
  on(loginFailure, (state, { error }) => {
    return {
      ...initialAuthState,
      error: error.error.message,
    };
  }),
  on(registrationFailure, (state, { error }) => {
    return {
      ...initialAuthState,
      error: error.error.message,
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
      error: '',
    };
  }),
  on(getUser, (state) => {
    return {
      ...state,
      isRefresh: true,
    };
  }),
  on(getUserSuccess, (state, { data }) => {
    console.log(data);
    return {
      ...state,
      user: {
        ...state.user,
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        phone: data.phone,
        pets: data.pets,
        noticesViewed: data.noticesViewed,
        noticesFavorites: data.noticesFavorites,
      },
      token: data.token,
      isLoggedIn: true,
      isRefresh: false,
      error: '',
    };
  }),
  on(getUserFailure, (state, { error }) => {
    return {
      ...initialAuthState,
      error: error.error.message,
    };
  }),
  on(editUserSuccess, (state, { data }) => {
    return {
      ...state,
      user: data,
      error: '',
    };
  }),
  on(editUserFailure, (state, { error }) => {
    return {
      ...state,
      error: error.error.message,
    };
  }),
  on(logoutSuccess, (state) => {
    return initialAuthState;
  }),
  on(logoutFail, (state, { error }) => {
    return {
      ...state,
      error: error.error.message,
    };
  }),
  on(addToFavSuccess, (state, { data }) => {
    return {
      ...state,
      user: {
        ...state.user,
        noticesFavorites: [...state.user.noticesFavorites, data],
      },
      error: ''
    };
  }),
  on(addToFavFailure, (state, { error }) => {
    return {
      ...state,
      error: error.error.message,
    };
  }),
  on(removeFromFavSuccess, (state, { data }) => {
    const newFav = state.user.noticesFavorites.filter(
      (card) => card._id !== data._id
    );
    return {
      ...state,
      user: {
        ...state.user,
        noticesFavorites: newFav,
      },
      error: ''
    };
  }),
  on(removeFromFavFailure, (state, { error }) => {
    return {
      ...state,
      error: error.error.message,
    };
  }),
  on(addNewPetSuccess, (state, { data }) => {
    return {
      ...state,
      user: {
        ...state.user,
        pets: data,
      },
      error: ''
    };
  }),
  on(addNewPetFailure, (state, { error }) => {
    return {
      ...state,
      error: error.error.message,
    };
  }),
  on(deletePetSuccess, (state, { data }) => {
    return {
      ...state,
      user: {
        ...state.user,
        pets: data,
      },
      error: ''
    };
  }),
  on(deletePetFailure, (state, { error }) => {
    return {
      ...state,
      error: error.error.message,
    };
  }),
  on(getDataFailure, (state, {error
  })=> {
    return {
      ...state,
      error: error.error.message
    }
  }),
  on(resetError, (state)=> {
    console.log('error null')
    return {
      ...state,
      error: ''
    }
  })
);
