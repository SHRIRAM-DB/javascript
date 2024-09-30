// 1. Fix the issues in this code

calculateArea();
greetUser();

function calculateArea() {
 let radius = 5;
 const PI=3.14;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 let userName = "John";
 console.log(userName);
}

// 2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?

let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count++
}

// 3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!

let temperature = 30;
if (temperature == 20) {
 console.log("It's cold outside.");
} else {
 console.log("It's warm outside.");
}

// 4. Fix the issues in the code so that output is printed correctly

checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num < 0)
    console.log("Negative");
   else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}

//5. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

sum=0;
function sumNumbers(n){
     for(i=0;i<=n;i++){
      sum+=i;
     }
     return sum;
}
let s=sumNumbers(4);
console.log(s);

//6. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.

function calculateFactorial(n){
  let sum=1;
  let i=1;
  while(i<=n){
      sum*=i;
      i++;
  }
  return sum;
}
let b=calculateFactorial(5)
console.log(b);

//7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

function printEvenNumbers(n){
 let i=1;
  while(i<=n){
  if(i%2==0){
    console.log(i);
  }
  i++;
 }
}
printEvenNumbers(10)

//8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.

function sumNumbers(n){
  let sum = 0;
  let i = 1;
    while (i <= n) {
    sum += i;
    i++;
  } 
   return sum;
}
let a=sumNumbers(5);
console.log(a);

//9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

function classifyNumber(a){
  if(a%3==0 && a%5==0){
    console.log("Divisible by both 3 and 5")
  }
  else if(a%3==0){
    console.log("Divisible by 3");
  }
  else if(a%5==0){
    console.log("Divisible by 5");
  }
  else{
    console.log("Not divisible by 5 or 3"); 
  }
}
classifyNumber(9)

//10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.

function getDayName(n){
switch(n){
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");  
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday")
}
return n;
}
let k=getDayName(7);
console.log(k);

// 11. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.

function printMultiplicationTable(n,r){
    for(i=r;i>0;i--){
      sum=n*i;
      console.log(n+"*"+i+"="+sum);
    }
}
printMultiplicationTable(5,6)

// 12. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.

let c=1;
let d=10;
while(c<=d){
  console.log(c+" labs completed");
  c++;
}

// 13. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.

let e=100;
let f=20;
while(f<e){
  console.log(e+"%");
  e=e-5;
 if(f==e){
      console.log("Battery low");
  }
}

//14. A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.

function direction(direction){
    let y=0;
    let x=0;
        switch(direction){
            case "North":
            y+=1
            break;

            case "East":
            x+=1
            break;

            case "West":
            x-=1;
            break;

            case "South":
            y-=1
            break;
        }
        console.log(`${direction} move to ${x},${y}`);
    }
    direction("West")


// 15. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

let height=1000;
for(i=height;i>0;i=i-10){
   console.log(i+"ft");
}
console.log("Flight arrived"); 

// 16. Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.

function runway(n){
  switch(n){
    case 1:
      console.log("Bangalore")
      break;

    case 2:
      console.log("Chennai")
      break;
    
    case 3:
      console.log("Mumbai");
      break;

    case 4:
      console.log("Thiruvananthapuram")
      break;
  }
}
runway(2)

// 17. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

  height=1000;
  for(i=0;i<=height;i=i+10){
    console.log(i+"ft");
  }

  //18. Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.

function earliest(train_department){
    let early=train_department[0];
for(i=0;i<train_department.length;i++)
{
  if(train_department[i]<early){
    early=train_department[i];
  }
}
return early;
}
sum = earliest([10,15,7,20,5]);
console.log(sum);

//19. Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.

let seats = [1,0,1,1,0,0,0,1];
let len= seats.length;
let temp=seats[0];
count=0;
for(let i=0;i<len;i++)
  if(seats[i]===0){
    count++;
}
console.log(`number of seats available are ${count}`);

// 20. Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.

let soldiers = [120, 300, 250, 180, 150];
let tempe=soldiers[0];
for(let i=0; i<soldiers.length;i++){
    if(tempe<soldiers[i]){
        tempe=soldiers[i];
    }
}
console.log(tempe);

// 21. Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

let populations = [50, 60, 70, 80, 90];
 sum=0;
let avg=0;
len=populations.length
for(let i=0;i<len;i++){
    sum+=populations[i];
     avg=sum/len;
}
console.log(avg);

// 22. Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

let water_levels = [30, 50, 20, 40, 60];
temp= water_levels[0];
len=water_levels.length;
for(let i=0;i<len;i++){
    if(temp>water_levels[i]){
        temp=water_levels[i];
    }
}
console.log(temp);

// 23.Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.

let days_until_festival = [30, 15, 45, 10, 25];
temp=days_until_festival[0];
len=days_until_festival.length;
for(let i=0;i<len;i++){
    if (temp>days_until_festival[i]){
        temp=days_until_festival[i];
    }
}
console.log(temp);

// 24.Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

let landing_times = [12, 15, 12, 18, 20];
len=landing_times.length;
temp=landing_times[0];
count=0;
for(let i=0; i<len;i++){
    if(temp===landing_times[i]){
        count++;
        if(count>1){
            console.log("more than one");
        }
    }
}

// 25.Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

let  temperatures = [75, 80, 72, 85, 90];
len= temperatures.length;
temp=temperatures[0];
for(let i=0;i<len;i++){
    if(temperatures[i]>80){
      console.log(temperatures[i]);
    }
}

//26.Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.

let students_per_route = [45, 55, 30, 60, 40];
len=students_per_route.length;
temp=students_per_route[0];
let busNeeded=0;
for(let i=0;i<len;i++){
    if(students_per_route[i]>50){
        busNeeded++;
    }
}
console.log(busNeeded); 

// 27.You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

function week(){
let daily=[10,50,20,40,30];
sum=0;
for(i=0;i<daily.length;i++){
  sum+=daily[i]
}
console.log(sum);
}
week()

// 28.You are given an array of student grades. Write a function that calculates the average grade.

function grade(){
sum=0;
let student=[70,90,60,80,50];
for(i=0;i<student.length;i++){
   sum+=student[i];
}
let n=sum/student.length;
console.log(n)
}
grade()

// 29.You have an array of people ages. Write a function that filters out people who are 18 years old or older.

let people=[20,30,40,50,10];

let ages=people.filter(function(age){
  return age >=18;
})
console.log(ages);

// 30.You have an array of integers. Write a function that returns the count of the even numbers in the array.

let number=[88,44,33,55,33];
let evenNumber=number.filter(function(age){
    return age%2==0;
});
console.log(evenNumber.length)

//31. Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

let colors=["black","red"];
colors.push("white");
colors.push("green");
console.log(colors);

// 32.Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal. 

let fruits=["orange","apple","mango","pine apple","grapes"];
fruits.shift()
fruits.shift()
console.log(fruits);

// 33.Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.

let sports=["cricket","football"]
sports.unshift("hockey")
sports.unshift("kbd")
sports.unshift("tennis")
console.log(sports)

// 34.Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

let devices=["phone","laptop","computer"];
console.log(devices.indexOf("laptop"))

// 35.Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

let string="HTML-CSS-Javascript";
let program=string.split("-");
console.log(program);

// 36.Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse order. Print the reversed array.

let array=[30,40,50,20];
let reverse=[];
for(i=array.length-1;i>=0;i--){
   reverse.push(array.pop());
}
console.log(reverse);

// 37.Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result.

fruits=["apple","mango","orange","green apple"]
fruits.join();
console.log(fruits);

// 38.Write a program to create an object car with properties make, model, and year. Print the model of the car.
 
let car={
   make: "kia",
   model: "kia Sonet",
   year: 2017,
}
console.log(car.model);

// 39.Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.

let arr=[{title:"Tiruppugual",author:"Arunagirinaadhar"},
         {title:"Nanneri",author:"Siva prakasar",}]

   console.log(arr[0].title);

// 40.You have an array of 4 objects, each representing a car with properties brand and model. Write a program to add a new property year to each object and assign a value, then print the updated array.

let cars=[{brand:"Tata Motors",model:"Tata Altroz"},
          {brand:"Mahindra",model:"Mahindra XUV300"},
          {brand:"Kia",model:"Kia Sonet"},
          {brand:"Tata Motors",model:"Tata Punch"},]
    cars[0].years=2009;
    cars[1].years=2010;
    cars[2].years=2011;
    cars[3].years=2012;
    cars[1].model="tata"
    console.log(cars);

// 41.You have an array of 3 objects, each representing a product with properties name and price. Write a program to calculate and print the total price of all the products in the array.

let product=[
  {name:"laptop",price:1000},
  {name:"phone",price:600},
  {name:"bike",price:2000},
]
let prices=(product[0].price)+(product[1].price)+(product[2].price)
console.log(prices);

// 42.   You have an array of 5 objects, each representing a student with properties name and grade. Write a program to find and print the name of the student whose grade is "A".

let student=[
  {name:"Antony",grade:"A"},
  {name:"Amar",grade:"B"},
  {name:"Raj",grade:"C"},
  {name:"Priyanka",grade:"A"},
  {name:"malar",grade:"B"},
]

student.forEach(study =>{
 if(study.grade=="A"){
  console.log(study.name);
 }
});

// 43.Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.

sum=0;
let exam=[40,50,60,90,60]
for(i=0;i<exam.length;i++){
  sum+=exam[i]
}
let p=sum/exam.length;
console.log(p);

// 44.You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.

let testScore=[15,13,9,10,7,14,19];
maximum=Math.max(...testScore);
console.log(maximum);

// 45.Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.

let decimalArr=[10, 7, 12];
let em_arr = [];
for(let i = 0; i < decimalArr.length; i++){
    em_arr.push(decimalArr[i].toString(2));
}
console.log(em_arr);


// 46.Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.
 

function boolean(array1, array2){
  if (array1.length !== array2.length) {
      console.log("Arrays must have the same length");
  }

  const result = array1.map((value, index) => value && array2[index]);

  return result;
}

const array1 = [true, false, true];
const array2 = [false, true, true];

const resultArray = boolean(array1, array2);
console.log(resultArray);


// 47.Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.

let old_price=[83,30,39,20];
let new_price=[100,100,100,50];
for(i=0;i<new_price.length;i++){
  let between=(new_price[i]-old_price[i]);
  let bottom=old_price[i]
  let join=(between/bottom)*100;
  console.log(Math.floor(join)+"%");
}

// 48.Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.

function union(array1, array2) {

  let union = new Set();

  array1.forEach(item => union.add(item));

  array2.forEach(item => union.add(item));

 return Array.from(union);
}

let set1 = [1, 2, 3, 4];
let set2 = [3, 4, 5, 6];

const result = union(set1, set2);
console.log("Union of both sets:", result);

// 49.Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.

function findMode(numbers) {
  const frequency = {};
  
  numbers.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
  });

  let maxCount = 0;
  let mode = null;

  for (const num in frequency) {
      if (frequency[num] > maxCount) {
          maxCount = frequency[num];
          mode = num;
      }
  }

  return mode;
}

const numbers = [1, 2, 3, 3, 4, 4, 4, 5, 5, 6];

const mode = findMode(numbers);
console.log(mode);

// 50.Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.

let time=[30,218,240,21];
for(i=0;i<time.length;i++){
   let hours=Math.floor(time[i]/60);
   let min=time[i]%60;
   console.log(hours,"hours"+" "+min,"minutes");
}

// 51.Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array.

function calculateSimpleInterest(details) {
  return details.map(item => {
      const interest = (item.principal * item.rateOfInterest * item.noOfYears) / 100;
      return interest;
  });
}

const details = [
  { principal: 10000, rateOfInterest: 5, noOfYears: 4 },
  { principal: 15000, rateOfInterest: 4, noOfYears: 3 },
  { principal: 20000, rateOfInterest: 6, noOfYears: 5 },
  { principal: 25000, rateOfInterest: 3, noOfYears: 2 },
  { principal: 30000, rateOfInterest: 5, noOfYears: 1 },
  { principal: 12000, rateOfInterest: 7, noOfYears: 4 },
  { principal: 5000, rateOfInterest: 2, noOfYears: 3 },
  { principal: 40000, rateOfInterest: 6, noOfYears: 2 },
  { principal: 35000, rateOfInterest: 4.5, noOfYears: 3 },
  { principal: 6000, rateOfInterest: 5, noOfYears: 5 }
];

const simpleInterestArray = calculateSimpleInterest(details);
console.log(simpleInterestArray);

// 52.You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. Print the new array.

function calculateTotalMarks(students) {
  return students.map(student => {
      const totalMarks = student.subject1Marks + student.subject2Marks + student.subject3Marks;
      return totalMarks;
  });
}

const students = [
  { subject1Marks: 85, subject2Marks: 90, subject3Marks: 78 },
  { subject1Marks: 70, subject2Marks: 88, subject3Marks: 92 },
  { subject1Marks: 95, subject2Marks: 82, subject3Marks: 89 },
  { subject1Marks: 60, subject2Marks: 75, subject3Marks: 80 },
  { subject1Marks: 88, subject2Marks: 90, subject3Marks: 85 },
  { subject1Marks: 72, subject2Marks: 80, subject3Marks: 77 },
  { subject1Marks: 90, subject2Marks: 95, subject3Marks: 93 },
  { subject1Marks: 50, subject2Marks: 60, subject3Marks: 55 },
  { subject1Marks: 78, subject2Marks: 88, subject3Marks: 80 },
  { subject1Marks: 82, subject2Marks: 85, subject3Marks: 87 }
];

const totalMarksArray = calculateTotalMarks(students);

console.log(totalMarksArray);

//53.You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.

function calculateTotalExpenses(expenses) {
  return expenses.map(expense => {
      const totalExpense = expense.rent + expense.groceries + expense.utilities;
      return totalExpense;
  });
}

const monthlyExpenses = [
  { rent: 1200, groceries: 300, utilities: 150 },
  { rent: 1500, groceries: 250, utilities: 200 },
  { rent: 900, groceries: 350, utilities: 100 },
  { rent: 1100, groceries: 400, utilities: 250 },
  { rent: 1300, groceries: 500, utilities: 150 },
  { rent: 1600, groceries: 200, utilities: 100 },
  { rent: 800, groceries: 300, utilities: 50 },
  { rent: 950, groceries: 450, utilities: 200 },
  { rent: 1250, groceries: 350, utilities: 180 },
  { rent: 1400, groceries: 500, utilities: 300 }
];

const totalExpensesArray = calculateTotalExpenses(monthlyExpenses);

console.log(totalExpensesArray);
