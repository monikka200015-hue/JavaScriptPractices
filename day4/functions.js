function morningGreetings(){
    console.log("goodmorning");
}
function eveningGreetings(){
    console.log("good evening");
}

function greeting(){
    morningGreetings
    eveningGreetings
}

morningGreetings();
greeting();




//passing valuse to the function via parameter
//print the greeting with the name of the person given via parameter
 function greetingsHello(name,town ,age){
    console.log("Hello"+name);
    console.log("welcome to "+town);
    console.log("your age is "+age);
 }

 greetingsHello("moni","sri lanka","25");