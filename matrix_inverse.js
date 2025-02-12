// m=matrixA
// b=[]
// for(i=0;i<matrixA.length;i++){
// a=matrixA[i].reverse("")
// b.push(a)
// }
// console.log(b.reverse(""))

//----------------------------------------------------------
const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

if(matrixA==null){
    console.log("Invalid ");
    
}

result=[]
original=[]
for(i=matrixA.length-1;i>=0;i--){
  row=[]
  for(j=matrixA[i].length-1;j>=0;j--){
    result=matrixA[i][j]
    row.push(result)
  }
   original.push(row)
}

for(i=0;i<matrixA.length;i++){
console.log(original[i].join(" "))
}
