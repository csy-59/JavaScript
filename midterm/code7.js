//기본자료형/객체자료형/Number String Date Array 객체 자료형/JSON


/*
//기본자료형: number string boolean
let number = 273;
let string = "안녕";
let boolean = true;
console.log(typeof(number));        //number
console.log(typeof(string));        //string
console.log(typeof(boolean));       //boolean
*/

/*
//객체 자료형 숫자 문자열 불
let number = new Number(273);
let string = new String("안녕");
let boolean = new Boolean(true);
console.log(typeof(number));        //object
console.log(typeof(string));        //object
console.log(typeof(boolean));       //object
*/

/*
//기본자료형과 객체 자료형의 차이
let string = "과자|1200";
console.log(string.split("|"));         //[ '과자', '1200' ] 기본 자료형이 속성, 메소드를 사용시에 객체로 바뀌기 때문. 하지만 기본 자료형이라 속성, 메소드 추가는 불가
let string1 = new String("고구마|200");
console.log(string1.split("|"));        //[ '고구마', '200' ]
*/

/*
//기본 자료형에 속성과 메소드 추가하가: 프로토타입
let primitiveNumber = 273;
Number.prototype.method = function() {
    return 'Primitive Method';
};
console.log(primitiveNumber.method());
*/

/*
//Number 객체:
//toExponential(): 숫자를 지수 표시로 나타낸 문자열을 리턴합니다.
//toFixed(): 숫자를 고정소수점 표시로 나타낸 문자열을 리턴합니다.
//toPrecision(): 숫자를 기리에 따랄 지수 표현 또는 고정소수점 표시로 나타낸 문자열을 리턴합니다.
let number = 273.5210332
console.log(number.toFixed(1)); //273.5 소숫점 1자리까지
console.log(number.toFixed(4)); //273.5210 소수점 4자리까지
*/

/*
//Number 생성자 함수의 속성
//MAX_VALUE: 자바스크립트의 숫자가 나타낼 수 있는 최대 숫자
//Min_VALUE: 자바스크립트의 숫자가 나타낼 수 있는 최소 숫자
//NaN: 자바스크립의 숫자가 나타낼 수 없는 숫자
//POSITIVE_INFINITY: 양의 무한대 숫자
//NEGATIVE_INFINITY: 음의 무한대 숫자  
let numA = Number.MAX_VALUE;
let numB = Number.MAX_VALUE + 1;
console.log(numA);  //1.7976931348623157e+308   부동소수점 형식으로 다룰 정도의 큰수를 다룰 때는 작은 수는 무시
console.log(numB);  //1.7976931348623157e+308
let addNumber = Number('0.000000000000001e+308');
let number = Number.MAX_VALUE+addNumber;
console.log(number);    //Infinity 표현가능한 가장 큰 수에 더해진 값이라 무한(Infinity) 출력
*/

/*
//String 객체
//length: 문자열의 길이를 나타냄
//indexOf(searchString, position): 앞에서부터 일치하는 문자열의 위치를 리턴(없으면 -1 리턴)
//replace(regExp, replacement): regExp를 replacement로 바꾼 후 리턴
//slice(start, end): 특정 위치의 문자열을 추출해 리턴
//split(separator, limit): separator로 문자열을 잘라 배열을 리턴
//toLowerCase(): 문자열을 소문자로 바꾸어 리턴(바꾼 값을 리턴, 적용시키지 않음|비파괴적 메소드)
//toUpperCase(): 문자열을 대문자로 바꾸어 리턴(바꾼 값을 리턴, 적용시키지 않음|비파괴적 메소드)
let string = "abcdefg";
string.toUpperCase();   //값을 리턴하기 때문에 아무 의미 없음
console.log(string);    //abcdefg
string = string.toUpperCase();  //리턴한 값을 재설정 했기 때문에 적용됨.
console.log(string);    //ABCDEFG
*/

/*
//메소드 체이닝: 메소드를 줄줄이 연결해서 사용하기
let string = "Hello World";
string = string.toLowerCase();
string = string.replace(" ", "|");
let array = string.split("|");
console.log(string);    //hello|world
//이걸 메소드 체이닝으로
string = "Hello world";
array = string.toLocaleLowerCase().replace(" ", "|").split("|");
console.log(string);    //Hello world
*/

/*
//indexOf 예제
let string = "안녕하세요, 좋은 아침입니다";

if(string.indexOf("아침") >= 0){ //없으면 -1를 리턴함
    console.log("좋은 아침입니다.");
}
*/

/*
//split 예제
let string = "감자,고구마,바나나,사과";
let array = string.split(",");
console.log(array); //[ '감자', '고구마', '바나나', '사과' ]
*/

/*
//Date 객체
//new Date(): 현재 시간으로 Date객체 생성
//new Date(<유닉스 타임>):  유닉스 타임으로 Date 객체 생성
//new Date(<시간 문자열>): 문자열로 Date 객체를 생성합니다.
//new Date(<년>, <월-1>, <일>, <시간>, <분>, <초>, <밀리초>)
let dateA = new Date();
console.log(dateA); //2021-04-22T14:16:17.776Z

let dateB = new Date(6922818000);
console.log(dateB); //1970-03-22T03:00:18.000Z

let dateC = new Date("December 9, 1991 21:30:00")
console.log(dateC); //1991-12-09T12:30:00.000Z

let dateD = new Date(1991, 12-1, 9, 21,30,0,0);
console.log(dateD); //1991-12-09T12:30:00.000Z
*/

/*
//시간 더하기
let date = new Date();
console.log(date);  //2021-04-22T14:19:23.325Z

date.setFullYear(date.getFullYear() +1);    
date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() + 3);

console.log(date);  //2022-05-25T14:19:23.325Z
*/

/*
//시간 간격 구하기: getTime은 유닉스 시간이 반환
let now = new Date();
let before = new Date("May 9, 2001");
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval/(1000*60*60*24));
console.log(`태어나고 ${interval}일 지났습니다.`);
*/


//Array 객체
//concat(): 매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴
//join(): 배열 안의 모든 요소를 문자열로 만들어 리턴
//pop(): 배열의 마지막 요소를 제거하고 리턴(파괴적 메소드)
//push(): 배열의 마지막 부분에 새로운 요소를 추가(파괴적 메소드)
//reverse(): 배열의 요소 순서 뒤집기(파괴적 메소드)
//slice(): 배열 요소의 지정한 부분을 리턴
//sort(): 배열 요소 정렬(파괴적 메소드)
//splice(): 배열 요소의 지정 부분을 삭제, 삭제한 요소 리턴(파괴적 메소드)
function Product(name, price) {
    this.name = name;
    this.price = price;
};

let array = [
    new Product("고구마", 1000),
    new Product("감자", 500),
    new Product("바나나", 1500),
];

let popped = array.pop();
console.log("-배열에서 꺼낸 요소");
console.log(popped);
console.log("-pop()메소드를 호출한 후 배열");
console.log(array);

array.push(popped)
array.push(new Product("사과", 2000));

console.log("-push() 메소드를 호출한 이후 배열");
console.log(array);


/*
//배열 정렬: sort() 매개변수에 함수를 넣고 대소 비교 후 -1,0,1을 리턴하면 특정 값을 기준으로 정렬 가능. 파괴적
let arrayA = ["고구마", "감자", "바나나"];
let arrayB = [
    {
        name: "고구마",
        price: 1000
    },
    {
        name: "감자",
        price: 500
    },
    {
        name: "바나나",
        price: 400
    }
];

arrayA.sort();
console.log("-문자열로 정렬");
console.log(arrayA);
console.log();
console.log("-문자열로 정렬(역순)");
console.log(arrayA.reverse());
console.log();

arrayB.sort((item1, item2) => {
    return item1.price - item2.price;
});
console.log("-객체 내부의 숫자로 정렬");
console.log(arrayB);
console.log();

arrayB.sort((item1, item2) => {
    if(item1.name < item2.name){
        return -1;
    } else if(item1.name > item2.name) {
        return 1;
    } else {
        return 0;
    }
});
console.log("-객체 내부의 문자열로 정렬");
console.log(arrayB);
*/

/*
//ECMAScript5에 추가된 Array 메소드: 모두 콜백 함수를 매개변수로 받음
//forEach(): 배열의 요소를 하나씩 뽑아 반복을 돌림
//map(): 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듬
//filter(): 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴
let array = [52, 273, 32, 64, 71];

console.log("--- forEach() 메소드 ---");
array.forEach((item, index) => {
    console.log(`- ${index} 번째 요소는 ${item}입니다.`);
});

console.log();
console.log("--- map() 메소드 ---");
let outputA = array.map((item, index) => {
    return item * item;
});
console.log(outputA);

console.log();
console.log("--- filter() 메소드 ---");
let outputB = array.filter((item, index) => {
    return item % 2 == 0;
});
console.log(outputB);
*/

/*
//프로토타입에 메소드 추가
String.prototype.contain = function(input) {
    return this.indexOf(input) > -1;
};

console.log("안녕하세요".contain("안녕"));
console.log("안녕하세요".contain("데굴데굴"));
*/

/*
//underscore.js 라이브러리
//npm install underscore: 라이브러리 다운
const _ = require("underscore");

const array = [{
    name: "고구마",
    price: 1000
}, {
    name: "감자",
    price: 500
}, {
    name: "바나나",
    price: 1500
}];

const outputA = _.sortBy(array, (item) => item.price);
console.log(outputA);

const outputB = _(array).sortBy((item)=>item.name);
console.log(outputB);
*/

/*
//JSON 형태
//: 문자열은 큰따옴표로, 모든 키는 큰따옴표로 감싸야함.
//: 숫자, 문자열, 불 자료형만 사용가능
//JSON.stringify( <객체>, <변환함수>, <공백 개수> ): 자바스크립트 객체를 문자로 만듬
//JSON.parse( <문자열> ): 문자열을 자바스크립트 객체로 파싱함
const javascriptObject = [{
    name: "윤인성",
    region: "서울",
    salary: 200
}, {
    name: "윤명월",
    region: "도쿄",
    salary: 300
}];

const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log("--------------------");

const outputC = JSON.parse(outputB);
console.log(typeof(outputC));
console.log(outputC);
*/
/*
//JSON 타입
string
[{"name":"윤인성","region":"서울"},{"name":"윤명월","region":"도쿄"}]
[
  {
    "name": "윤인성",
    "region": "서울"
  },
  {
    "name": "윤명월",
    "region": "도쿄"
  }
]
--------------------
//자바스크립트 객체
object
[ { name: '윤인성', region: '서울' }, { name: '윤명월', region: '도쿄' } ]
*/

