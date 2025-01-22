import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friends, Locations, NewsData, PetData } from '../interfaces/interfaces';
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
  public getNews(page: number, keyword: string): Observable<NewsData>{
    return this.http.get<NewsData>(`${this.api}/news`, {params:{page, keyword}})
  }
  public getPets(page:number):Observable<PetData>{
    return this.http.get<PetData>(`${this.api}/notices`, {params:{page}})
  }
  public getCategory():Observable<string[]>{
    return this.http.get<string[]>(`${this.api}/notices/categories`)
  }
  public getGender():Observable<string[]>{
    return this.http.get<string[]>(`${this.api}/notices/sex`)
  }
  public getSpecies():Observable<string[]>{
    return this.http.get<string[]>(`${this.api}/notices/species`)
  }
  public getLocations(): Observable<Locations[]>{
    return this.http.get<Locations[]>(`${this.api}/cities/locations`)
  }
}

