
List1 = [1,2,3,4,5,6,7,8,9,10];
Split_Value = 3

let arr = []
let count = 0
for(let i=0;i<List1.length;i+=Split_Value){
let array = []
count+=Split_Value;
for(let j=i;j<count;j++){
  if(List1[j] == undefined){
    continue
  }
  else{
  array.push(List1[j])
  }
}
arr.push(array)
}
console.log(arr)






function CommanElement(arr1,arr2){
    let arr = []
    for(i=0;i<arr1.length;i++){
      for(j=0;j<arr2.length;j++){
        if(arr1[i] == arr2[j]){
          arr.push(arr1[i])
          break;
        }
      }
    }
    let array = [... new Set(arr)]
    console.log(array)
  }
  CommanElement([1, 3, 4, 6, 7, 9], [-1, 3]) 
  CommanElement([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])
  CommanElement([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])
  CommanElement([1, 2, 3, 4, 5], [10, 12, 13, 15])
  
