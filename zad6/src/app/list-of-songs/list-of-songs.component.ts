import { AddService } from './../services/list-of-songs.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Song } from '../models/index';

import { ReflectiveInjector, Inject } from '@angular/core';

@Component({
  selector: 'app-list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {

  searchSong: FormControl;
  listOfSongs: Song[] = new Array<Song>();
  searches: Song[] = [];
  
  myForm: FormGroup;
  title: AbstractControl;
  performer: AbstractControl;
  publishing: AbstractControl;
  type: AbstractControl;
  year: AbstractControl;

  constructor(fb: FormBuilder, private addService:AddService) { 
    

    this.listOfSongs = this.addService.initialSongList();
    this.searchSong = new FormControl();

    this.myForm = fb.group({
      'title': ['', Validators.required],
      'performer': ['',Validators.required],
      'publishing': ['',Validators.required],
      'type':['',Validators.required],
      'year': ['',Validators.compose([Validators.required, 
              Validators.minLength(4),Validators.maxLength(4),
              this.onlyNumbers])]
    });
    
    this.title = this.myForm.controls['title'];
    this.performer = this.myForm.controls['performer'];
    this.publishing = this.myForm.controls['publishing'];
    this.type = this.myForm.controls['type'];
    this.year = this.myForm.controls['year'];
  }

  ngOnInit() {
  }

  userClicked(song: Song){
    console.log(`${song.title}`);
  }

  submit(value: any){
    this.addService.addNewSong(value);
  }

  onlyNumbers(control: FormControl){
    if(!control.value.match(/[1-9][1-9][1-9][1-9]/i)){
      return {
        'onlyYear':true
      };
    }
  }

  search(value: any){
     this.searches = this.addService.search(this.searchSong);
  }  

  delete(song:Song){
    this.listOfSongs = this.addService.delete(song);
  }
}
