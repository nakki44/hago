var fs = require('fs');
fs.readFile('./data/datelist.json', 'utf8', function(err, data){
  console.log(data);
});