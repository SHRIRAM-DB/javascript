//Write a program that uses a for loop to iterate through the numbers from 1 to 20. If the number is even, add it to a total sum. At the end of the loop, print the total sum of all even numbers between 1 and 20.

let sum=0;
for(i=1;i<=20;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);


//Print the first n multiples of 3, print 3 6 9 12 15 ... on separate lines. The program should work for different values of n.

let m=3;
let n=5;
for(i=1;i<=n;i++){
   console.log(i*m);
}

// You are designing a program to determine the outcome 
// of a cricket match based on the Duckworth-Lewis 
// method due to rain interruptions. 
// Declare variables teamScore, targetScore, and oversLeft.
//  If the teamScore is greater than or equal to 
// targetScore, 
// print "Team wins by DL method" 
// If teamScore is less than targetScore 

// but oversLeft is greater than 0, 
// print "Match to be continued" 
// If teamScore is less than targetScore and 
// oversLeft is 0, 
// print "Team loses by DL method"


function cricket(team,target,over){
   if(team>=target){
     console.log("Team wins by DL method")
   }
   else if(team<target && over>0){
   console.log("Match to be continued");
   }
   else if(team<target && over==0){
    console.log("Team loses by DL method");
   }
}
cricket(200,100,10)

