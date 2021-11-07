import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../models/album";
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  id!: number;
  album!: Album;
  photos: Photo[] = [];
  errorList: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private albumsService: AlbumsService,
              private photosService : PhotosService) { }

  ngOnInit(): void {
    this.extractIdFromRoute();
    if (this.id) {
      this.getAlbumById(this.id);
      this.getPhotosByAlbum(this.id);
    }
  }

  private extractIdFromRoute() : void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  private getAlbumById(id: number): void {
    this.albumsService.getAlbumById(id)
      .subscribe(data => {this.album = data},
        error => {console.log(error.message); this.errorList.push(error.message); });
  }

  private getPhotosByAlbum(albumId: number): void {
    this.photosService.getPhotosByAlbum(albumId)
      .subscribe(data => {this.photos = data; },
        error => {console.log(error); this.errorList.push(error.message); });
  }

  deleteAlbum(title: string) {
    if(confirm("Are you sure to delete album:\n"+`"${title}"`)) {
      console.log("Implement delete functionality here");
    }
  }
}
