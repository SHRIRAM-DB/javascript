// //Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.

// function earliest(train_department){
//     let early=train_department[0];
// for(i=0;i<train_department.length;i++)
// {
//   if(train_department[i]<early){
//     early=train_department[i];
//   }
// }
// return early;
// }
// let sum = earliest([10,15,7,20,5]);
// console.log(sum);

// //Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats

// let seats = [1,0,1,1,0,0,0,1];
// let len= seats.length;
// let temp=seats[0];
// let count=0;
// for(let i=0;i<len;i++)
//   if(seats[i]===0){
//     count++;
// }
// console.log(`number of seats available are ${count}`);

// //Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.

// let soldiers = [120, 300, 250, 180, 150];
// let tempe=soldiers[0];
// for(let i=0; i<soldiers.length;i++){
//     if(tempe<soldiers[i]){
//         tempe=soldiers[i];
//     }
// }
// console.log(tempe);

// //Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

// let populations = [50, 60, 70, 80, 90];
// let sum=0;
// let avg=0;
// let len=populations.length
// for(let i=0;i<len;i++){
//     sum+=populations[i];
//      avg=sum/len;
// }
// console.log(avg);

// //Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

// let water_levels = [30, 50, 20, 40, 60];
// let temp= water_levels[0];
// let len=water_levels.length;
// for(let i=0;i<len;i++){
//     if(temp>water_levels[i]){
//         temp=water_levels[i];
//     }
// }
// console.log(temp);

// //Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.

// let days_until_festival = [30, 15, 45, 10, 25];
// let temp=days_until_festival[0];
// let len=days_until_festival.length;
// for(let i=0;i<len;i++){
//     if (temp>days_until_festival[i]){
//         temp=days_until_festival[i];
//     }
// }
// console.log(temp);

// //Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

// let landing_times = [10, 15, 12, 18, 10];
// let len=landing_times.length;
// let temp=landing_times[0];
// let count=0;
// for(let i=0; i<len;i++){
//     if(temp===landing_times[i]){
//         count++;
//         if(count>1){
//             console.log("more than one");
//         }
//     }
// }

// //Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

// let  temperatures = [75, 80, 72, 85, 90];
// let len= temperatures.length;
// let temp=temperatures[0];
// for(let i=0;i<len;i++){
//     if(temperatures[i]>80){
//         console.log(temperatures[i]);
//     }
// }

// //Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.


// let students_per_route = [45, 55, 30, 60, 40];
// let len=students_per_route.length;
// let temp=students_per_route[0];
// let busNeeded=0;
// for(let i=0;i<len;i++){
//     if(students_per_route[i]>50){
//         busNeeded++;
//     }
// }
// console.log(busNeeded); 

// let fruits=["apple","orange","mango","grapes"]
// fruits.push("fig");
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// let avengers="sheriff,kottai,karthi,shriram,sups,santhosh"
// let algorithm=avengers.split(",")
// console.log(algorithm);

// function expenses(n){
//     let sum=0;
//     for(i=0;i<n.length;i++){
//         sum=sum+n[i]
//     }
//      console.log(sum)
// }
// expenses([100,200,300])

// function average(a){
//     let sum=0;
//     for(i=0;i<a.length;i++){
//         sum=sum+a[i];
//     }
//     num=sum/i;
//     console.log(num)
// }
// average([95,38,57,37,85])

// function age(n){
//     for(i=0;i<n.length;i++){
//         if(n[i]>=18){
//             console.log(n[i])
//         }
//     }
// }
// age([30,27,12,49,38])

// function evenNumber(n){
//     count=0;
//     for(i=0;i<n.length;i++){
//         if(n[i]%2==0){
//             count++;
//         }
//     }
//     console.log(count)
// }
// evenNumber([90,80,73,94,78])

// function evenNumber(even){
//     for(i=0;i<even.length;i++){
//         if(even[i]%2==0){
//             console.log(even[i])
//         }
//     }
// }
// evenNumber([88,34,68,32,33,99])

// function evenNumber(n){
//     for(i=0;i<n.length;i++){
//         if(n[i]%2==0){
//             console.log(i);
//         }
//     }
// }
// evenNumber([55,99,78,34,88])

// function number (num){
//     for(i=0;i<num.length;i++){
//         for(j=i+1;j<num.length;j++){
//             if(num[i]==num[j]){
//                 return "yes";
//             }
                
//         }
//     }
//     return "no";
// }
// let sum= number([12,8,12,15,15])
// console.log(sum);

// function number(){
//     sum=" ";
//     count=0;
//     for(i=0;sum<=10000;i++){
//         sum+=i;
//         count++
//     }
//     console.log(5**i);
//     console.log(count);
//     }
//     number()

// function digit(num){
// let sum=0;
// while(num>0){
//     let rem=num%10;
//     num=Math.floor(num/10);
//     sum+=rem;
// }
// return sum;
// }
// let b=digit(1569)
// console.log(b)

// function findElement(cities){
// if(cities.indexOf("chennai")>=0){  // 
//     console.log("found")
// }else{
//     console.log("not found")
// }
// }
// findElement(["hyderabad", "chennai", "bangalore"])

// let array=["one","two","three","four","five"];
// let str=" ";
// for(i=array.length-1;i>=0;i--){
//   str+=array[i]+" "
// }
// console.log(str);

// let fruits=["apple","orange","mango"];
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// fruits.forEach((fruit) => {
// console.log(fruit);

// })

// let sum=0;
// let avg=[40,80,91,93,95];
// for (i=0;i<avg.length;i++){
//     sum+=avg[i];
// }
// let s=sum/avg.length;
// console.log(s);

// 1. Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant.

let n="b";
if(n=="a"||n=="A"||n=="e"||n=="E"||n=="i"||n=="I"||n=="o"||n=="O"||n=="u"||n=="U"){
    console.log("The character is a vowel");
}
else{
    console.log("The character is not a vowel")
}

// 2. Given three numbers a, b, c print the maximum number amongst the three.

let a=10;
let b=20;
let c=30;
if(a>=b && a>=c){
    console.log(a);
}
else if(b>=a && b>=c){
    console.log(b);
}
else {
    console.log(c);
}

// 3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term if n = 4, print the first 4 odd numbers 1 3 5 7.

let m=1
n=4;
for(i=1;i<=n;i++){
    console.log(m);
    m=m+2;
}

// 4.If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days.

n=10;
let s=2;
let sum=0;
let initialDiscount=5
for(i=1;i<=n;i++){
   console.log("Day"+i+":"+initialDiscount+"%");
   sum+=initialDiscount;
   initialDiscount+=s;
}
console.log(sum+"%");




// 5.. Complete the program printAllMultiplesOf5Bet(a, b) 
//  eg, printAllMultiplesOf5Bet(10, 30) in reverse

function printAllMultiplesOf5Bet(a,b){
    for(i=b;i>=a;i=i-5){
       console.log(i);
    }
}
printAllMultiplesOf5Bet(10,30)