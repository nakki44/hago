var fs = require("fs");
function aa(){    
fs.readdir('./data/date',function(err,filelist){
        var _date= new Date();
        const year = _date.getFullYear()-2000;
        const month = _date.getMonth() + 1;
        const day = _date.getDate();
        var dateStr=year + '.' + month + '.' + day;
    if(filelist.includes(dateStr+".txt")){    }
    else{
        filelist.push(dateStr);
        function listmaker(){
            for( i = 0 ; i<datearr.length;i++){
            const li = document.createElement("li");
            li.setAttribute('id',datearr[i]);
            const textNode = document.createTextNode(datearr[i]);
            li.appendChild(textNode);
            document.getElementById('_date').appendChild(li);
            }
            }
     }
    
    }
    
    );
}
// function listmaker(){
// for( i = 0 ; i<datearr.length;i++){
// const li = document.createElement("li");
// li.setAttribute('id',datearr[i]);
// const textNode = document.createTextNode(datearr[i]);
// li.appendChild(textNode);
// document.getElementById('_date').appendChild(li);
// }
// }


