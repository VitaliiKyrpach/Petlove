import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
