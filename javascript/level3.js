a=10;
b=150;
let num=a*b;
let sum=1;
for(i=1;i<=num;i++){
   if(i%a==0 && i%b==0){
      sum=i;
      break;
   }  
}
console.log(sum)

console.log("------------------------------------------------------------------------------------------------");

let n=3

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

console.log("------------------------------------------------------------------------------------");

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
console.log("----------------------------------------------------------------------------------------------------");

let g=3
num=1
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
console.log("--------------------------------------------------------------------------------------------------");

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
console.log("-----------------------------------------------------------------------------------------------");

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

console.log("-------------------------------------------------------------------------------------------");

n=97;
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

console.log("-------------------------------------------------------------------------------------");

s=3;
for(i=1;i<=s;i++){
    let str=""
  for(j=1;j<=s;j++){
     str+="*"+" "
  }
  console.log(str)
}

console.log("----------------------------------------------------------------------------------------");


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

console.log("--------------------------------------------------------------------------------------------");

n=5;
for(i=0;i<=n;i++){
  let sys=""
  for(j=n-i;j>0;j--){
    sys+=j+" "
    
  }
  console.log(sys)
}

console.log("----------------------------------------------------------------------------------------------------");

a=23;
b=22;
num=a*b
for(i=1;i<=num;i++){
    if(a%i==0 && b%i==0){
        sum=i
    }
}
console.log(sum)

console.log("-----------------------------------------------------------------------------------------------------------")

let number=789;
let total=0;
value=number;
while(value>0){
    reminder=value%10;
    value=Math.floor(value/10);
    total=(total*10)+reminder;
}
console.log("Reverse Number"+total);

console.log('-------------------------------------------------------------------------------------------------');

n=3;
for(i=1;i<=n;i++){
  let str=""
  for(j=1;j<=i;j++){
    str+=i+" "
  }
  console.log(str)
}

console.log("----------------------------------------------------------------------------------------------------");


for(i=n;i>=1;i--){
  str=""
  for(j=1;j<=n;j++){
    str+="*"+" "
  }
  console.log(str)
  n--
}

console.log("----------------------------------------------------------------------------------------");

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

console.log("--------------------------------------------------------------------------------------------");

n=6;
for(i=n;i>0;i--){
  let str=""
  for(j=i;j<=n;j++){
    str+=i+" "
  }
  console.log(str)
}

console.log("-------------------------------------------------------------------------------------------");

str=""
for(i=1;i<=n;i++){
  str+="*"
  let gap=""
  for(j=n-i;j>0;j--){
    gap+=" "
  }
  console.log(gap+str)
}

console.log("------------------------------------------------------------------------------------------------");

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

console.log("-------------------------------------------------------------------------------------------");

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

console.log("-----------------------------------------------------------------------------------------");

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

console.log("--------------------------------------------------------------------------------------------------------");

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