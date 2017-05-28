import { Song } from '../models/index';
import { FormControl } from '@angular/forms';
import { Injectable} from '@angular/core';

@Injectable()
export class AddService{

    constructor(){}

    search(value:any):Array<Song>{
        let searchList: Song[]=[];
        let result = SONGS
              .filter(x => x.title.match(value.value));
      console.log(result);

      result.forEach(x => {
        searchList.push(x);
      });

      return searchList;
    }
    addNewSong(song:any){    
         SONGS.push(song);
    }

    initialSongList():Array<Song>{
        return SONGS;
    }

    delete(song:Song):Array<Song>{
        return SONGS.filter(item => item != song);
    }
}

const SONGS: Song[]=[{
        id:0,
        title: "Human",
        performer: "Rag'n'Bone Man",
        publishing: "Sony Music Entertainment",
        type: "Pop & Rock",
        year: 2015,
        showDetails: false,
        isEdit:false
},{
        id:1,
        title: "Chodź pomaluj mój świat",
        performer: "Dwa plus jeden",
        publishing: "Warner Music Poland",
        type: "Pop & Rock",
        year: 1970,
        showDetails: false,
        isEdit:false
}]