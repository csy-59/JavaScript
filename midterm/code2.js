//기본 출력/연산자/이스케이프문자/템플릿/자료형/NaN/undefined/불 자료형 자동 변환/일치 연산자/상수

/*
//기본 출력 예제
console.log("JavaScript Programming");
//PS C:\javaScript\midterm> node code2.js
//JavaScript Programming
*/

/*
//음수와 나머지 연산자: 오른쪽 피연산자의 부호는 무시함
console.log(4%3);   //1
console.log(-4%3);  //-1
console.log(4%-3);  //1
console.log(-4%-3); //-1
*/

/*
//소수점이 있는 숫자와 나머지 연산자: 오류남 사용하지 말자
console.log(5.0%2.2);
//0.5999999999999996
*/

/*
//이스케이프 문자
console.log("이름\t나이");  //이름  나이
console.log("안녕\n하세요");    //안녕 \n 하세요
console.log("\\\\");            //\\
*/

/*
//템플릿 문자열과 문자 선택 연산자: ${}를 먼저 실행하고 나온 문자열(올해는 2021입니다.)에서 추출하는 것
console.log(`올해는 ${new Date().getFullYear()}입니다.`[4]);    //2
console.log(`올해는 ${new Date().getFullYear()}입니다.`[5]);    //0
console.log(`올해는 ${new Date().getFullYear()}입니다.`[6]);    //2
console.log(`올해는 ${new Date().getFullYear()}입니다.`[7]);    //1
*/

/*
//비교 연산자: 
console.log(30>20>10);  //false;
//30 > 20 > 10
//(30>20) > 10;
// true > 10;
// 1 > 10;
// false;
*/

/*
//문자열 관련 복합 대입 연산자
let output = "hello ";
output += "world ";
output += "!";
console.log(output);
//hello world !
*/

/*
//증감 연산자의 전위와 후위
let number = 10;
console.log(number);    //예상: 10  결과: 10
console.log(++number);  //예상: 11  결과: 11
console.log(--number);  //예상: 10  결과: 10
console.log(number);    //예상: 10  결과: 10

number = 10;
console.log(number);    //예상: 10  결과: 10
console.log(number++);  //예상: 10  결과: 10
console.log(number--);  //예상: 11  결과: 11
console.log(number);    //예상: 10  결과: 10
*/

/*
//증감 연산자 완성
let number = 10;
console.log(number++);  //예상: 10  결과: 10
console.log(++number);  //예상: 12  결과: 12
console.log(number--);  //예상: 12  결과: 12
console.log(--number);  //예상: 10  결과: 10
*/

/*
//typeof(), 자료형
console.log(typeof('String'));          //string(문자열)
console.log(typeof(273));               //number(숫자)
console.log(typeof(true));              //boolean(불)
console.log(typeof(function () {}));    //function(함수)
console.log(typeof({}));                //object(객체)
console.log(typeof(alpha));             //undefined(undefined: 초기화 되지 않은 것, 변수를 선언했으나 초기화 하지 않았을 때 나타남. 판별시 typeof()를 사용해야함.)
*/

/*
//강제 자료형 변환: Number()
console.log(Number("52"));          //예상: 52  결과: 52
console.log(Number("52.273"));      //예상: 52.273  결과: 52.273
console.log(Number(true));          //예상: 1  결과: 1
console.log(Number(false));         //예상: 0  결과: 0
console.log(Number("안녕하세요"));  //예상: NaN  결과: NaN >> Not a Number, 숫자형이지만, 숫자가 아닌것. 확인시 isNaN()사용
*/

/*
//NaN: 무조건 적으로 false
let nan = Number("안녕하세요");
console.log(nan == nan);        //예상: true  결과: false
console.log(nan != nan);        //예상: false  결과: true
console.log(isNaN(nan));        //예상: true  결과: true
*/

/*
//Boolean() 함수: 다음의 다섯가지는 모두 false 반환
let nan = Number("안녕하세요");
let undefinedVariable;
console.log(Boolean(0));                   //false
console.log(Boolean(nan));                 //false
console.log(Boolean(""));                  //false
console.log(Boolean(null));                //false
console.log(Boolean(undefinedVariable));   //false
*/

/*
//숫자&문자열 자료형 반환   
console.log(52+273);        //325(number형)
console.log("52" + 273);    //52273(string형)
console.log(52 + "273");    //52273(string형)
console.log("52" + "273");  //52273(string형)
*/

/*
//불 자료형 자동 변환: !! 사용
let nan = Number("안녕하세요");
let undefinedVariable;

console.log(!!0);                   //false
console.log(!!nan);                 //false 
console.log(!!"");                  //false     
console.log(!!null);                //false
console.log(!!undefinedVariable);   //false
*/

/*
//일치 연산자: === !== 자료형과 값이 같은지 다른지 비교
console.log(`52 == "52": ${52 == "52"}`);       //true
console.log(`52 === "52": ${52 === "52"}`);     //false
console.log();
console.log(`0 == "": ${0 == ""}`);             //true
console.log(`0 === "": ${52 === ""}`);          //false
*/

/*
//상수: const
const constant = "변경 불가";
constant = "";          //오류발생!! 상수, 변경 불가인데 변경시도
console.log(constant);
*/

/*
//연습문제
console.log(10 + 20 + '!!!!');  //30!!!!(계산은 왼쪽에서 오른쪽 순)

const number = 10;
console.log(number++);      //오류!!! const(상수)는 값 변경 불가
console.log(++number);
console.log(number++);
console.log(++number);
*/