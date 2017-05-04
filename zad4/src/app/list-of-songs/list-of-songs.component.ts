import { Component, OnInit } from '@angular/core';
import { Song } from '../models/index';

@Component({
  selector: 'app-list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {

  listOfSongs: Song[] = new Array<Song>();
  constructor() { 
    let song = new Song();
    song.title = "Human";
    song.performer = "Rag'n'Bone Man";
    song.publishing = "Sony Music Entertainment";
    song.type = "Pop & Rock";
    song.year = 2015;
    this.listOfSongs.push(song);

    let song2 = new Song();
    song2.title = "Chodź pomaluj mój świat";
    song2.performer = "Dwa plus jeden";
    song2.publishing = "Warner Music Poland";
    song2.type = "Pop & Rock";
    song2.year = 1970;
    this.listOfSongs.push(song2);
  }

  ngOnInit() {
  }

  userClicked(song: Song){
    console.log(`From parent ${song.title}`);
  }
}
