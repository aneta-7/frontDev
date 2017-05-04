import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../models/index';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  @Input()
  name:SongDetails;

  @Output()
  clickEmitter: EventEmitter<Song> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userSelected(name){
    if (name.showDetails){
      name.showDetails = false
    } else {
      name.showDetails = true;
    }

  console.log(`Click: ${this.name.title}`);
  console.log(`Details: ${this.name.showDetails}`);
  this.clickEmitter.emit(this.name);
 }
}
export class SongDetails extends Song{
  showDetails: boolean;
}
