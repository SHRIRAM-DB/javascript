a=15;
b=20;
let num=a*b;
let sum=1;
for(i=1;i<=num;i++){
   if(i%a==0 && i%b==0){
      sum=i;
      break;
   }  
}
console.log(sum)

console.log("2-----------------------------------------------------------------------------------------------");

n=3

for(i=1;i<=n;i++){
    res=""
    gap=""
    sys=""
    for(j=i;j>0;j--){
        sys+="*"+" "
    }
    for(k=n-i;k>0;k--){
        gap+=" "
    }
    res=gap+sys
    console.log(res)
}

console.log("3-----------------------------------------------------------------------------------");

for(i=n;i>=1;i--){
    res="";
    gap="";
    sys="";
    for(j=1;j<=i;j++){
        sys+="*"+" "
    }
    for(k=0;k<n-i;k++){
        gap+=" "
    }
    res=gap+sys;
    console.log(res)
}
console.log("4----------------------------------------------------------------------------------------------------");

let g=3
num=1;
sum=1;
for(i=1;i<=g;i++){
   
    let gap=""
    let sys=""
    for(j=num;j>=1;j--){
        sys+="*"+" "
    }
    for(k=g+sum;k>0;k--){
        gap+=" "
    }
    console.log(gap+sys)
    num+=2;
    sum-=2;
}
console.log("5--------------------------------------------------------------------------------------------------");

count=g+(g-1);
sum=0
for(i=g;i>0;i--){
  let sys="";
  let gap="";
  for(j=1;j<=count;j++){
    sys+="*"+" "
  }
  for(k=0;k<sum;k++){
    gap+=" "
  }
  console.log(gap+sys)
  count-=2
  sum+=2
}
console.log("6-----------------------------------------------------------------------------------------------");

for(i=1;i<=n;i++){
    res=""
    gap=""
    sys=""
    for(j=i;j>=1;j--){
        sys+="*"+" "
    }
    for(k=n-i;k>0;k--){
        gap+=" "
    }
    res=gap+sys
    console.log(res)
}

for(i=n;i>=1;i--){
    res="";
    gap="";
    sys="";
    for(j=2;j<=i;j++){
        sys+="*"+" "
    }
    for(k=0;k<=n-i;k++){
        gap+=" "
    }
    res=gap+sys;
    console.log(res)
}

console.log("7------------------------------------------------------------------------------------------");

n=43;
prime=true;
for(i=2;i<n;i++){
  if(n%i==0){
    prime=false;
    console.log("not prime")
    break;
  }
}
if(prime){
  console.log("prime")
}

console.log("8-------------------------------------------------------------------------------------");

s=3;
for(i=1;i<=s;i++){
    let str=""
  for(j=1;j<=s;j++){
     str+="*"+" "
  }
  console.log(str)
}

console.log("9----------------------------------------------------------------------------------------");


g=3
count=1
sum=1
for(i=1;i<=g;i++){
   
    let gap=""
    let sys=""
    for(j=count;j>=1;j--){
        sys+="*"+" "
    }
    for(k=g+sum;k>0;k--){
        gap+=" "
    }
    console.log(gap+sys)
    count+=2;
    sum-=2;
}

count=g;
sum=2;
for(i=sum;i>0;i--){
  let sys=""
  let gap=""
  for(j=1;j<=count;j++){
    sys+="*"+" "
  }
  for(k=0;k<sum;k++){
    gap+=" "
  }
  console.log(gap+sys)
  count-=2;
  sum+=2
}

console.log("10--------------------------------------------------------------------------------------------");

n=5;
for(i=0;i<=n;i++){
  let sys=""
  for(j=n-i;j>0;j--){
    sys+=j+" "
    
  }
  console.log(sys)
}

console.log("11----------------------------------------------------------------------------------------------------");

a=18;
b=12;
num=a*b
for(i=1;i<=num;i++){
    if(a%i==0 && b%i==0){
        sum=i
    }
}
console.log(sum)

console.log("12-----------------------------------------------------------------------------------------------------------")

let number=789;
let total=0;
value=number;
while(value>0){
    reminder=value%10;
    value=Math.floor(value/10);
    total=(total*10)+reminder;
}
console.log("Reverse Number"+total);

console.log('13-------------------------------------------------------------------------------------------------');

n=3;
for(i=1;i<=n;i++){
  let str=""
  for(j=1;j<=i;j++){
    str+=i+" "
  }
  console.log(str)
}

console.log("14----------------------------------------------------------------------------------------------------");


for(i=n;i>=1;i--){
  str="";
  for(j=1;j<=n;j++){
    str+="*"+" "
  }
  console.log(str)
  n--
}

console.log("15----------------------------------------------------------------------------------------");

n=3
count=n+(n-1);
for(i=1;i<=n;i++){
  let str=""
  let gap=""
  for(j=1;j<=count;j++){
    str+="*"
  }
  for(k=1;k<i;k++){
    gap+=" "
  }
   console.log(gap+str)
  count-=2
}

count=n
for(i=2;i<=n;i++){
  let str=""
  let gap=""
  for(j=1;j<=count;j++){
    str+="*"
  }
  for(k=n-i;k>0;k--){
    gap+=" "
  }
  console.log(gap+str)
 count+=2
}

console.log("16--------------------------------------------------------------------------------------------");

n=6;
for(i=n;i>0;i--){
  let str=""
  for(j=i;j<=n;j++){
    str+=i+" "
  }
  console.log(str)
}

console.log("17-------------------------------------------------------------------------------------------");

str=""
for(i=1;i<=n;i++){
  str+="*"
  let gap=""
  for(j=n-i;j>0;j--){
    gap+=" "
  }
  console.log(gap+str)
}

console.log("18------------------------------------------------------------------------------------------------");

count=0
for(i=0;i<=n;i++){
  str=""
  gap=""
  for(j=1;j<=n-i;j++){
    str+=j
  }
  for(k=0;k<count;k++){
    gap+=" "
  }
  console.log(gap+str)
  count++
}

console.log("19-------------------------------------------------------------------------------------------");

count=1
row=4
for(i=1;i<=row;i++){
str=""
for(j=1;j<=i;j++){
  str+=count+""
  count++
}
console.log(str)
}

console.log("20-----------------------------------------------------------------------------------------");

n=4
str=""

for(i=1;i<=n;i++){
  str+="*"
  console.log(str)
}

for(j=1;j<=n;j++){
  s=""
  for(k=n-j;k>0;k--){
    s+="*"
  }
  console.log(s) 
}

console.log("21--------------------------------------------------------------------------------------------------------");

a=4;
sum=0
for(i=0;i<=a;i++){
  let str=""
  let gap=""
  for(j=1;j<=n-i;j++){
    str+=j+" "
  }
  for(k=0;k<sum;k++){
    gap+=" "
  }
  console.log(gap+str)
  sum++
}

console.log("22-----------------------------------------------------------------------------------------");

n=3
for(i=1;i<=n;i++){
   let str=""
   let gap=""
   for(j=1;j<=i;j++){
    str+="*"+" "
   }
   for(k=0;k<=n-i;k++){
    gap+=" "
   }
   console.log(gap+str);
   
}

console.log("23-----------------------------------------------------------------------------------------");

n=3;
for(i=1;i<=n;i++){
  let str=""
  let gap=""
  for(j=1;j<=i;j++){
    str+=j+" "
    }
    for(k=0;k<n-i;k++){
     gap+=" "
    }
    console.log(gap+str)
}
sum=n;
for(i=n;i>0;i--){
  let str=""
  let gap=""
  for(j=1;j<sum;j++){
    str+=j+" "
  }
  for(k=0;k<=n-i;k++){
    gap+=" "
  }
  console.log(gap+str)
  sum--;
}

console.log("24-----------------------------------------------------------------------------------------");

n=5;
num=0;
for(i=1;i<=n;i++){
sum=1;
for(j=1;j<=i;j++){
  sum*=j;
}
  num+=sum;
}
console.log("factorial: "+num);

n=5;
sum=0;
num=1;
for(i=1;i<=n;i++){
  num*=i;
  sum+=num;
}
console.log("factorial: "+sum)

console.log("25-----------------------------------------------------------------------------------------");


n=5;
for(i=1;i<=n;i++){
  let str=""
  for(j=1;j<=n;j++){
    if(i===1 || i===n || j===1 || j===n){
      str+="*"
    }
    else{
      str+=" "
    }
  }
  console.log(str)
}

console.log("26-----------------------------------------------------------------------------------------");

n=3;
for(i=n;i>0;i--){
  let str=""
  let gap=""
  for(j=i;j>0;j--){
    str+=j;
  }
  for(k=0;k<n-i;k++){
    gap+=" "
  }
   console.log(gap+str);
}
  
console.log("-------------------------------------------27----------------------------------------------");   

let arr=[2,1,3,7,4];
let first=arr[0];
for(i=0;i<arr.length;i++){
  if(first<arr[i]){
     first=arr[i]
  }
}
console.log(first)

console.log("------------------------------------------------28-------------------------------------------------------------------------------------------------");

n=9999;

let tens=Math.floor(n/10);
let ones=n%10;

let add=tens+ones;

let multi=tens*ones;

if(add+multi===n){
  console.log("special Number")
}
else{
  console.log("not a special Number")
}

console.log("-----------------------------------------29------------------------------------------------------")

 m = 9;
 n = 19;
let outputStr = "";
for(let i = m; i <= n; i++) {
    // Given a number whether 
    // check whether is is prime or not
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if(i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime && outputStr === "") {
        outputStr = outputStr + i;
    }
    else if(isPrime) {
        outputStr =  outputStr + ", " + i;
    }
    else {
        continue;
    }
}
console.log(outputStr);

console.log("-------------------------------------30-----------------------------------------------------");

function fibonacci(n) {
  if (n === 1) {
      console.log("1");
  }
  if(n === 2) {
      console.log("1, 1");
  }

  let outputStr = "1, 1";
  let pTerm = 1; // Previous Term
  let ppTerm = 1;// Previous Pervious Term

  for (let i = 3; i <= n; i++) {
      currTerm = pTerm + ppTerm;
      ppTerm = pTerm;
      pTerm = currTerm;
      outputStr = outputStr + ", " + currTerm;
  }
  console.log(outputStr);
}
fibonacci(10);

console.log("--------------------------------------31----------------------------------------------------");

n=4;
str="";
for(i=1;i<=n;i++){
  if(i%2===0){
    str+="**"
     console.log(str)
  }
  
  else if(i%2!==0){
    console.log(i)
  }
 
}

console.log("------------------------------------32---------------------------------------------------");

n=5;

for(i=1;i<=n;i++){
  let str=""
  let gap=""
  for(j=1;j<=i;j++){
    str+=i+" "
  }
  for(k=1;k<=n-i;k++){
    gap+=" "
  }
  console.log(gap+str)
}

console.log("--------------------------------------------------33------------------------------------------");


n=12;
number=n
str=0;
while(n>0){
 reminder=n%10;
 n=Math.floor(n/10);
 str+=reminder;
}
if(number%str===0){
 console.log("Harshad")
}
else{
 console.log("Not Harshad")
}


console.log("---------------------------------------------34--------------------------------------------------")


a=10;
sum=0
for(i=1;i<=a;i++){
  prime=true;
  for(j=2;j<i;j++){
    if(i%j==0){
    prime=false;
    break;
    }
  }
    if(prime && i!==1){
      sum+=i;
  
    }
}
     console.log(sum)

console.log("----------------------------------------------------35------------------------------------------------");

n=3;

for(i=1;i<=n;i++){
  let str=""
  let gap=""
  for(j=1;j<=i;j++){
    str+=j+" "
  }
  for(k=0;k<n-i;k++){
    gap+=" "
  }
  console.log(gap+str)
}

for(i=n;i<=1;i--){
  let str=""
  let gap=""
  for(j=1;j<=n;j++){
    str+=j+" "
  }
  for(k=n-i;k>0;k--){
    gap+=" ";
  }
  console.log(gap+str);
  
}

console.log("-----------------------------------------------------36-------------------------------------------");


arr=["zero ","one ","two ","three ","four ","five ","six ","seven ","eight ","nine "]

n=123;
total=0
sum=0
str="";
while(n>0){
  reminder=n%10;
  n=Math.floor(n/10);
  total=(total*10)+reminder;
}
let tot=total

while(tot!==0){
  reminder=tot%10
  tot=Math.floor(tot/10);
  for(i=1;i<=reminder;i++){
    sum=arr[i]
  }
  str+=sum
 
}
 console.log(str)

console.log("---------------------------------------------------------------37-----------------------------------");

k=121;
number=k.toString().split("").map(Number)

n=k;
m=k;
sum=0
add=0
while(n>0){
  reminder=n%10;
  n=Math.floor(n/10)
  sum+=reminder
}

while(m!==0){
  reminder=m%10;
  m=Math.floor(m/10)
  sqrt=Math.pow(reminder,number.length)
  add+=sqrt
}
  
  if(k==add){
    console.log("Armstrong Numbers")
  }
  else{
    console.log("Not a Armstrong Numbers")
  }
  

console.log("---------------------------------------------38------------------------------------------")

 n=999;

 square=Math.pow(n,2)
 console.log(square)
 length=square.toString().split("").map(Number)
 console.log(length)
 off=length.length/2;
 console.log(off)
 firstoff=square.toString().slice(0,off)
 console.log(firstoff)
 secondoff=square.toString().slice(off)
 console.log(secondoff)
 answer=Number(firstoff)+Number(secondoff);
 console.log(answer)
if(n==answer){
  console.log("Kaprekar Numbers")
}
else{
  console.log("Not a Kaprekar Numbers")
}

console.log("-----------------------------------------39-----------------------------------------");

function lcm(a,b){

  num=a*b;
  for(i=1;i<num;i++){
    if(i%a==0 && i%b==0){
       break;
    }
  }
  console.log(i)
  }
  lcm(5,7)
  
console.log("-------------------------------------------------40---------------------------------------------");


 n=4;
  for(i=1;i<=n;i++){
    let str="";
    let gap="";
    for(j=1;j<=i;j++){
      if(i%2==0){
        str+="* "
      }
      else{
        str+=i+" "
      }
    }
    for(k=n-i;k>0;k--){
        gap+=" "
      }
    console.log(gap+str)
  }

console.log("---------------------------------------------------41-----------------------------------------");


//Write code to implement the fibonacci sequence.


 n=8;

if(n==1){
  console.log("0")
  return;
}
else if(n==2){
  console.log("0, 1")
  return;
}

 output="0, 1"
 pterm=0;
 ppterm=1;
for(i=3;i<=n;i++){
  currentterm=pterm+ppterm
  output=output+", "+currentterm;
  pterm=currentterm;
  ppterm=pterm;
  
}
console.log(output)


console.log("--------------------------------------------------42-----------------------------------------");

 n=5;
 str=""

for(i=1;i<=n;i++){
  if(i%2==0){
    str+="# ";
  }
  else{
    str+=i+" "
  }

}
  console.log(str)

  console.log("----------------------------------------------------43--------------------------------------");
  
  count=1;
  row=6;
  for(i=1;i<=row;i++){
    let str=""
    for(j=1;j<=i;j++){
        if(count>=11){
            str+=count+" ";
            count++
        }else{
      str+=count+"  ";
      count++;
    }
    }
    console.log(str)
  }


console.log("-----------------------------------------44----------------------------------------------------");


n=4;

for(i=1;i<=n;i++){
    let str="";
    for(j=1;j<=i;j++){
        if(j%2==0){
            str+="0"+" ";
        }
        else{
            str+="1"+" ";
        }
    }
    console.log(str)
}


console.log("--------------------------------------------45------------------------------------------------");

 n=4;
 m=n;
for(i=1;i<=n;i++){
  let str="";
  let gap="";
  for(j=1;j<=i;j++){
    str+=j+" "
  }
  for(k=n-i;k>0;k--){
    gap+=" "
  }
  console.log(gap+str)
}


 o=n;
for(i=1;i<=n;i++){
  let str="";
  let gap="";
  for(j=1;j<=m-1;j++){
    str+=j+" ";
  }
  for(k=1;k<=i;k++){
    gap+=" "
  }
  console.log(gap+str)
  m--
}

console.log("--------------------------------------------------------46----------------------------------------");

 name="shriram";

 str=name.split("");
 string="";

for(i=str.length-1;i>=0;i--){
  string+=str[i];
}

console.log(string)

console.log("------------------------------------------47------------------------------------------------");

n=4;

for(i=1;i<=n;i++){
    let str="";
    for(j=1;j<=n;j++){
    if(i%2==0){
        str+="# "
    }
    else{
        str+="* "
    }
   
    }
     console.log(str)
}


console.log("---------------------------------------------------------------48---------------------------------------");



 number=36;
 sqrt_root=number**0.5
console.log(sqrt_root)


console.log("-----------------------------------------------------49-------------------------------------------------")

 str = "abcabcbb";
 split=str.split("");

repeat=[... new Set(split)];

 count=0;
for(i=0;i<repeat.length;i++){
    count++;
}
console.log(count)


console.log("-----------------------------------------------------50--------------------------------------------------------");


 arr = ["M 3", "J 1", "T 2"]
 sum=0;
for(i=0;i<arr.length;i++){
  str=arr[i].split(" ");
  product=str[0];
  price=Number(str[1]);

  if (product[0]=="M") {
    product=500;
  }
  else if(product[0]=="J"){
    product=3000;
  }
  else if(product[0]=="T"){
    product=1500;
  }
  else if(product[0]=="P"){
    product=10;
  }
  
  sum+=product*price;
  
  
}
console.log(sum)


console.log("-------------------------------51-------------------------------------------------------");

 str="teena";
 count=0;
 list=str.split("");
 remove=[...new Set(list)]
for(i=0;i<remove.length;i++){
   if(remove[i]=== 'a'||remove[i]==='e'|| remove[i]==='i'|| remove[i]==='o'|| remove[i]==='u'|| remove[i]==='A'|| remove[i]==='E'||remove[i]==='I'||remove[i]==='O'|| remove[i]==='U'){
     count++;
   }
}
console.log(count);

console.log("-----------------------------------------------------------------------52--------------------------------------");



//hi rammya i would like to meet you;

 st="Hi Rammiya i would Like to Meet You";

 num=st.split(" ");
 word=[];


for(let code of num){
  if(code!==code.toLowerCase() && code!==code.toUpperCase()){
    word.push(code);
  }
}
console.log(word)

console.log("-------------------------------------------------------------------------53------------------------");

function countDistinctVowels(str) {
  const vowels = "aeiou";
  let distinctVowels = "";

  for (let char of str.toLowerCase()) { // Convert to lowercase to handle uppercase letters
    if (vowels.includes(char) && !distinctVowels.includes(char)) {
      distinctVowels += char;
    }
  }

  return distinctVowels.length;
}

console.log(countDistinctVowels("shriram")); // Output: 2 (for "i" and "a")


console.log("--------------------------------------------------------------54---------------------------------------");





