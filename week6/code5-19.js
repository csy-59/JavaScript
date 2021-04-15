let fun;
fun = function() {console.log("첫 함수");};
fun = function() {console.log("다음 함수");};
fun();

(function() {
    console.log(this);
}) ();

(() => {
    a = 10;
    console.log(this);
})();