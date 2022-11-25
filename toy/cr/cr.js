const axios = require("axios");
const cheerio = require("cheerio");
const _url = "https://lostark.game.onstove.com/Profile/Character/%EB%B2%9E%EC%8B%BC";
function getHtml (_url) {
    try {
      return  axios.get(_url);
    } catch (error) {
      console.error(error);
    }
  };
  
  //기본 특성
  getHtml(_url)
  .then((html) => {
    const $ = cheerio.load(html.data);
    for(i=1;i<3;i++){
    const data = $('div.profile-ability-basic>ul>li:nth-child('+i+')>span');
    const dataText = data.text();
    console.log(dataText);}
    // return dataText;
  })
  //전투 특성
  getHtml(_url)
  .then((html) => {
    const $ = cheerio.load(html.data);
    for(i=1;i<7;i++){
    const data = $('div.profile-ability-battle>ul>li:nth-child('+i+')>span');
    const dataText = data.text();
    console.log(dataText);}
    // return dataText;
  })
  
  //각인
  getHtml(_url)
  .then((html) => {
    const $ = cheerio.load(html.data);
    for(i=1;i<4;i++){
      for(j=1;j<3;j++){
    const data = $('div.swiper-wrapper > ul > li:nth-child('+i+') > span:nth-child('+j+')');
    const dataText = data.text();
    console.log(dataText);
    // return dataText2;
  }}
  })
  
 //카드
 getHtml(_url)
 .then((html) => {
   const $ = cheerio.load(html.data);
   for(i=1;i<7;i++){
   const data = $('div.profile-card__content>ul>li:nth-child('+i+')>div:nth-child(1)');
   const dataText = data.text();
   console.log(dataText);}
   // return dataText;
 })

 //보석
 getHtml(_url)
 .then((html) => {
   const $ = cheerio.load(html.data);
   for(i=1;i<12;i++){
   const data = $('div.box_wrapper>ul>li:nth-child('+i+')>p');
   const data2 = $('div.jewel__wrap>span:nth-child('+i+')>span');
   const dataText = data.text();
   const dataText2 = data2.text();
   console.log(dataText2+dataText);}
   // return dataText;
 })

 
