import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../models/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl = "https://jsonplaceholder.typicode.com/albums";
  constructor(private http : HttpClient) { }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl);
  }

  public getAlbumById(id:number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`);
  }
}
