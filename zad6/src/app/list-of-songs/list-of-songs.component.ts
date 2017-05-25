import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Song } from '../models/index';
import { Add } from '../services/list-of-songs.service';
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
  adder: Add;

  myForm: FormGroup;
  title: AbstractControl;
  performer: AbstractControl;
  publishing: AbstractControl;
  type: AbstractControl;
  year: AbstractControl;

  constructor(fb: FormBuilder) { 
    const injector = ReflectiveInjector.resolveAndCreate([Add]);
    this.adder = injector.get(Add);

    this.listOfSongs = this.adder.initialSongList();
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
    let tmp = value;
    this.adder.addNewSong(tmp,this.listOfSongs);
  }

  onlyNumbers(control: FormControl){
    if(!control.value.match(/[1-9][1-9][1-9][1-9]/i)){
      return {
        'onlyYear':true
      };
    }
  }

  search(value: any){
     this.searches = this.adder.search(this.searchSong,this.listOfSongs);
  }  

  delete(song:Song){
    this.listOfSongs = this.adder.delete(this.listOfSongs,song);
  }
}
