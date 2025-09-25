let row=3;
let col=5;
let matrix=Gnerate2dArray(row,col)
function Gnerate2dArray(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    return mat;
}


function printArray(mat){
    for(let i=0;i<mat.length;i++){
        console.log(mat[i]);
    }
}
printArray(matrix)

function InverseArray(mat){
    let matx=Array.from({length:mat[0].length},()=>new Array(mat.length).fill(0));
    for(let i=0;i<mat.length;i++){
        for(let j =0;j<mat[0].length;j++){
            matx[j][i]= mat[i][j];
        }
    }
    return matx;
}
let revmet=InverseArray(matrix);
function InverseArray(mat){
    for(let j=0;j<mat.length;j++){
    }
}
console.log(revmet        console.log(mat[j]);
)
