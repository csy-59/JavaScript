let id = setInterval(function(){
    console.log("����մϴ�.");
}, 1000);

setTimeout(function() {
    clearInterval(id);
}, 3000);