import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../models/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums: Album[] = [];
  errorList: string[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {this.albums = data},
        error => {console.log(error.message()); this.errorList.push(error.message);}
    )
  }


}
