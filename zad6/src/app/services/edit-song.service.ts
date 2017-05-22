import { Song } from '../models/index';

export class Edit{
    
    constructor(){

    }

    save(song:Song, value: any){
        console.log(value);
    
    song.title = value.title != "" ? value.title : song.title;
    song.performer = value.performer != "" ? value.performer : song.performer;
    song.publishing = value.publishing != "" ? value.publishing : song.publishing;
    song.type = value.type != "" ? value.type : song.type;
    song.year = value.year != "" ? value.year : song.year;
    song.showDetails = true; 
    song.isEdit = false;
    }
}