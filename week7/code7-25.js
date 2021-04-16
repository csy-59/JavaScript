//��� ����
const { times } = require("underscore");
const _ = require("underscore");

//���� ����
let Stock = function(name, price) {
    this.name = name;
    this.price = price;
};
const array = [
    new Stock("sweet potato", 1000),
    new Stock("potato", 500),
    new Stock("Banana", 1500)
]

//1�� ����: �ܿ�����!!!!!!
const outputA = _.sortBy(array,(item) => item.price);
console.log(outputA);
//2�� ����: �ܿ�����!!!!!!
const outputB = _(array).sortBy((item) => item.name);
console.log(outputB);

//���
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