let Stock = function (name, price) {
    this.name = name;
    this.price = price;
};

let array = [
    new Stock("sweet potato", 1000),
    new Stock("potato", 500),
    new Stock("Banana", 1500)
];

let popped = array.pop();
console.log("- Popped object");
console.log(popped);
console.log("- Array after popped");
console.log(array);

array.push(popped); //다시 바나나 push
array.push(new Stock("apple", 2000));   //사과 push
console.log("- Array after pushed");
console.log(array);

//출력
/*
- Popped object
Stock { name: 'Banana', price: 1500 }
- Array after popped
[
  Stock { name: 'sweet potato', price: 1000 },
  Stock { name: 'potato', price: 500 }
]
- Array after pushed
[
  Stock { name: 'sweet potato', price: 1000 },
  Stock { name: 'potato', price: 500 },
  Stock { name: 'Banana', price: 1500 },
  Stock { name: 'apple', price: 2000 }
]
*/