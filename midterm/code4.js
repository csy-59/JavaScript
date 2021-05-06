//배열/반복문(while/for/for in/for of)/break/continue/스코프/var


/*
//배열 생성 및 요소 접근
let array = [52,273,'아침밥','점심밥',true,false];
array[0] = 0;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
*/

/*
//배열과 undefined: 배열 범위를 넘는 요소에 접근시 undefined 출력
let array = [1,2,3,4,5];
console.log(array[100]);    //undefined
*/

/*
//배열과 length함수
let array = [1,2,3,4,5];
console.log(array.length);  //5
*/

/*
//while 반복문(무한 반복은 조건에 true 넣으면 됨): 배열 사용하기
let i = 0;
let array = [52, 273, 32, 65, 103];

while(i<array.length) {
    console.log(i + "번째 출력: " + array[i]);
    i++;
}
*/

/*
//for 반복문(<초기식>:<조건식>:<종결식>): 덧셈하기
let output = 0;
for(let i = 0;i<=100;i++){
    output += i;
}
console.log(output);
*/

/*
//for 반복분: 곱셈하기
let output = 1;
for(let i = 1; i<=20;i++){
    output *= i;
}
console.log(output);
*/

/*
//whlie 시간을 사용한 반복문 이탈: 3초후 반복문 이탈하기
let start = new Date().getTime();
let count = 0;

while(start + (1000*3) > new Date().getTime()){
    count++;
}

console.log(count + "만큼 반복했습니다.");
//15569696만큼 반복했습니다.    근데 책에는 20998476만큼 반복했습니다. 로 나옴
*/

/*
//역 for문: 배열 뒤에서부터 출력하기
let array = [1,2,3,4,5,6];
for(let i = array.length -1 ;i>=0;i--){
    console.log(array[i]);
}
*/

/*
//for in과 for of: for in은 인덱스를 받아오고 for of는 요소를 받아옴
let array = ["사과", "배", "포도", "딸기", "바나나"];
for(let i in array){
    console.log(`${i}번째 요소: ${array[i]}`);
}
console.log("-----------------");
for(let item of array) {
    console.log(item);
}
/*0번째 요소: 사과
1번째 요소: 배
2번째 요소: 포도
3번째 요소: 딸기
4번째 요소: 바나나
-----------------
사과
배
포도
딸기
바나나
*/

/*
//중첩 반복문: 별피라미드
let star = ""
for(let i=0;i<10;i++){
    for(let j = 0;j<=i;j++){
        star+="*"
    }
    star+="\n";
}
console.log(star);
*/

/*
//중첩 반복문: 별피라미드2(오른쪽 정렬)
let star = "";
for(let i=0;i<10;i++){
    for(let j=9;j>i;j--){
        star += " ";
    }
    for(let j = 0;j<=i;j++){
        star += "*";
    }
    star+='\n'
}
console.log(star);
*/

/*
//break 키워드: 밑의 경우 if문과 while문 모두 나감
let i = 0;
let array = [1,31,273,57,8,11,32];
let output;
while(true){
    if(array[i] % 2 == 0){
        output = array[i];
        break;      //짝수 발견시 종료
    }
    i += 1;
}
console.log(`처음 발견한 짝수는  ${output}입니다`);
//처음 발견한 짝수는 8입니다.
*/

/*
//continue: break와 continue는 많이 사용하지 않는 것이 좋음
for(let i = 1;i<10;i++){
    if(i%2 == 0){//짝수면 건너뛰기
        continue;
    }
    console.log(i);
}

for(let i = 1; i<10;i++){
    if(i%2!=0) console.log(i);
}
*/

/*
//스코프: 블록 알아보기, 아래와 같은 식으로 블록 내부에서 이름이 같아 상위 ㅂ르록에 있는 변수의 이름을 가리키는 섀도잉이라함.
let a = 1;
let b = 1;
{
    let a = 2;
    {
        let a = 3;
        console.log(a); //예상: 3   결과: 3
        console.log(b); //예상: 1   결과: 1
    }
    console.log(a);     //예상: 2   결과: 2
    console.log(b);     //예상: 1   결과: 1
}
*/

/*
//호이스팅: 해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업
let a = 1;
{
    console.log(a);     //오류: a가 정의 되지 않았다
    let a = 2;
}
*/

/*
//var과 let의 차이: let은 생성한 변수를 해당 블록 내부에서만 사용 가능, var은 모든 곳에 사용 가능
{
    var a1 = 10;
}
console.log(a1);        //10
{
    let a2 = 10;
}
console.log(a2);        //오류: a2가 정의 되지 않음
*/

//연습문제
/*
//1
for(let i = 0; i<10;i++){
    console.log("출력");        //10번 출력
}
console.log("-----");
let i = 0;
while(i<10){
    console.log("출력");        //10번 출력
    i++;
}
*/
/*
//2
for(let i = 0;i<20;i+=2){
    console.log("출력");        //10번 출력
}
*/
/*
//3
let output = "";
for(let i = 0;i<8;i++){
    for(let j = 7;j>i;j--) output+=" ";
    for(let j = 0;j<(i+1)*2-1;j++) output+="*";
    output+='\n';
}
console.log(output);
*/
/*
//4
let array = [52,273,32,93,103];
for(let element of array){
    console.log(element);
}
console.log("-------");
for(let index in array){
    console.log(array[index]);
}
*/
/*
//5
let array = [273, 52, 103, 57, 271];

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

for(let i of array) {
    if(i<min) min = i;
}
for(let i of array) {
    if(i>max) max = i;
}

console.log(`가장 큰 수: ${max}`);
console.log(`가장 작은 수: ${min}`);
*/
/*
//6
let array = [52, 71,32,103,273,93];
for(let i = array.length-1;i>=0;i--){
    console.log(array[i]);
}
*/