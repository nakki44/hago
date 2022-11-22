var fs = require("fs");

    fs.readFile('./data/datelist.txt', 'utf8', function(err, data){
    const datearr=data.split(" ");
    
    var _date= new Date();
        const year = _date.getFullYear()-2000;
        const month = _date.getMonth() + 1;
        const day = _date.getDate();
        var dateStr=year + '.' + month + '.' + day;
    if(datearr.includes(dateStr)){
    }
     else{
        datearr.push(dateStr);
     }
    console.log(datearr);
    const datelist=datearr.join(' ');
    fs.writeFileSync("./data/datelist.txt",datelist);
    });


