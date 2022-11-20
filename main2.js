
const fs=require('fs');
const http = require('http');

function frame(list,body){
  return`
  <!doctype html>
  <html>
  <head>
  <title>블로그만들깅</title>
  <meta charset="utf-8">
  </head>
  <body>
  <h1><a href="/">한글됨?</a></h1>
  ${list}
  <a href="/create">create</a>
  ${body}
  </body>
  </html>
  `;
}
function jsonmaker(data){
  fs.writeFileSync("test.txt",data);

}
http.createServer((request, response) => {
  const { headers, method, url } = request;

  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.writeHead(200)
    const responseBody = { headers, method, url, body };
    var a=jsonmaker(JSON.stringify(responseBody));
    var b=frame(method,url);
    response.end(b);
  });
}).listen(3000);