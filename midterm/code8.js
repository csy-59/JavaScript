
//예외와 오류의 차이
//오류: 큰 의미로는 오류와 예외를 모두 포함. 작은 의미로 프로그램을 실행하기도 전에 발생하는 문법적 오류(괄호 갯수가 다름 등)
//예외: 프로그램을 실행하면서 발생하는 논리적 오류(배열의 인덱스를 음수로 입력 등)

/*
//예외 사항 확인하기
function callThreeTimes(callback) {
    for(let i = 0;i<3;i++) callback();
};

callThreeTimes(function () {console.log("안녕하세요");});   //예외 발생

callThreeTimes();
*/

/*
//기본적 예외 처리 방식: undefined 거르기
function callThreeTimes(callback) {
    if(callback){
        for(let i = 0;i<3;i++){
            callback();
        }
    } else{
        console.log("예외 발생: 매개변수 callback 지정되지 않음");
    }
}
callThreeTimes(function(){console.log("안녕하세요");});
callThreeTimes();
*/

/*
//고급 예외 처리: try-catch
try{
    const array = new Array(-2000);
} catch(exception) {
    console.log(`${exception.name} 예외 발생`); //RangeError 예외 발생
} finally {
    console.log("finally 구분 실행");           //finally 구분 실행
}
*/

/*
//예외 객체: name과 message가 있음
try{
    error.error.error();
} catch(e){
    console.log(e.name);        //ReferenceError
    console.log(e.message);     //error is not defined
}
*/

/*
//강제로 예외 발생: throw 발생
const error = new Error("메시지");  //예외 객체 생성
error.name = "나만의 오류";
error.message = "오류의 메시지";

throw error;
/*throw error;
^

나만의 오류: 오류의 메시지
*/

/*
//강제로 예외 발생: throw, try-catch 문 사용
try{
    throw "예외 발생";
} catch(exception) {
    console.log("예외 발생했음");   //예외 발생했음
    console.log(exception);        //예외 발생(위에 throw한 문자열 출력)
}
*/

/*
//강제로 예외 발생: throw, try-catch, 예외 객체 사용
try{
    let error = new Error("메시지");
    error.name = "나만의 예외";
    error.message = "예외 발생함";

    throw error;
} catch(e) {    
    console.log(e.name);        //나만의 예외
    console.log(e.message);     //예외 발생함
}
*/

/*
//연습 문제
try{
    console.log("출력A");
    const array = new Array(-200);
    console.log("출력B");
} catch(e) {
    console.log("출력C");
    return;
    console.log("출력D");
} finally {
    console.log("출력E");
    throw "하하";
}
*/