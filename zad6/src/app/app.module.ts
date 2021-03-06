import { DetailsService } from './services/song-details.service';
import { EditService } from './services/edit-song.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { AddService } from './services/list-of-songs.service';
import { Song } from './models/index';


@NgModule({
  declarations: [
    AppComponent,
    ListOfSongsComponent,
    SongDetailsComponent,
    EditSongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AddService,EditService,DetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
