var datearr=["22.11.13","22.11.14"]
function listmaker(){
var date= new Date();
const year = date.getFullYear()-2000;
const month = date.getMonth() + 1;
const day = date.getDate();
var dateStr=year + '.' + month + '.' + day;
if(datearr.includes(dateStr)){

}
else{
  datearr.push(dateStr);
}
// 1. 추가할 값을 input창에서 읽어온다
// const addValue
//   = document.getElementById('addValue').value;
// 2. 추가할 li element 생성
// 2-1. 추가할 li element 생성
for( i = 0 ; i<datearr.length;i++){
const li = document.createElement("li");
// 2-2. li에 id 속성 추가
li.setAttribute('id',datearr[i]);
// 2-3. li에 text node 추가
const textNode = document.createTextNode(datearr[i]);
li.appendChild(textNode);
// 3. 생성된 li를 ul에 추가
document
  .getElementById('_date')
  .appendChild(li);
}
}
