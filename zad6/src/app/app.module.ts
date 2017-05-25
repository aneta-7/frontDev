import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { Add } from './services/list-of-songs.service';
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
  providers: [
    {provide: 'ADD',
     deps: [Add],
     useFactory(add:Add){
       let p : Song = new Song();
       let list : Array<Song> = new Array<Song>();

       p.title = `title`;
       p.performer = `performer`;
       p.publishing = 'publish';
       p.type = 'typ';
       p.year = 1234;

      return add.addNewSong(p,list);
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
