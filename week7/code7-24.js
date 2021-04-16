let array = [52,273, 32, 64, 72];

//forEach() 메소드
console.log("---forEach() method---");
array.forEach((item, index) => {
    console.log(`- item at ${index} index is ${item}`);
});

//map() 메소드
console.log();
console.log("---map() method---");
let outputA = array.map((item, index) => {
    //배열의 모든 요소를 제곱해 새로운 배열 만들기
    return item*item;
});
console.log(outputA);

//filter() 메소드
console.log();
console.log("---filter() method---");
let outputB = array.filter((item,index) => {
    //짝수로만 이루어진 배열 생성
    return item% 2 ==0;
});
console.log(outputB);

//출력
/*
---forEach() method---
- item at 0 index is 52
- item at 1 index is 273
- item at 2 index is 32
- item at 3 index is 64
- item at 4 index is 72

---map() method---
[ 2704, 74529, 1024, 4096, 5184 ]

---filter() method---
[ 52, 32, 64, 72 ]
*/