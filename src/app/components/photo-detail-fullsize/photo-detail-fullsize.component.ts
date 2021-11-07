import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../models/photo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photo-detail-fullsize',
  templateUrl: './photo-detail-fullsize.component.html',
  styleUrls: ['./photo-detail-fullsize.component.css']
})
export class PhotoDetailFullsizeComponent implements OnInit {
  id!: number;
  photo! : Photo;
  errorList: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private photosService: PhotosService) { }

  ngOnInit(): void {
    this.extractIdFromRoute();
    if (this.id)
      this.getPhotoById(this.id);
  }

  private extractIdFromRoute() : void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  getPhotoById(id: number) {
    this.photosService.getPhotoById(id).subscribe(
      data => { this.photo = data; },
      error => {console.log(error.message); this.errorList.push(error.message);}
    );
  }

  deletePhoto(title: string) {
    if(confirm("Are you sure to delete photo:\n"+`"${title}"`)) {
      console.log("Implement delete functionality here");
    }
  }
}
