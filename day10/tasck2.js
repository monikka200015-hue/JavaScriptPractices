
//return reverse of given number
//return sum of digitof given number
//return  
    
 function main(){
    let number=1998;
    console.log("the given number is "+number);
    console.log("the reverse number is : "+reverseNumber(number));
     console.log("The sum og digit is : "+sumofDigit(number));

 }  
 main();
 
 function reverseNumber(num){
    let reverseNumber=0;
    while(num>0){
        reverseNumber*=10;
        reverseNumber+=(num%10);
        num=Math.floor(num/10);

    }
    return reverseNumber
 }




 
 function reverseNumber(num){
    let reverseNumber=0;
    while(num>0){
        reverseNumber*=10;
        reverseNumber+=(num%10);
        num=Math.floor(num/10);

    }
    return reverseNumber
 }

 function sumofDigit(num){
    let sum=0;
    while(num>0){
        sum+=(num%10);
        num=Math.floor(num/10);

    }
    if(sum<10)
        return sum;
    else
        return sumofDigit(sum);
 }



