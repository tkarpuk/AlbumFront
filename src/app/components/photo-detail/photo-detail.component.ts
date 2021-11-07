import {Component, Input, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  @Input() id!: number;

  photo! : Photo;
  errorList: string[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    if (this.id)
      this.getPhotoById(this.id);
  }

  getPhotoById(id: number) {
    this.photosService.getPhotoById(id).subscribe(
      data => { this.photo = data; },
      error => {console.log(error.message); this.errorList.push(error.message);}
    );
  }
}
