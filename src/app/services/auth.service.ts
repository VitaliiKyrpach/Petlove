import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData, LoginResponse, LogOutResponse, TokenDecode, User, UserResponse } from '../interfaces/interfaces';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'https://petlove.b.goit.study/api';

  constructor(private http: HttpClient) {}
  public logIn(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.api}/users/signin`, data);
  }
  public registration(data: LoginData): Observable<LoginResponse> {
    console.log(data);
    return this.http.post<LoginResponse>(`${this.api}/users/signup`, data);
  }
  public logout(): Observable<LogOutResponse> {
    return this.http.post<LogOutResponse>(`${this.api}/users/signout`, {});
  }

  public getUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.api}/users/current/full`);
  }

  public editUser(data: User): Observable<UserResponse> {
    return this.http.patch<UserResponse>(`${this.api}/users/current/edit`, data);
  }
  public expiredToken(token: string): boolean {
    const {exp}: TokenDecode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return exp < currentTime ? true : false;
  }
}
