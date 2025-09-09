//for loop
for(let i=0; i<5; i++){
    console.log("hello uki DSA");



    //for loop
    for(let i=0; i<5; i++){
        console.log("i");

    }


    //for loop
    for(let i=1; i<=3; i++){
        console.log("count",i)
    }

}

//for loop
let i=0;
while(i<3){
    console.log( "number':",i);
    i++;
}


    //sum random numbers
    function addnumbers(){
        let sum=0;
        let count=0;
        let randomnumber=0;
        while(randomnumber!=3){
            randomnumber=Math.floor(Math.random()*10);
            console.log(randomnumber);
            sum+randomnumber;
            count++;
        }

        console.log("total value is:"+sum);
console.log("total count is:"+count);

    
}
addnumbers();
