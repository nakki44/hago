const fs=require('fs');
const http = require('http');

http.createServer(function(req, res) {
  // 서버생성시 같은 디렉토리에 있는 .html 파일을 읽어옴
  fs.readFile('index.html', function(err, data) {
      if(err) {
          // 만약 file read 에 실패했을 경우
          console.log('file read error');
      }
      else {
          // file read 에 성공하면 data 에 .html 파일의 내용이 전달됨
          res.writeHead(200, { 'Content-Type' : 'text/html'});
          res.end(data);
      }
  });
}).listen(3000, function() {
  console.log('server running at http://localhost:3000');
});