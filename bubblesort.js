function bubbleSort(arr){
    let count = 1
while(count>0){
    count = 0
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            count++
        }
    }
}
    console.log("sorted array")
    console.log(arr)
}
bubbleSort([1,1,5,5,0,4])


let student={
    "name": "shriram",
    "marks": [2,3,4,5,6]
  }
  
  console.log(student.marks)
  
  sum=""
  for(i=0;i<student.marks.length;i++){
  sum+=student.marks[i]+","
  }
  console.log(sum.trim(","))




  
  let arr=[5,4,3,1,2];

for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
     if(arr[j]>arr[j+1]){
         [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
     }   
    }
}
console.log(arr)

 let count=1
while(count>0){
    count=0
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            count++
        }
    }
}
console.log(arr)