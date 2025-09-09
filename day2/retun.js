//return keyword
function name(){
    return"moni"
}
console.log(name())

var num1=10;
var num2=30;

function sum(a,b){
    return a+b;

}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;

}

function div(a,b){
    return a/b;
}

console.log("summation of "+num1+ " and "+num2+" is "+sum(num1,num2));
console.log("subtraction of " +num1+ " and " +num2+" is " +sub(num1,num2));
console.log(" maltipliction of " +num1+ " and " +num2+" is "  +mul(num1,num2));
console.log("devision of " +num1+ " and " +num2+ " is" +div(num1,num2) );