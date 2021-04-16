function Product(name, price){
    this.name = name;
    this.price = price;
}

//prototype엔 대체로 속성을 생성하지 않음!!!
Product.prototype.color = "black";
//메모리가 절약되서 좋음! 그래서 메소드를 주로 prototype에서 사용
Product.prototype.print = function () {
    console.log(`${this.name}'s price is ${this.price} and color is ${this.color}`);
};

let proPhone = new Product("Phone", 10000);
let proPen = new Product("Pen", 300);

console.log(proPhone);
console.log(proPen);

proPen.color = "red";   //이 줄로 proPen 객체에 color 속성이 추가 된 것
console.log('\n' + proPhone.color);
console.log(proPen.color + '\n');

console.log(proPhone);
console.log(proPen);

//prototype 속의 속성과 