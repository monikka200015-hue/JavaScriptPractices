//bottom right triangl

//***** 
// ****
//  ***
//   **
//    *

let row=5;
console.log("bottom right triangle");
for(let i=row; i>=1; i--){
    let pattern="*";
    let space=' ';
    console.log(space.repeat(row-i)+pattern.repeat(i));
}