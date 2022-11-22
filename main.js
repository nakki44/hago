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
  <img src="https://golden-goblin.com/content-thief/wp-content/uploads/sites/5/kboard_attached/1/202202/620753a128adc8741897.png" alt="">
  <h1>매일매일</h1>
      <div id="grid">
  <button type="button" name="button" onclick="listmaker()"></button><br>
        <div id="list">
        </div>
        <ul>
          <li>1</li>
        </ul>
  
        <div id="article">
    <button type="button" name="button" onclick="datamaker()"></button><br>
    <p>블로그 만들어본다.<br>
    img 속성 onclick="window.open(this.src)" 클릭시 원본 이미지 새창에 띄워서 보여준다.</p>
    >첫 블로그 페이지
    <img src="start.jpg" height="100" width="100px"alt="" onclick="window.open(this.src)">
    <img src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/227/f2413f7d1cb6b50c98e551309777f6fa_res.jpeg" alt="" >
    <br>해결할것<br>
    디자인<br>
    서버 sql 목록 누적 데이터 상호 교환 제일급함
    날짜별 목록 //  한것별 날짜 목록<br>
    날짜바뀜에 따라 자동으로 목록 만들기<br>
    로우디비 써봐야할듯 > 저장 입출력 > 토탈 투데이<br>
    노트북 항상 켜두고 접속 가능하게 하기 또는 깃허브로 되나?<br>
    로아 기믹 게임 만들기<br>
    로그인 구현 & 숨기기<br>
    게시글 쓰기 수정 삭제 댓글<br>
    기본틀 메일 깃허브 주소 <br>
    정할거없으면 코테라도 하나 풀고 <br>
    에누리마켓 따라하기<br>
    </div>
  </body>
  </html>
  `;
}
{/* <h1>블로그만들기</h1>
   ${list}
   <a href="/create">create</a>
   ${body} */}

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