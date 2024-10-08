// let number=[10,40,30,58]
// let fivenumber=number.filter(num)

// function num(sum){
//     return sum%5==0
// }
// console.log(fivenumber)

// for(i=0;i<number.length;i++){
//     if(number[i]%5===0){
//         console.log(number[i]);
//     }
// }

// let age=[20,49,294,12,5];
// let miner=age.filter(ages)

// function ages(nan){
//     return nan<18;
// }

// console.log(miner);

// let people=[{name:"subs",age:20},
//             {name:"karthi",age:17},
//             {name:"sheriff",age:21}]
            
//             let under18=people.filter(person => person.age >=18)
            
//             console.log(under18)
            
// age=[29,22,39,2,48];
// let adult=age.filter(function(adults){
//     return adults>=18
// });
// console.log(adult);

// let number=[78,3,58,20,4,27,20];

// let even_number=number.filter(function(even){
//     return even%2===0
// });

// let odd_number=number.filter(function(odd){
//   return odd%2==1
// });

// console.log(even_number,odd_number)

// let fruits=["mango","apple","cherry"];
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })


// console.log(fruits.indexOf("apple"))

// let a=1;
// let n=4
// for(i=a;i<=n;i++){
//     a*=i
// }
//  console.log(a)

//  let a="toy"
// let b=["chocolate"];
// let user=2;
// if(user===1){
//     console.log(a)
// }
// else if(user===2){
//     console.log(b[0]);
// }
// else{
//     console.log("empty")
// }

// let word="Malayalam";
// let letters=word.split("")
// let reverseletter=letters.reverse();
// let reverseword=reverseletter.join("")
// console.log(word)
// console.log(reverseword)
// if(word.toLowerCase()==reverseword.toLowerCase()){
//     console.log("It is a palindrom")
// }
// else{
//     console.log("It not a palindrom")
    
// }

// function diagonalDifference(arr) {
    
//     let primaryDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;
    
//     let n = arr.length; 
    
//     for (let i = 0; i < n; i++) {

//         primaryDiagonalSum += arr[i][i];

//         secondaryDiagonalSum += arr[i][n - 1 - i];
//     }

//     // Calculate and return the absolute difference
//     return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

// }
// let sum=arr[1,2,3,4,4,5,6,7,8]
// console.log(sum)

// et arr=[1,2,3,4,5,6]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%3===0){
//      console.log("Multiply by 3")
//     }
//     else if(arr[i]%5===0){
//         console.log("Multiply by 5")
//     }
//     else if(arr[i]%3!==0&&arr[i]%5!==0){
//       console.log(arr[i])
//     }
      
// }

// function compareTriplets(a, b) {
//     let bob=0;
//      let alice=0;
//      for(let i=0;i<3;i++){
//          if(a[i]>b[i]){
//              alice+=1;
//          }
//          else if(a[i]<b[i]){
//              bob+=1;
//          }
//      }  
//      return [alice,bob];
//   }
  
//   var a=[17,28,30]
//   var b=[99,16,8]
  
//   let result=compareTriplets(a,b);
//   console.log(result);

//   function fibonacci(n){
//     if(n===1){
//         console.log("1")
//         return;
//     }
//     if(n===2){
//         console.log("1,1")
//         return
//     }
//     let output="1,1";
//     let pterm=1;
//     let ppterm=1;
    
//     for(i=2;i<=n;i++){
//         current=pterm+ppterm;
//         ppterm=pterm
//         pterm=current;
//         output=output+","+current
//     }
//     console.log(output)
// }
// fibonacci(9)


// let sum=0;
// let arr=[1,2,3]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// let a=Math.sqrt(144)
// console.log(a);
// if(a==Math.trunc(a)){
//     console.log("perfect sqare number")
// }
// else{
//     console.log("not perfect sqare number"); 
// }

            
// let array=[1,2,3,4]
// sum=0
// num=0
// for(i=0;i<array.length;i++){
// let sum=(array[i]**array.length)
//   num+=sum
// }
// console.log(num)

// let a=4
// let b=9
// if(a>b){
//     console.log(b)
// }
// else{
//     console.log(a)
// }

// console.log(b%a)
// console.log(Math.cbrt(64));

// console.log(Math.pow(a,3))

// let a = 78.1
// console.log(Math.trunc(a))
// let find=a-Math.floor(a)
// let num=find.toFixed(1) * 10;
// console.log(num)

// let sum=1
// function factorial(n){
//     for(i=1;i<=n;i++){
//         sum*=i
//     }
//     return sum
// }
// console.log(factorial(5))

// let n=10;
// let s=0
// for(i=1;i<=n;i++){
//     s+=i
// }
//  console.log(s)
 
//  let name="Madam";
//  let palindrom=name.split("").reverse().join("")
//  console.log(palindrom)
 
//  let name=["Madam"]
//  let nam=name.join("")
// let palindrom=nam.split("").reverse().join("")
// console.log(palindrom)

// let number=[1234]
//  num=number.join("")
// let numbers=num.split("").reverse().join("")
// console.log(numbers)

// s="shriram guna karthi"
//     let first=s.split(" ")
// for(i=0;i<first.length;i++){
//     let second=first[i][0].toUpperCase()
//     console.log(second)
// }

// let sum=0;
// let number=1569
// let num=number.toString().split("").map(Number)
// console.log(num)
// for(i=0;i<num.length;i++){
//     sum+=num[i]
// }
//   console.log(sum)
  
//   let srr=[1,2,3]
//   let str="1,2,3"
//   console.log(srr==str)
  
//   let a=15
// let b=a.toString().split("").reverse().join("")
// let c=Math.pow(a,2)
// let d=Math.pow(b,2)
// if(c==d.toString().split("").reverse().join("")){
//     console.log("it is a adam number")
// }
// else{
//     console.log("it is not a adam number")
// }
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let num=339;
console.log(num%2==0?"even":"odd")