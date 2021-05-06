//조건문/삼항연산자/짧은 초기화 조건문/입력


/*
//if 조건문: 홀짝 구분
let input= 32;
if(input % 2 == 0) {
    console.log("짝수입니다.");     //이거 출력
}
if(input % 2 == 1) {
    console.log("홀수입니다.");
}
*/

/*
//오전 오후 구분하기+현재 시간 구하기
let date = new Date();  
console.log(date.getFullYear());        //2021
console.log(date.getMonth());           //3(Date는 달을 0에서부터 셈)
console.log(date.getDay());             //4(목)
console.log(date.getHours());           //11시
console.log(date.getMinutes());         //53분
console.log(date.getSeconds());         //59초
console.log(date.getDate());            //22일
*/

/*
//오전 오후 구분하기
let date = new Date();
if(date.getHours() < 12){
    console.log("오전입니다.");
} 
if(12<=date.getHours()){
    console.log("오후입니다.");
}
*/

/*
//if-else: 홀짝 구분
let input = 32;
if(input % 2 == 0) {
    console.log("짝수입니다.");
} else {
    console.log("홀수입니다.");
}

//if-else: 오전 오후 구분
let date = new Date();
if(date.getHours() < 12){
    console.log("오전입니다.");
} else {
    console.log("오후입니다.");
}
*/

/*
//중첩 조건문: &&먹을 시간
let date = new Date();
let hours = date.getHours();
if(hours<11){
    console.log("아침 먹을 시간");
} else{
    if(hours < 15){
        console.log("점심 먹을 시간");
    } else {
        console.log("저녁 먹을 시간입니다.");
    }
}
*/

/*
//if-else if문: &&먹을 시간
let date = new Date();
let hours = date.getHours();
if(hours<11){
    console.log("아침 먹을 시간");
} else if(hours<15){
    console.log("점심 먹을 시간");
} else{
    console.log("저녁 먹을 시간입니다.");
}
*/

/*
//switch 조건문: 계절 구하기
let date = new Date();
switch(date.getMonth() + 1) {
    case 12:
    case 1:
    case 2: console.log("겨울입니다."); break;
    case 3:
    case 4:
    case 5: console.log("봄입니다."); break;
    case 6:
    case 7:
    case 8: console.log("여름입니다."); break;
    case 9:
    case 10:
    case 11: console.log("가을입니다."); break;
    default: console.log("대체 어떤 행성에 사고 계신가요?"); break;
}
*/

/*
//삼항 연산자: 숫자 비교하기
let numA = 52;
let numB = 0;
let numC = -23;

console.log(`${numA}은/는 ${numA > 0 ? "0보다 큰" : "0 또는 0보다 작은"} 숫자입니다.`);
console.log(`${numB}은/는 ${numB > 0 ? "0보다 큰" : "0 또는 0보다 작은"} 숫자입니다.`);
console.log(`${numC}은/는 ${numC > 0 ? "0보다 큰" : "0 또는 0보다 작은"} 숫자입니다.`);
*/

/*
//삼항 연산자: undefined 검사
let test;

test = test ? test : "초기화";
console.log(test);      //초기화

test = test ? test : "초기화1";
console.log(test);      //초기화
*/

/*
//짧은 초기화 조건문: <대상> || <초기화값> >> 대상이 undefined이면 <초기화값> 대입
let test;

test = test || "초기화";
console.log(test);  //초기화
test = test || "초기화1";
console.log(test);  //초기화
*/

/*
//기본 입력
const repl = require('repl');
repl.start({
    prompt: "<입력 때 앞에 출력할 문자열> ",
    eval: (command, context, filename, callback) => {
        //입력(command)을 받았을 때 처리를 수행: command 변수로 입력받음.
        console.log(command);
        //처리완료
        callback();
    }
}); //; 붙이자!!!!!
*/

/*
//기본 입력 활용, 숫자 판별
const repl = require('repl');
repl.start({
    prompt: "숫자 입력> ",
    eval: (command, context, filename, callback) => {
        let num = Number(command);
        if(isNaN(num)) {
            console.log("숫자가 아닙니다.");
        } else{
            console.log("숫자입니다.");
        }
        //처리 완료
        callback();
    }
});
*/

//연습 문제
/*
let x, y;
x = 10, y = 2;
if(x > 4){
    if(y > 2) {
        console.log(x*y);
    }
} else {
    console.log();
}

let x = 2;
if(x > 10) {
    if(x<20){
        console.log("조건에 맞습니다.");
    }
}
if(x>10 && x<20){
    console.log("조건에 맞습니다.");
}
*/
let level = 1;
if(level == 1) {
    console.log("수강해야 하는 전공 학점: 12학점");
} else if(level == 2) {
    console.log("수강해야 하는 전공 학점: 18학점");
}else if(level == 3) {
    console.log("수강해야 하는 전공 학점: 10학점");
}else if(level == 4) {
    console.log("수강해야 하는 전공 학점: 18학점");
}

switch(level) {
    case 1: console.log("수강해야 하는 전공 학점: 12학점"); break;
    case 2: console.log("수강해야 하는 전공 학점: 18학점"); break;
    case 3: console.log("수강해야 하는 전공 학점: 10학점"); break;
    case 4: console.log("수강해야 하는 전공 학점: 18학점"); break;
}