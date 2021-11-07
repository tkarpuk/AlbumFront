import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { AlbumsComponent } from './components/albums/albums.component';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AlbumsService} from "./services/albums.service";
import {HttpClientModule} from "@angular/common/http";
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PhotoDetailFullsizeComponent } from './components/photo-detail-fullsize/photo-detail-fullsize.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { PhotoEditComponent } from './components/photo-edit/photo-edit.component';
import {FormsModule} from "@angular/forms";
import {PhotosService} from "./services/photos.service";

const appRoutes: Routes =[
  { path: '', component: AlbumsComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'albums/:id', component: AlbumDetailComponent},
  { path: 'album-edit/:id', component: AlbumEditComponent},
  { path: 'album-edit', component: AlbumEditComponent},
  { path: 'photos/:id', component: PhotoDetailFullsizeComponent},
  { path: 'photo-edit/:id', component: PhotoEditComponent},
  { path: 'photo-edit', component: PhotoEditComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumsComponent,
    NotFoundComponent,
    AlbumDetailComponent,
    PhotoDetailComponent,
    ErrorMessageComponent,
    PhotoDetailFullsizeComponent,
    AlbumEditComponent,
    PhotoEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlbumsService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
