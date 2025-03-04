import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/interfaces';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'https://petlove.b.goit.study/api';

  constructor(private http: HttpClient) {}
  public logIn(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/users/signin`, data);
  }
  public registration(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.api}/users/signup`, data);
  }
  public logout() {
    return this.http.post<any>(`${this.api}/users/signout`, {});
  }

  public getUser() {
    return this.http.get<any>(`${this.api}/users/current/full`);
  }

  public editUser(data: User) {
    return this.http.patch<User>(`${this.api}/users/current/edit`, data);
  }
  public expiredToken(token: string): boolean {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime ? true : false;
  }
}
