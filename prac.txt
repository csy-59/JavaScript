function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.color = "black";
Product.prototype.print = function () {
    console.log(`${this.name}'s price is ${this.price} and color is ${this.color}`);
};

let proPhone = new Product("Phone", 10000);
let proPen = new Product("Pen", 300);

console.log(proPhone);
console.log(proPen);

proPen.color = "red";
console.log('\n' + proPhone.color);
console.log(proPen.color + '\n');

console.log(proPhone);
console.log(proPen);
