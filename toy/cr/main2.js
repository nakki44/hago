const fs=require('fs');
const http = require('http');


function frame(list,body){
  return`
  <!doctype html>
  <html>
  <head>
  <meta charset="utf-8">
    <title>블로그만들기</title>
    <link rel="stylesheet" href="style.css">
    <script src="list.js"></script>
  </head>
  <body>
  <h1>매일매일</h1>
      <div id="grid">
        <div id="list">
        </div>
        <ul>
        </ul>
        <div id="article">
        <form action="javascript:search()" method="post">
        <input type="text" id="textInput" placeholder="Input here...">
        <input type="submit" value="CLICK ME">
      </form>

    </div>
  </body>
  </html>
  `;
}
{/* <h1>블로그만들기</h1>
   ${list}
   <a href="/create">create</a>
   ${body} */}

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
    
    var b=frame(method,url);
    response.end(b);
  });
}).listen(3000);