import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../models/photo";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http : HttpClient) { }

  public getPhotosByAlbum(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}albums/${albumId}/photos`);
  }

  public getPhotoById(id:number): Observable<Photo> {
    return this.http.get<Photo>(`${this.baseUrl}photos/${id}`);
  }
}
