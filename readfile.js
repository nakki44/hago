var fs = require('fs');
fs.readFile('./ex/sample.txt', 'utf8', function(err, data){
  console.log(data);
});