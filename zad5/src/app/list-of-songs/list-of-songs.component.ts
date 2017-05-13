import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Song } from '../models/index';


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

  constructor(fb: FormBuilder) { 
    this.addSampleSong();
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


  addSampleSong(){
    let song = new Song();
    song.title = "Human";
    song.performer = "Rag'n'Bone Man";
    song.publishing = "Sony Music Entertainment";
    song.type = "Pop & Rock";
    song.year = 2015;
    song.showDetails = false;
    this.listOfSongs.push(song);

    let song2 = new Song();
    song2.title = "Chodź pomaluj mój świat";
    song2.performer = "Dwa plus jeden";
    song2.publishing = "Warner Music Poland";
    song2.type = "Pop & Rock";
    song2.year = 1970;
    song2.showDetails = false;
    this.listOfSongs.push(song2);
  }

  ngOnInit() {
  }

  userClicked(song: Song){
    console.log(`${song.title}`);
  }

  submit(value: any){
    let tmp = value;
    this.listOfSongs.push(tmp);
  }

  onlyNumbers(control: FormControl){
    if(!control.value.match(/[1-9][1-9][1-9][1-9]/i)){
      return {
        'onlyYear':true
      };
    }
  }

  search(value: any){
      let result = this.listOfSongs
              .filter(x => x.title.match(this.searchSong.value));
      console.log(result);

      result.forEach(x => {
        this.searches.push(x);
      });
  }  
}
