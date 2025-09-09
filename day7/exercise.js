
//write a program that checks if a number is positive,negative,or zero
function checkNumber(num){
    if (num>0){
        return "it is a positive number";

    }
    else if (num<0){
        return "it is a negative number";
    }
    else if(num=0){
        return"it is a zero"
    }
}
let num=-550;
let result=checkNumber(num);
console.log(result);

//ask the user for their age.if the age is 18 or older.print "you can vote" otherwise "you cannod"

function checkage(age){
    if (age>=18)
        return "you can vote";
    else if(age<=18)
        return "you cannot vote";

}let age=20
console.log (checkage(age))


//check if a given number is odd or even


function checkNumber(number){
    if (number%2==0)
        return "even";
    else 
        return"odd";
}
let number=14
console .log(checkNumber(number))




//write a program that takes three numbers and prints the largest number.

let num1 = 90
 let num2= 50
 let num3= 250

 function checkNumber(num1, num2,num3){

    if (num1 > num2 && num1>num3)
        return "num1 is the largest"
    else if (num2>num3 && num2>num1)
        return "num2 is the largest"
    else
        return "num3 is a  the largest"
    

 }
 console.log(checkNumber(num1,num2,num3))

