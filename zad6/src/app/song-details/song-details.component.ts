import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../models/index';
import { FormControl, FormGroup,AbstractControl,Validators,FormBuilder} from '@angular/forms';
import { DetailsService } from '../services/song-details.service';
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

  det: DetailsService;

  constructor() {
    const injector = ReflectiveInjector.resolveAndCreate([DetailsService]);
    this.det = injector.get(DetailsService);
  }

  ngOnInit() {
  }

  userSelected(name){
    
  this.det.details(name)

  this.clickEmitter.emit(this.name);
 }

  edit(name){
    this.name.showDetails = false;
    this.name.isEdit = true;
  
    console.log(name);
  }
}

