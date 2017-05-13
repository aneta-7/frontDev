import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../models/index';
import { FormControl, FormGroup,AbstractControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  @Input()
  name:Song;

  @Output()
  clickEmitter: EventEmitter<Song> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  userSelected(name){
    if (name.showDetails || name.isEdit){
      name.showDetails = false
    } else {
      name.showDetails = true;
    }
  console.log(`Click: ${this.name.title}`);
  console.log(`Details: ${this.name.showDetails}`);
  this.clickEmitter.emit(this.name);
 }

  edit(name){
    this.name.showDetails = false;
    this.name.isEdit = true;
  
    console.log(name);
  }
}

