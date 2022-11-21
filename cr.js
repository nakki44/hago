const axios = require("axios");
const cheerio = require("cheerio");

const _url = 'https://lostark.game.onstove.com/Profile/Character/%EB%B2%9E%EC%8B%BC';
const getHtml = async (_url) => {
    try {
      return await axios.get(_url);
    } catch (error) {
      console.error(error);
    }
  };
  getHtml(_url)
  .then((html) => {
    const $ = cheerio.load(html.data);
    const data = $('div.profile-ability-battle>ul>li:nth-child(2)>span:nth-child(2)');
    const dataText = data.text();
    console.log(dataText);
    return dataText;
  })
  getHtml(_url)
  .then((html) => {
    const $ = cheerio.load(html.data);
    const data = $('div.swiper-wrapper > ul > li:nth-child(2) > span:nth-child(1)');
    const dataText = data.text();
    console.log(dataText);
    return dataText;
  })
