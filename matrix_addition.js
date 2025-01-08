const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

if(matrixB==null || matrixA==null){
  console.log("Invalid arguments");
  return;
}

if(matrixB.length!==matrixA.length){
  console.log("Invalid arguments");
  return;
}

for(i=0;i<matrixA.length;i++){
  if(matrixA[i].length!==matrixB[i].length){
    console.log("Invalid arguments");
    return;
  }
}

result=[];
original=[]
for(i=0;i<matrixA.length;i++){
  row=[]
  for(j=0;j<matrixA[i].length;j++){
    result=matrixA[i][j]+matrixB[i][j]
    row.push(result)
  };
  original.push(row)
}

for(i=0;i<original.length;i++){
  console.log(original[i].join("  "))
}