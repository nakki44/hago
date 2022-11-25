const fs=require('fs');
const http = require('http');

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
    
    
    response.end(console.log(responseBody));
  });
}).listen(3000);