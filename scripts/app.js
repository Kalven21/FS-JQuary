function sayHello(){
    console.log("hello");    
}
function init(){
    console.log("hello world!");
    sayHello();
}

window.onload = init;