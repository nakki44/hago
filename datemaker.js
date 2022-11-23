var fs = require("fs");
function datemaker(){
    fs.readdir('./data/date',function(err,filelist){
    const datearr=filelist;
    
    var _date= new Date();
        const year = _date.getFullYear()-2000;
        const month = _date.getMonth() + 1;
        const day = _date.getDate();
        var dateStr=year + '.' + month + '.' + day;
    if(datearr.includes(dateStr+".txt")){
    }
     else{
        fs.writeFileSync("./data/date/"+dateStr+".txt","");
     }
    }
    );
}
datemaker();


