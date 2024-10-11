let a=45;
let b=40;
for(i=2;i<=Math.min(a,b);i++){
    if(a%i==0 && b%i==0){
 console.log(i)
    }
}
console.log("-------------------------------------------------------------------------------------------");

a=45;
b=40;
while(b!==0){
   let temp=b;
   b=a%b;
   a=temp;
}
console.log(a);
console.log("---------------------------------------------------------------------------------------------");

a=19;
b=30;
let num=a*b;
for(i=0;i<num;i++){
   if(i%a==0 && i%b==0){
      sum=i;
   }  
}
let s=num-sum;
console.log(s)

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
count=1
sum=1;
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