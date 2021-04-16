//변수 선언
const javascriptObject = [{ //자바스크립트 객체
    name: "Youn Insung",
    region: "Seoul"
},{
    name: "Youn Maugwarl",
    region: "Tokyo"
}];

//JSON.stringify() 메소드로  객체를 JSON 문자열로 변경
const outputA = JSON.stringify(javascriptObject);   
const outputB = JSON.stringify(javascriptObject, null,2);   //이쁜 모양으로 만들기 2칸씩 띄워서 출력!
console.log(typeof(outputA));   //String
console.log(outputA);
console.log(outputB);
console.log("--------------------");

//JSON.parse() 메소드로 JSON 문자열을 객체로 변경
const outputC = JSON.parse(outputB);    //object
console.log(typeof(outputC));
console.log(outputC);


//출력
/*
string
[{"name":"Youn Insung","region":"Seoul"},{"name":"Youn Maugwarl","region":"Tokyo"}]
[
  {
    "name": "Youn Insung",
    "region": "Seoul"
  },
  {
    "name": "Youn Maugwarl",
    "region": "Tokyo"
  }
]
--------------------
object
[
  { name: 'Youn Insung', region: 'Seoul' },
  { name: 'Youn Maugwarl', region: 'Tokyo' }
]
*/