class Song {
    constructor(json){
        this.title = json.title;
        this.performer = json.performer;
        this.publishing = json.publishing;
        this.type = json.type;
        this.year = json.year;
    
        this.toTableRow = function(){
            return `<tr><td>
                ${this.title}        </td><td>
                ${this.performer}    </td><td>
                ${this.publishing}   </td><td>
                ${this.type}         </td><td>
                ${this.year}         </td></tr>`
        }
    }

        toTableRow(position){
            return `<td><tr>${position.title} </tr> 
                <tr>${position.performer}  </tr>
                <tr>${position.publishing} </tr>
                <tr>${position.type}       </tr>
                <tr>${position.year}       </tr></td>`;
        }

        generateTableHeader(){
            return `<tr><th>Title</th> <th>Performer</th> <th>Publishing</th> <th>Type</th> <th>Year</th></tr>`;
        }  

        addPosition(json) {
            let position = [];
            position.push(new Song(json));
            return position;
        }
        
        toTable(position){ 
        let row;
        let table = `<table border=1 frame=hsides rules=columns>`;
        table  += this.generateTableHeader();
// position.forEach(row => {
//             row = `<td><tr>${row[0].title} </tr> 
//                 <tr>${row[0].performer}  </tr>
//                 <tr>${row[0]n.type}       </tr>
//                 <tr>${position.year}       </tr></td>`;
//            // table += this.toTableRow(position[i]);
//            table += row;
//         })
        position.forEach(row => {
            table += row[0].toTableRow(row);

        });
        // for (let i = 0; i<position.length; i++){
        //     let pos = position[i];
        //     table += pos[0].toTableRow(pos);
         
        // }
        table +=`</table>`
        return table;
        }

        init(){
            let position = [];
            data.forEach(song => position.push(this.addPosition(song)));
            // for(let i = 0; i<data.length; i++){
            //     //listOfSongs.addPosition(data[i]);
            //     position.push(this.addPosition(data[i]));
            // }
            let context = document.getElementById('table');
            context.innerHTML = this.toTable(position);
        }

}
