import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Filters,
  Friends,
  Locations,
  NewPet,
  NewsData,
  Pet,
  PetData,
  UserData,
  UserResponse,
} from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private api = 'https://petlove.b.goit.study/api';

  constructor(private http: HttpClient) {}

  public getFriends(): Observable<Friends[]> {
    return this.http.get<Friends[]>(`${this.api}/friends/`);
  }
  public getNews(page: number, keyword: string): Observable<NewsData> {
    return this.http.get<NewsData>(`${this.api}/news`, {
      params: { page, keyword },
    });
  }
  public getPets(page: number, filters: Filters | null): Observable<PetData> {
    let params: Params = { ...filters, page };
    return this.http.get<PetData>(`${this.api}/notices`, { params });
  }
  public getPet(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.api}/notices/${id}`);
  }
  public getCategory(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/notices/categories`);
  }
  public getGender(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/notices/sex`);
  }
  public getSpecies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/notices/species`);
  }
  public getLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(`${this.api}/cities/locations`);
  }

  private cloudName = 'dzs583axq';
  private uploadPreset = 'image_preset';
  public setAvatar(file: File): Observable<{secure_url: string}> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);

    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;

    return this.http.post<{secure_url: string}>(url, formData);
  }
  
  public addToFav(id: string): Observable<string[]> {
    return this.http.post<string[]>(`${this.api}/notices/favorites/add/${id}`, id);
  }
  public removeFromFav(id: string): Observable<string[]> {
    return this.http.delete<string[]>(`${this.api}/notices/favorites/remove/${id}`);
  }
  public addNewPet(data: NewPet): Observable<UserResponse> {
    console.log('service', data);
    return this.http.post<UserResponse>(`${this.api}/users/current/pets/add`, data);
  }
  public removePet(id: string): Observable<UserResponse> {
    return this.http.delete<UserResponse>(`${this.api}/users/current/pets/remove/${id}`);
  }
}
