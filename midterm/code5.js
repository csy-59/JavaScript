//리터럴/익명함수/선언적 함수/화살표 연산자/함수의 매개변수/내장 함수/익명 함수&선언적 함수, 익명 함수&화살표 함수 차이점

/*
//익명 함수
let 함수 = function () {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};
함수();     //함수 호출
console.log(함수);  //함수 자체를 출력 [Function]

//리터럴: 변수 안에 들어 있는 상태가 아니라, 문자 그대로 자료를 나타내는 것
//52, 273, 32, "문자열 리터럴", function () {}, () => {}, {} 등등이 그 예
*/

/*
//선언적 함수
function 함수() {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};
함수();     //함수 호출
console.log(함수);  //함수 자체를 출력  [Function: 함수]
*/

/*
//화살표 함수: =>
let 함수 = () => {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};
함수();
console.log(함수);
*/

/*
//함수의 기본 형태
function power(x) {
    return x * x;
}

console.log(power(10)); //100
console.log(power(20)); //400
*/

/*
//매개변수가 여러개인 함수 
function multify(x, y) {
    return x*y;
}
//반환값이 없는 함수
function print(message) {
    console.log(`메세지: ${message}`);
}
console.log(multify(10,20));    //200
print("안녕하세요");            //메세지: 안녕하세요
*/

/*
//화살표 함수와 리턴
let power = (x) => x*x;
console.log(power(10)); //100
console.log(power(20)); //400
*/

/*
//매개 변수와 리턴
function sum(min,max) {
    let output = 0;
    for(let i = min; i<=max;i++){
        output += i;
    }
    return output;
}

console.log(sum(1,100));    //5050

function multify(min, max) {
    let output = 1;
    for(let i = min;i<=max;i++){
        output *= i;
    }
    return output;
}

console.log(multify(1,10)); //3628800
*/

/*
//함수 매개 변수: 매개 변수가 없어도 사용가능. but 초기화 하지 않으면 undefined로 나옴
function print(name, count) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print("사과", 10);      //사과이/가 10개 있습니다.
print("사과");          //사과이/가 undefined개 있습니다.
*/

/*
//매개 변수 초기화(짧은 초기화 조건문 사용)
function print(name, count) {
    count = count||1;
    console.log(`${name}이/가 ${count}개 있었다.`);
}
print("사과", 10);  //사과이/가 10개 있습니다.
print("사과");      //사과이/가 1개 있습니다.
*/

/*
//디폴트 매개변수
function print(name, count = 1){
    console.log(`${name}이/가 ${count}개 있었다.`);
}
print("사과");      //사과이/가 1개 있었다.
*/

/*
//콜백 함수
function callTenTimes(callback) {
    for(let i = 0; i< 10; i++) {
        callback();     //이 명령문으로 callback이 함수를 받아온다는 걸 알 수 있음
    }
};

callTenTimes(function() {
    console.log("함수 호출");
});
*/

/*
//표준 내장 함수: parseInt(문자열을 정수로 변환) parseFloat(문자열을 실수로 변환)
let inputA = "52";
let inputB = "52.273";
let inputC = "1401동"

console.log(parseInt(inputA));      //52

console.log(parseInt(inputB));      //52
console.log(parseFloat(inputB));    //52.273

console.log(parseInt(inputC));      //1401  자동으로 숫자 뒤에 있는 문자는 다 잘라냄
console.log(parseInt("140호2020")); //140
*/

/*
//진법 변환: 문자열을 자동으로 해당 진법으로 변환
console.log(parseInt("0",2));       //0
console.log(parseInt("10",2));      //2
console.log(parseInt("100",2));     //4
console.log(parseInt("1000",2));    //8
console.log("----------")
console.log(parseInt("0",8));       //0
console.log(parseInt("10",8));      //8
console.log(parseInt("100",8));     //64
console.log(parseInt("1000",8));    //512
*/

/*
//숫자 생성 방법과 진수: 0<숫자>(8진수) <숫자>(10진수) 0x<숫자>(16진수)
console.log(010);   //8
console.log(10);    //10
console.log(0x10);  //16
*/

/*
//타이머 함수: setTimeout(함수,시간) (특정 시간 후 함수 실행) setInterval(함수, 시간) (특정 시간마다 함수를 실행, clearInterval()로 끌 수 있음)
setTimeout(function(){
    console.log("1초가 지났습니다.");
}, 1000);
setInterval(function(){
    console.log("1초 마다 호출됩니다.");
}, 1000);
*/

/*
//타이머 함수: clearInterval() 사용
let id = setInterval(function(){
    console.log("출력합니다.");
}, 1000);

setTimeout(function(){
    clearInterval(id);
}, 3000);
*/

/*
//익명 함수와 선언적 함수의 생성 순서: 선언적 함수는 적혔을 때, 익명 함수는 실행시 선언됨.
let 변수;
변수 = 10;
변수 = 20;
console.log(변수);      //20

함수 = function() {
    console.log("첫번째 함수");
};
함수 = function() {
    console.log("두번째 함수");
};
함수();      //두번째 함수

함수 = function() {
    console.log("첫번째 함수");
};
function 함수() {
    console.log("두번째 함수");
};
함수();     //첫번째 함수
*/

/*
//익명 함수 & 선언적 함수 연습
함수 = function() { console.log("1"); };
함수 = function() { console.log("2"); };
함수(); //예상: 2   결과: 2

함수 = function() { console.log("1"); };
function 함수() {console.log("2"); };
함수(); //예상: 1   결과: 1

function 함수() {console.log("1"); };
함수 = function() { console.log("2"); };
함수(); //예상: 2   결과: 2

function 함수() { console.log("1"); };
function 함수() { console.log("2"); };
함수(); //예상: 2 결과: 2
*/

/*
//익명 함수와 화살표 함수의 차이점: this의 대상
(function() {
    console.log(this);
})();       //오류: 여기서의 this는 function()이 아니라 그 상위 객체를 가리킴, 근데 이 경우에는 없으니 오류

(()=>{
    console.log(this);
})();       //{} | 여기서의 this는 =>함수 그 자체를 가리킴
*/


//연습문제
/*
//1
function test() { console.log("테스트 함수"); };
let test1 = function() { console.log("테스트 함수1");};
let test3 = () => {console.log("테스트 함수3");};
function test4() => {console.log("테스트 함수4");}; //오류
*/
/*
//2
function test(a,b,c) {
    console.log(a);             //10
    console.log(a * b);         //1000
    console.log(a * b *c);      //NaN
}
test(10,100);
*/
/*
//3: arguments>>함수가 받아오는 매개변수를 담는 배열, arguments[0]이런식으로 접근 가능
function power(x,y){
    if(!y) return x*x;
    else {
        let output = 1;
        for(let i = 0;i<y;i++){
            output*=x;
        }
        return output;
    }
};
console.log(power(10));
console.log(power(10,3));
function multify() {
    let output = 1;
    for(let element of arguments){
        output *= element;
    }
    return output;
};
console.log(multify(1,2,3,4,5));
*/
/*
//4
let str = "1920년2020년";
console.log(Number(str));
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseDouble(str));  //오류
*/
