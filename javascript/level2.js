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

let a=1290;
let b=60;
for(i=2;i<=Math.min(a,b);i++){
    if(a%i==0 && b%i==0){
 console.log(i)
    }
}

a=1290;
b=60;
while(b!==0){
   let temp=b;
   b=a%b;
   a=temp;
}
console.log(a);

