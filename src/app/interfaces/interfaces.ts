import { FormControl } from '@angular/forms';

export interface Friends {
  address: string;
  addressUrl: string;
  email: string;
  imageUrl: string;
  phone: string;
  title: string;
  url: string;
  workdays: workday[] | null;
}
interface workday {
  isOpen: boolean;
  _id: string;
  from?: string;
  to?: string;
}
export interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
export interface LoginErrors {
  email: string;
  password: string;
}
export interface RegForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirm: FormControl<string | null>;
}
export interface RegErrors {
  name: string;
  email: string;
  password: string;
  confirm: string;
}
export interface IsShown {
  pass: boolean;
  confirm: boolean;
}
export interface NewsData {
  page: number;
  perPage: number;
  totalPages: number;
  results: News[];
}
export interface News {
  date: string;
  id: string;
  imgUrl: string;
  text: string;
  title: string;
  url: string;
  _id: string;
}

export interface InitState {
  friends: Friends[];
  news: NewsData;
  pets: PetData;
}

export interface InitAuthState {
  user: {
    name: string | null;
    email: string | null;
    avatar: string | null;
    phone: string | null;
    pets: Pet[];
  };
  token: string | null;
  isLoggedIn: boolean;
  isRefresh: boolean;
  error: AuthError;
}
export interface AuthError {
  type: string;
  message: string;
}
export interface Pages {
  page: number;
  totalPages: number;
}
export interface PetData {
  page: number;
  perPage: number;
  results: Pet[];
  totalPages: number;
}
export interface Pet {
  birthday: string;
  category: string;
  comment: string;
  createdAt: string;
  imgURL: string;
  location: string;
  name: string;
  popularity: number;
  price: number;
  sex: string;
  species: string;
  title: string;
  updatedAt: string;
  user: string;
  _id: string;
}

export enum SelectorType {
  Category = 'category',
  Gender = 'gender',
  Type = 'type',
}
export enum InputType {
  Query = 'query',
  Location = 'location',
}
export enum InputSort {
  // Cheap = 'cheap',
  // Expensive = 'expensive',
  // Popular = 'popular',
  // Unpopular = 'unpopular',
  Price = 'price',
  Popularity = 'popularity',
}
export interface Locations {
  _id: string;
  useCounty: string;
  stateEn: string;
  cityEn: string;
  countyEn: string;
}
export interface Filters {
  keyword?: string;
  locationId?: string;
  byPrice?: boolean;
  byPopularity?: boolean;
  category?: string;
  sex?: string;
  species?: string;
}
export interface Params extends Filters {
  page: number;
}
export interface Chevrons {
  category: boolean;
  gender: boolean;
  type: boolean;
}
