let fun;
fun = function() {console.log("ù �Լ�");};
fun = function() {console.log("���� �Լ�");};
fun();

(function() {
    console.log(this);
}) ();

(() => {
    a = 10;
    console.log(this);
})();