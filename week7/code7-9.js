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

//�⺻ �迭�� �����ϰ� ���
arrayA.sort();
console.log("- sort by string");
console.log(arrayA);
console.log();
console.log("- sort by string(reversed)");
console.log(arrayA.reverse());
console.log();

//��ü ������ ���ڷ� �����ϰ� ���
arrayB.sort((itemA, itemB) => {
    return itemA.price - itemB.price;
});
console.log("- sort arrayB by internal number");
console.log(arrayB);
console.log();

//��ü ������ ���ڿ��� �����ϰ� ���
arrayB.sort((itemA, itemB) => {     //��ȯ���� sort�� �޾� �װ� ������
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

//���
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