let letter="a";
function isVowel(i){
    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u")
        console.log("yes, "+i+" is a vowel letter.");
    else
        console.log("no,"+i+" isn't a vowel letter.");

}
isVowel(letter);


var num=539
function RevesNumber(num){
    let RevesNum=0;
    while(num>0){
        RevesNum=(RevesNum*10)+(num%10);
        num=Math.floor(num/10);
       
    }
    return RevesNum;
}
console.log("The reverse number of "+num+" is "+RevesNumber(num));


let size = 8;
let randomArray = [];

for (let i = 0; i < size; i++){
    randomArray.push(Math.floor(Math.random() * 100) +1);

}
//console.log(randomArray);

function Addnumber(randomArray){
    let sum = 0;
    for (let i=0;i<randomArray.length;i++){
        sum+=randomArray[i];
    }

    return sum;
    
}
console.log(Addnumber(randomArray));




let array=1[];
function generadArrayNunbers(){
    let length = Math.floor(Math.random()*10+11);
    let arr=[]
}