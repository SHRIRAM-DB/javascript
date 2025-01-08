arr=[1,2,2,3,5,5,2];

count1=0;
A="";
for(i=0;i<arr.length;i++){
count2=0;
for(j=1;j<arr.length;j++){
  if(arr[i]==arr[j]){
    count2++;
  }
}
if(count1<count2){
  count1=count2;
  A=arr[i];
}
}
console.log(count1)
console.log(A)