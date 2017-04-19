var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        console.log(x);
        toTable(x[1],x[2],x[3]);
    })
    .subscribe(function(x) {
      //  return toTable(x[1],x[2],x[3])
        $('#results').html(toTable(x[1],x[2],x[3]))
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}

function toTable(name, description, webside){
    let table = `<table border=1 frame=hsides rules=columns>`;
     if(name != undefined){
        table += `<tr><th>Result</th> <th>Description</th> <th>WWW</th>`;
    
        for (let i=0; i< name.length-1;i++){
            table += row(name[i],description[i],webside[i]);
        }
        
        table +=`</table>`
     }
    return table;
}

function row(n, d, w){
    return `<tr><td>${n}    </td> 
            <td>${d}        </td>
            <td><a href="${w}">${w}        </a></td></tr>`;
}