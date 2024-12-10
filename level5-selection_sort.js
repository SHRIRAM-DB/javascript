

function sectionsort(arr){
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
// sectionsort([{
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

sectionsort([2,5,1,3,4])
sectionsort(["orange","apple","mango"])