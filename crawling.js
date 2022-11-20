const axios = require("axios");
const cheerio = require("cheerio");
const getHtml = async () => {
    try {
      return await axios.get('https://lostark.game.onstove.com/Profile/Character/%EB%B2%9E%EC%8B%BC');
    } catch (error) {
      console.error(error);
    }
  };
  getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const data = $('div.profile-ability-battle>ul>li:nth-child(2)>span:nth-child(2)');
    const dataText = data.text();
    console.log(dataText);
    return dataText;
  })
  getHtml()
  .then((html) => {
    const $ = cheerio.load(html.data);
    const data = $('div.swiper-wrapper > ul > li:nth-child(2) > span:nth-child(1)');
    const dataText = data.text();
    console.log(dataText);
    return dataText;
  })
