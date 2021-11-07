import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../models/album";
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})

export class AlbumEditComponent implements OnInit {
  id: number | undefined;
  album: Album = {
    id: 0,
    title: "",
    userId: 0
  };
  errorList: string[] = [];
  customTitle: string = "";

  constructor(private activatedRoute: ActivatedRoute,
              private albumsService: AlbumsService,
              private location: Location) { }

  ngOnInit(): void {
    this.extractIdFromRoute();

    if (this.id) {
      this.getAlbumById(this.id);
    }
    this.setCustomTitle();
  }

  private extractIdFromRoute() : void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  private setCustomTitle() {
    this.customTitle = (this.id) ? "Edit album" : "Create new album";
  }

  private getAlbumById(id: number): void {
    this.albumsService.getAlbumById(id)
      .subscribe(data => {this.album = data},
        error => {console.log(error.message); this.errorList.push(error.message); });
  }

  saveAlbum() {
    alert(this.album.title);
  }

  cancelClicked() {
    this.location.back();
  }
}
