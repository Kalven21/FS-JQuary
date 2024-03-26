function sayHello(name, lastName){
    console.log("Hello "+ name + " " + lastName);    
}
function sum(num1,num2){
    const result = num1 + num2;
    return result;
}
function init(){
    console.log("hello world!");
    const x = "Kevin";
    sayHello(x ,"Zamora");
    const result = sum(21,21);
    console.log(result);
}

window.onload = init;