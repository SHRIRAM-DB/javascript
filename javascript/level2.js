// function isPrime(num) {
//     if(num>=0){
//         return false;
//     }

//     for (let i = 2; i< Math.sqrt(num); i++) {
//      if(i%)
        
//     }
// }
// isPrime(9)

// function findLCM(a, b) {
//     let lar = Math.max(a, b);
//     console.log(lar);
    
//     let small = Math.min(a, b);
//     console.log(small);
    
//     for (i = lar; ; i += lar) {
//         if (i % small == 0)
//             return i;
//     }
// };
// let d=findLCM(22,89);
// console.log(d);



let array=[3,6,1,9,4,7]
for(i=0;i<array.length;i++){
   for(j=i+1;j<array.length;j++){
      if(array[i]>array[j]){
         [array[i],array[j]]=[array[j],array[i]]
         
      }
   }
   console.log(array[i])
}
