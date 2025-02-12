
let arr=[44,23,12];

for(i=1;i<arr.length;i++){
  temp=arr[i];
  j=i-1;
  
  while(j>=0 && temp<arr[j]){
    arr[j+1] = arr[j]
    j = j - 1
  }
  
  arr[j+1] = temp;

}
  console.log(arr.join(" "))
  
