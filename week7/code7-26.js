//���� ����
const javascriptObject = [{ //�ڹٽ�ũ��Ʈ ��ü
    name: "Youn Insung",
    region: "Seoul"
},{
    name: "Youn Maugwarl",
    region: "Tokyo"
}];

//JSON.stringify() �޼ҵ��  ��ü�� JSON ���ڿ��� ����
const outputA = JSON.stringify(javascriptObject);   
const outputB = JSON.stringify(javascriptObject, null,2);   //�̻� ������� ����� 2ĭ�� ����� ���!
console.log(typeof(outputA));   //String
console.log(outputA);
console.log(outputB);
console.log("--------------------");

//JSON.parse() �޼ҵ�� JSON ���ڿ��� ��ü�� ����
const outputC = JSON.parse(outputB);    //object
console.log(typeof(outputC));
console.log(outputC);


//���
/*
string
[{"name":"Youn Insung","region":"Seoul"},{"name":"Youn Maugwarl","region":"Tokyo"}]
[
  {
    "name": "Youn Insung",
    "region": "Seoul"
  },
  {
    "name": "Youn Maugwarl",
    "region": "Tokyo"
  }
]
--------------------
object
[
  { name: 'Youn Insung', region: 'Seoul' },
  { name: 'Youn Maugwarl', region: 'Tokyo' }
]
*/