function Song(json){
    let self = this;
    self.title = json.title;
    self.performer = json.performer;
    self.publishing = json.publishing;
    self.type = json.type;
    self.year = json.year;

    self.toTableRow = function(){
        return `<tr><td>
            ${self.title}        </td><td>
            ${self.performer}    </td><td>
            ${self.publishing}   </td><td>
            ${self.type}         </td><td>
            ${self.year}         </td></tr>`
    }
}

function toTableRow(position){

    return `<td><tr>${position.title} </tr> 
           <tr>${position.performer}  </tr>
           <tr>${position.publishing} </tr>
           <tr>${position.type}       </tr>
           <tr>${position.year}       </tr></td>`;
}

var generateTableHeader = function(){
    return `<tr><th>Title</th> <th>Performer</th> <th>Publishing</th> <th>Type</th> <th>Year</th></tr>`;
}

function ListOfPosition(){
    let position = [];
    let self = this;
    self.addPosition = function(json) {
        position.push(new Song(json));
    }
    
    self.toTable = function(){
        let table = `<table border=1 frame=hsides rules=columns>`;
        table  += generateTableHeader();
        for (let i = 0; i<position.length; i++){
            table +=position[i].toTableRow(position);
        }
        table +=`</table>`
        return table;
    }
}
function init(){
let listOfSongs = new ListOfPosition();
    for(let i = 0; i<data.length; i++){
        listOfSongs.addPosition(data[i]);
    }
    let context = document.getElementById('table');
    context.innerHTML = listOfSongs.toTable();
}