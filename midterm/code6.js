//객체/생성자함수/프로토타입/null


/*
//객체 선언: '제품명','유형', '성분' 등의 키(속성)로 "7D 건조 망고", "당절임" 등의 속성(속성값)에 접근 가능
let product ={
    제품명: "7D 건조 망고",
    유형: "당절임",
    성분: "망고, 설탕, 메타중아황산나트륨, 치자황색소",
    원산지: "필리핀"  
};

console.log(product);
/*{
  '제품명': '7D 건조 망고',
  '유형': '당절임',
  '성분': '망고, 설탕, 메타중아황산나트륨, 치자황색소',
  '원산지': '필리핀'
}
*/

/*
//식별자로 사용할 수 없는 키
let object = {
    'with space': 273,
    'with ~!@#$%^&*()/*-+': 52
};
console.log(object['with space']);
console.log(object['with ~!@#$%^&*()/*-+']);
*/

/*
//객체 생성 예제
let product = {
    name: "바나나",
    price: 1200
};

console.log(product.name);
console.log(product.price);
*/

/*
//객체와 반복문: for in을 많이 씀 
let object = {
    name : "바나나",
    price : 1200
};

for(let i in object){
    console.log(`${i}: ${object[i]}`);
}
/*
for(let i of object){
    console.log(`${i}`);    //오류
}
*/

/*
//속성과 메소드
let object = {  //익명 객체
    name : "바나나",
    price: 1200,
    print: function () {
        console.log(`${this.name}: ${this.price}`);
    }
};

object.print();
console.log(object);    //{ name: '바나나', price: 1200, print: [Function: print] }
*/

/*
//생성자 함수
function Product(name, price) {     //선언적객체
    this.name = name;
    this.price = price;
}

let p1 = new Product("바나나", 1200);   //new를 붙이지 않으면 그냥 함수만 실행이 되서 p1에는 아무런 값이 들어가지 않게 됨.

console.log(p1);        //Product { name: '바나나', price: 1200 }
*/

/*
//프로토 타입
function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.print = function () {
    console.log(`${this.name}: ${this.price}`);
};

let p1 = new Product("바나나", 1200);

p1.print();
*/

/*
//프로토 타입 연습
function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.print = function() {
    console.log(`${this.name}: ${this.price}`);
};

let array = [
    new Product("바나나", 1200),
    new Product("사과", 2000),
    new Product("배", 3000),
    new Product("고구마", 700),
    new Product("감자", 600),
    new Product("수박", 5000)
];

for(let i of array){
    i.print();
}
*/

/*
//null 알아보기: 0 NaN ""는 값이 false로 변환 될 뿐 실제로는 값이 들어있는 것. 하지만, null과 undefined는 아예 값이 없는 것.
console.log(null);      //null5ㅈ
console.log(typeof(null));  //object (객체임)

let zeroNumber = 0;
let falseBoolean = "";
let emptyString = "";
let undefinedValue;
let nullValue = null;

if(zeroNumber == null)  console.log("0은 존재하지 않는 값");                
if(falseBoolean == null)  console.log("false은 존재하지 않는 값");
if(emptyString == null)  console.log("빈 문자열은 존재하지 않는 값");
if(undefinedValue == null)  console.log("undifined은 존재하지 않는 값");    //출력됨.
if(nullValue == null)  console.log("null은 존재하지 않는 값");              //출력됨.
*/

//연습 문제

/*
//1
let product = {
    name: "Nature of Code",
    price: 30000,
    author: "다니엘 쉬프만",
    ISBN: 9788968481901,
    page: 620
};
console.log(product);
/*{
  name: 'Nature of Code',
  price: 30000,
  author: '다니엘 쉬프만',
  ISBN: 9788968481901,
  page: 620
}
*/
/*
//2
function Product(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
};

Product.prototype.calculate = function (weight) {
    console.log(`${weight/this.weight * this.price}원`);
};

let p = new Product("돼지고기", "100", "1200");
p.calculate(250);
*/
/*
//3
let number = 273;
number.print = function() {
    console.log(this);
};

number.print();
number.print();
number.print();
*/
/*
//5
let object = {
    "+" : 1,
    "-": 2,
    "*" : 3,
    "/" : 4
};

console.log(object["*"]);
console.log(object["+"]);
*/