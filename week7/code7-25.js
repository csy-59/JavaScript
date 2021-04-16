//모듈 추출
const { times } = require("underscore");
const _ = require("underscore");

//변수 선언
let Stock = function(name, price) {
    this.name = name;
    this.price = price;
};
const array = [
    new Stock("sweet potato", 1000),
    new Stock("potato", 500),
    new Stock("Banana", 1500)
]

//1번 형태: 외워야함!!!!!!
const outputA = _.sortBy(array,(item) => item.price);
console.log(outputA);
//2번 형태: 외워야함!!!!!!
const outputB = _(array).sortBy((item) => item.name);
console.log(outputB);

//출력
/*
[
  Stock { name: 'potato', price: 500 },
  Stock { name: 'sweet potato', price: 1000 },
  Stock { name: 'Banana', price: 1500 }
]
[
  Stock { name: 'Banana', price: 1500 },
  Stock { name: 'potato', price: 500 },
  Stock { name: 'sweet potato', price: 1000 }
]
*/