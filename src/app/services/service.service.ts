import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friends } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api = 'https://petlove.b.goit.study/api'
  constructor(private http: HttpClient) { }
  public getFriends(): Observable<Friends[]>{
    console.log('function')
    return this.http.get<Friends[]>(`${this.api}/friends/`)
  }
}
