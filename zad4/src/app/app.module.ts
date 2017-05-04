import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfSongsComponent,
    SongDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
