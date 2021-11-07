import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../models/photo";
import { Location } from '@angular/common';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  id!: number;
  photo: Photo = {
    id: 0,
    albumId: 0,
    thumbnailUrl: '',
    title: '',
    url: ''
  };
  errorList: string[] = [];
  customTitle: string = "";

  constructor(private activatedRoute: ActivatedRoute,
              private photosService: PhotosService,
              private location: Location) { }

  ngOnInit(): void {
    this.extractIdFromRoute();
    if (this.id)
      this.getPhotoById(this.id);
  }

  private extractIdFromRoute() : void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  private setCustomTitle() {
    this.customTitle = (this.id) ? "Edit photo description" : "Add new photo in album";
  }

  getPhotoById(id: number) {
    this.photosService.getPhotoById(id).subscribe(
      data => { this.photo = data; },
      error => {console.log(error.message); this.errorList.push(error.message);}
    );
  }

  savePhoto() {
    alert(this.photo.title);
  }

  cancelClicked() {
    this.location.back();
  }
}
