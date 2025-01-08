function selectionsort(arr){
let n= arr.length;
for(let i=0;i<n;i++){
    let min=i;
    for(let j=i+1;j<n;j++){
        if(arr[min]>arr[j]){
           min=j;
        }
    }
    if(i !== min){
        [arr[i],arr[min]]=[arr[min],arr[i]];
    }
}
console.log(arr);
}
// selectionsort([{
//     "name": "shriram",
//     "age": 18,
//     "id": 1
// },
// {
//     "name": "vaseem",
//     "age" : 20,
//     "id"  : 0
// },
// {
//     "name": "krishna",
//     "age" : 18,
//     "id"  : 3
    
// }])

selectionsort([2,5,1,3,4])
selectionsort(["orange","apple","mango"])



