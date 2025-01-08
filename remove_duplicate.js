arr=[4,3,2,3,4,5]
arr_2=[3,6,2,6];
array=[]
for(i=0;i<arr.length;i++){
    isduplicate=false;
    for(j=0;j<array.length;j++){
        if(arr[i]==array[j]){
        isduplicate=true;
        break;
        }
    }
    if(!isduplicate){
       array.push(arr[i])
    }
}

for(i=0;i<arr_2.length;i++){
       isduplicate=false;
    for(j=0;j<array.length;j++){
        if(arr_2[i]==array[j]){
            isduplicate=true;
            break;
        }
    }
    if(!isduplicate){
        array.push(arr_2[i])
    }
}
console.log(array)



