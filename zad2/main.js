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

        position.forEach(row => {
            table += row[0].toTableRow(row);

        });

        table +=`</table>`
        return table;
    }

    init(){
        let position = [];
        data.forEach(song => position.push(this.addPosition(song)));
        let context = document.getElementById('table');
        context.innerHTML = this.toTable(position);
    }
}
