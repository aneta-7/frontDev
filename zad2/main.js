class Song {
    constructor(json){
        this.title = json.title;
        this.performer = json.performer;
        this.publishing = json.publishing;
        this.type = json.type;
        this.year = json.year;
    }

    toTableRow(position){
        return `<tr><td>${position.title} </td> 
            <td>${position.performer}  </td>
            <td>${position.publishing} </td>
            <td>${position.type}       </td>
            <td>${position.year}       </td></tr>`;
    }

    generateTableHeader(){
        return `<tr><th>Title</th> <th>Performer</th> <th>Publishing</th> <th>Type</th> <th>Year</th></tr>`;
    }  
    
    toTable(position){ 
        let table = `<table border=1 frame=hsides rules=columns>`;
        table  += this.generateTableHeader();

        position.forEach(row => {
            table += this.toTableRow(row);
        });

        table +=`</table>`
        return table;
    }

    init(){
        let position = [];
        data.forEach(song => position.push(song));
        let context = document.getElementById('table');
        context.innerHTML = this.toTable(position);
    }
}
