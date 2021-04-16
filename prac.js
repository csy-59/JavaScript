function Product(name, price){
    this.name = name;
    this.price = price;
}

//prototype�� ��ü�� �Ӽ��� �������� ����!!!
Product.prototype.color = "black";
//�޸𸮰� ����Ǽ� ����! �׷��� �޼ҵ带 �ַ� prototype���� ���
Product.prototype.print = function () {
    console.log(`${this.name}'s price is ${this.price} and color is ${this.color}`);
};

let proPhone = new Product("Phone", 10000);
let proPen = new Product("Pen", 300);

console.log(proPhone);
console.log(proPen);

proPen.color = "red";   //�� �ٷ� proPen ��ü�� color �Ӽ��� �߰� �� ��
console.log('\n' + proPhone.color);
console.log(proPen.color + '\n');

console.log(proPhone);
console.log(proPen);

//prototype ���� �Ӽ��� 