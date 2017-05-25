import { Song } from '../models/index';
import { Injectable} from '@angular/core';

@Injectable()
export class Details{
     constructor(){}

     details(song:Song){
        if (song.showDetails || song.isEdit){
             song.showDetails = false
        } else {
             song.showDetails = true;
        }
        console.log(`Click: ${song.title}`);
        console.log(`Details: ${song.showDetails}`);
     }
}