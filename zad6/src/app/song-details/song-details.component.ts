import { DetailsService } from './../services/song-details.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../models/index';
import { FormControl, FormGroup,AbstractControl,Validators,FormBuilder} from '@angular/forms';
import { ReflectiveInjector, Inject } from '@angular/core';


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

  constructor(private detailsService:DetailsService) { }

  ngOnInit() {
  }

  userSelected(name){
    
  this.detailsService.details(name)

  this.clickEmitter.emit(this.name);
 }

  edit(name){
    this.name.showDetails = false;
    this.name.isEdit = true;
  
    console.log(name);
  }
}

