const fs=require('fs');
function adddate (){
var date= new Date();
const year = date.getFullYear()-2000;
const month = date.getMonth() + 1;
const day = date.getDate();
var dateStr=year + '.' + month + '.' + day;
//리스트 읽어오기 str이 리스트에 없으면 추가하기.
}