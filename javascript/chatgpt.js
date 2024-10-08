// a=12;
// b=11;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// if(a%2==0){
//     console.log("even");
    
// }
// else{
//     console.log("odd");
// }

// let price=[30,40,50]
// let changeprice=price.forEach(x =>{
//     return x*2;
// });

// function powerByDigits(number) {
//     let numberOfDigits = 0;
//     let i = number;
//     // find the number of digits
//     while (i > 0) {
//         i = Math.trunc(i / 10);
//         numberOfDigits++;
//     }

//     //Finding the sum of power of digits 

//     i = number;
//     let sum = 0;
//     while (i > 0) {
//         let digit = i % 10;
//         sum += Math.pow(digit, numberOfDigits);
//         i = Math.trunc(i / 10);
//     }

//     console.log(sum);
// }

let sum=0;
let number=1569
let num=number.toString().split("").map(Number)
for(i=0;i<num.length;i++){
    sum+=num[i];
}
console.log(sum);

let array=[[1,2,3],[4,5,6],[7,8,9]];
for(i=0;i<array.length;i++){
    // console.log(array[i][n]);
    for(j=array.length-1;j>=0;j--){
        let v=array[j][i];
        console.log(v);
    }
}

let a=[1,1,3,3,4,9,8,8,7,6,7,5,5,5,7,8,5,4,4]
let b=[1,23,4,5,10]
let join=a.concat(b)
let set=[...new Set(join)]
console.log(set)


s="shriram guna karthi teena"
    let first=s.split(" ")
for(i=0;i<first.length;i++){
        let second=first[i][0].toUpperCase()
        let third=first[i].slice(1)
        console.log(second+third)
}