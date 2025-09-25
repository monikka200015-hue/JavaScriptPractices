function main(){
    let A = [[1,3,4],[5,6,7]];
    let b =[[11,12,13,20],[8,5,2,5],[5,5,2,8]];
    let output = matrixMalti(A,b)
    printmatrix(output);
}
main();
function canDoMultiblication(a,b){
    if(a[0].length==b.length){
        return true
    }
    else{
        return false
    }
}

function matrixMalti(a,b){
    if(canDoMultiblication(a,b)){
        let row=a.length;
        let col=b[0].length;
        let colrow=b.length;
        let sum=0;
        let output=Array.from({length:a.length},()=>new Array(b[0].length).fill(0));
        for(let i=0;i<row;i++){
            for(j=0;j<col;j++){
                for(let k=0;k<colrow; k++){
                    sum+=(a[i][k]*b[k][j]);

                }
                output[i][j]=sum;
            }
            return output;
            
        }
    }
    else{
        console.log("can not do the multiplication because the column value of matrix a snd row value of matrix b is different")
        return 0;
    }
}

function printmatrix(a){
    for(let i=0;i<a.length;i++){
        console.log(a[i]);
    }
}