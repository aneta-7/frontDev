import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../models/index';
import { FormControl, FormGroup,AbstractControl,Validators,FormBuilder} from '@angular/forms';
import { Edit } from '../services/edit-song.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  @Input()
  nameSong:Song;

  @Output()
  clickEmitter: EventEmitter<Song> = new EventEmitter();

  mySong: FormGroup;
  title: AbstractControl;
  performer: AbstractControl;
  publishing: AbstractControl;
  type: AbstractControl;
  year: AbstractControl;

  editer: Edit = new Edit();

  constructor(fb: FormBuilder) {
     this.mySong = fb.group({
      'title': ['', Validators.required],
      'performer': ['',Validators.required],
      'publishing': ['',Validators.required],
      'type':['',Validators.required],
      'year': ['',Validators.compose([Validators.required, 
              Validators.minLength(4),Validators.maxLength(4)])]
    });

    this.title = this.mySong.controls['title'];
    this.performer = this.mySong.controls['performer'];
    this.publishing = this.mySong.controls['publishing'];
    this.type = this.mySong.controls['type'];
    this.year = this.mySong.controls['year'];
   }

  ngOnInit() {
    this.nameSong.showDetails = false;
    this.nameSong.isEdit = true;

    this.title.setValue(this.nameSong.title);
    this.performer.setValue(this.nameSong.performer);
    this.publishing.setValue(this.nameSong.publishing);
    this.type.setValue(this.nameSong.type);
    this.year.setValue(this.nameSong.year);
  }

  onlyNumbers(control: FormControl){
      if(!control.value.match(/[1-9][1-9][1-9][1-9]/i)){
        return {
          'onlyYear':true
        };
      }
    }

  edit(){
    this.clickEmitter.emit(this.nameSong);
  }

  saveChange(value: any){
    this.editer.save(this.nameSong, value);
  }

  

}
