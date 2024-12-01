//Given an array check if its sum of all of its numbers is divisible by 11 or not

let array=[1,2,3,4,12]
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i]
}
console.log(sum);

if(sum%11===0){
    console.log("divisible by 11")
}
else{
    console.log("NOT divisible by 11")
}

let a=17;
let b=108;
let c=786;

let num=a*b*c;
sum=0
for(i=1;i<num;i++){
    if(i%a==0 && i%b===0 && i%c==0){
        sum+=i;
        break;
    }   
}
console.log(sum);



let n=5;
for(i=1;i<=n;i++){
    let str=""
    let gap=""
    for(j=1;j<=i;j++){
        if(i%2==0){
          str+="$ "
        }
        else{
            str+=i+" "
        }
    }
    for(k=0;k<n-i;k++){
        gap+=" "
    }
    console.log(gap+str);
}

for(i=n-1;i>0;i--){
    let str="";
    let gap="";
   for(j=i;j>0;j--){
     if(i%2==0){
        str+="$ "
     }
     else{
        str+=i+" "
     }
   }
   for(k=0;k<n-i;k++){
    gap+=" "
   }
   console.log(gap+str);

}

let names= ["sanjay", "priya", "ramesh", "sanjana"]
let scores = [88, 45, 91, 71]
let first=[0]

for(i=0;i<scores.length;i++){
  if(first<scores[i]){
  first=scores[i]
}
}

let name=scores.indexOf(first)

for(i=0;i<names.length;i++){
   if(name==i)
   console.log(names[i])
}

 n=23;
 string=n.toString().split("").map(Number);
 sum=0
for(i=0;i<string.length;i++){
  sum+=string[i]
}
let divible=n/sum;
if(n%sum==0){
  console.log("Harshed number")
}
else{
  console.log("Not a Harshed number")
}

 n=28;
 sum=0
for(i=1;i<n;i++){
  if(n%i==0){
    sum+=i
  }
}
if(n==sum){
  console.log("Perfect number")
}
else{
  console.log("not a Perfect number")
}


 a=220;
 b=284;
 sum=0
for(i=1;i<a;i++){
  if(a%i==0){
    sum+=i
  }
}
if(b==sum){
  console.log("amicable numbers")
}else{
  console.log(" not amicable numbers")
}

