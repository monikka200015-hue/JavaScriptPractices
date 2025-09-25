//find the maximum value in each row in given 2d matrix
//1.function for random generation and store in 2d matrix
//2.function for print given matrix
//3.function for finding the maximum value in each row
//4.function to operate all items called main




function main(){
    let row =10,col=5;
    let matrix =setNumbersIn2Darray(row, col);
    console.log("/Your Generated Matrix is: ")
    printMatrix(matrix);
    console.log("/nThe maximum values in each row in given matrix are ")
    findMaxInEachRow(matrix);

}
main();

function setNumbersIn2Darray(row,col){
    let mat=Array.from ({length:row}, ()=> new Array (col).fill(0));
     for(let i= 0; i<row ; i++){
        mat [i]=[];
        for(let j=0; j<col; j++){
            mat [i] [j]=Math.floor(Math.random ()*100+2);
        }
     }
     return mat;
}
function printMatrix(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
}

function findMaxInEachRow(mat){
    for (let i=0; i<mat.length; i++){
        let maxvalue=mat[i][0];
        for (let j=0; j<mat[0].length; j++){
            if(maxvalue<mat[i][j])
                maxvalue=mat[i][j];

        }
        console.log("the Maximum value in row:"+(i+1)+"is"+maxvalue);


    }
}