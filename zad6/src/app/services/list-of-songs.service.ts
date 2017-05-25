import { Song } from '../models/index';
import { FormControl } from '@angular/forms';
import { Injectable} from '@angular/core';

@Injectable()
export class Add{

    constructor(){}

    search(value:any,list:Array<Song>):Array<Song>{
        let searchList: Song[]=[];
        let result = list
              .filter(x => x.title.match(value.value));
      console.log(result);

      result.forEach(x => {
        searchList.push(x);
      });

      return searchList;
    }

    addNewSong(song:any,list:Array<Song>):Array<Song>{
        list.push(song);
        return list;
    }

    initialSongList():Array<Song>{
        let listOfSongs: Song[] = new Array<Song>();
        let song = new Song();
        song.title = "Human";
        song.performer = "Rag'n'Bone Man";
        song.publishing = "Sony Music Entertainment";
        song.type = "Pop & Rock";
        song.year = 2015;
        song.showDetails = false;
        listOfSongs.push(song);

        let song2 = new Song();
        song2.title = "Chodź pomaluj mój świat";
        song2.performer = "Dwa plus jeden";
        song2.publishing = "Warner Music Poland";
        song2.type = "Pop & Rock";
        song2.year = 1970;
        song2.showDetails = false;
        listOfSongs.push(song2);

        return listOfSongs;
    }

    delete(list:Array<Song>,song:Song):Array<Song>{
        return list.filter(item => item != song);
    }
}