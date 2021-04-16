let array = [52,273, 32, 64, 72];

//forEach() �޼ҵ�
console.log("---forEach() method---");
array.forEach((item, index) => {
    console.log(`- item at ${index} index is ${item}`);
});

//map() �޼ҵ�
console.log();
console.log("---map() method---");
let outputA = array.map((item, index) => {
    //�迭�� ��� ��Ҹ� ������ ���ο� �迭 �����
    return item*item;
});
console.log(outputA);

//filter() �޼ҵ�
console.log();
console.log("---filter() method---");
let outputB = array.filter((item,index) => {
    //¦���θ� �̷���� �迭 ����
    return item% 2 ==0;
});
console.log(outputB);

//���
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