let Stock = function (name, price) {
    this.name = name;
    this.price = price;
};

let arrayA = ['sweet potato', 'potato', 'banana'];
let arrayB = [
    new Stock('sweet potato', 1000),
    new Stock('potato', 500),
    new Stock('banana', 4000),
];

//기본 배열을 정렬하고 출력
arrayA.sort();
console.log("- sort by string");
console.log(arrayA);
console.log();
console.log("- sort by string(reversed)");
console.log(arrayA.reverse());
console.log();

//객체 내부의 숫자로 정렬하고 출력
arrayB.sort((itemA, itemB) => {
    return itemA.price - itemB.price;
});
console.log("- sort arrayB by internal number");
console.log(arrayB);
console.log();

//객체 내부의 문자열로 정렬하고 출력
arrayB.sort((itemA, itemB) => {     //반환값을 sort가 받아 그걸 정렬함
    if(itemA.name < itemB.name) {
        return -1;
    } else if(itemA.name > itemB.name) {
        return 1; 
    } else {
        return 0;
    }
});
console.log("- sort arrayB by internal string");
console.log(arrayB);

//출력
/*
- sort by string
[ 'banana', 'potato', 'sweet potato' ]

- sort by string(reversed)
[ 'sweet potato', 'potato', 'banana' ]

- sort arrayB by internal number
[
  Stock { name: 'potato', price: 500 },
  Stock { name: 'sweet potato', price: 1000 },
  Stock { name: 'banana', price: 4000 }
]

- sort arrayB by internal string
[
  Stock { name: 'banana', price: 4000 },
  Stock { name: 'potato', price: 500 },
  Stock { name: 'sweet potato', price: 1000 }
]
*/