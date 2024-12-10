let arr=[5,3,4,1,2];

for(i=0;i<arr.length;i++){
  for(j=0;j<arr.length;j++){
    if(arr[i]<arr[j]){
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }
  }
}
console.log(arr)

let array=[5,3,4,1,2];
for(i=0;i<=array.length;i++){
  for(j=0;j<=array[i]+1;j++){
    if(array[i]<array[j]){
    [array[i],array[j]]=[array[j],array[i]]
  }
  }
}
console.log(array)