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
import { addNewPetFailure, addNewPetSuccess, addToFavFailure, addToFavSuccess, removeFromFavFailure, removeFromFavSuccess } from './actions';

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
  on(editUserSuccess, (state, { data }) => {
    return {
      ...state,
      user: data,
      error: {
        type: '',
        message: '',
      },
    };
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
  }),
  on(addToFavSuccess, (state, { data }) => {
    console.log(data);
    return {
      ...state,
      user: {
        ...state.user,
        noticesFavorites: [
          ...state.user.noticesFavorites,
          data,
        ],
      },
    };
  }), on(addToFavFailure, (state, {error, event})=> {
    return {
      ...state,
      error:{
        message: error.error.message,
        type: event,
      }
    }
  }),
  on(removeFromFavSuccess, (state, {data})=>{
    const newFav = state.user.noticesFavorites.filter(card=> card._id !== data._id)
    return {
      ...state,
      user: {
        ...state.user,
        noticesFavorites: newFav
        
      }
    }
  }),
  on(removeFromFavFailure, (state, {error, event})=> {
    return {
      ...state,
      error:{
        message: error.error.message,
        type: event,
      }
    }
  }),
  on(addNewPetSuccess, (state, {data})=>{
    console.log('reducer', data)
    return {
      ...state,
      user:{
        ...state.user,
        pets: data
      }
    }
  }),
  on(addNewPetFailure, (state, {error, event})=>{
    return {
      ...state,
      error:{
        message: error.error.message,
        type: event
      }
    }
  })
);
