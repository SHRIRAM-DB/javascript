// 1
word="cool bro";
split=word.split("")
let clear = [... new Set(split)]
let count=0
for(i=0;i<clear.length;i++){   
   if(clear[i]=='o' || clear[i]=="a" || clear[i]=="e" || clear[i]=="i" || clear[i]=="u"){
    count++
   }
}
console.log(count);

//2
let password="";
s=password.split("");
let isvalid=false;
for(i=0;i<s.length;i++){
    if(s[i]!==s[i].toUpperCase()){
      isvalid=true;
    }
}

let valid=false;
for(i=0;i<s.length;i++){
    if(s[i]!==s[i].toLowerCase()){
      valid=true;
    }
}

let spcial=false;
for(i=0;i<s.length;i++){
    if(s[i]=="@" || s[i]=="#" || s[i]=="*" || s[i]=="_" || s[i]==")"){
        spcial=true;
    }
}

let number=false;
for(i=0;i<s.length;i++){
  if(s[i]==1 || s[i]==2 || s[i]==3 || s[i]==4 || s[i]==5 || s[i]==6 || s[i]==7 || s[i]==8 || s[i]==9 || s[i]==0){
    number=true;
  }
}

if(s.length>=8 && isvalid==true && valid==true && number==true && spcial==true){
   console.log("Storng")
}
else{
  console.log("weak");
  
}

//3

let arr=[350,150,100]
let sum=0;

for(i=0;i<arr.length;i++){
  if(arr[i]===100){
    sum+=100*8;
  }
  else if(arr[i]>=101 && arr[i]<=300){
    let a=arr[i]-100;
    sum+=100*8+a*12;
  }
  else if(arr[i]>300){
    let b=arr[i]-300;
    sum+=100*8+200*12+b*15
  }
  
}
console.log(sum)

//4

let array=[ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ];

for(i=0;i<array.length;i++){
  s=array[i].split(" ");
  
  for(j=0;j<s.length;j++){
    n=s[j].split(",");
   for(k=0;k<n.length;k++){
      b=Math.max(n[2]);
      c=n[0]
    }
  }
}
console.log(c);

//5

let a=[1, 2, 3, 4, 5];
let str=""
let s=a[a.length-1];

for(i=0;i<a.length-1;i++){
  str+=a[i]+" "
}
 console.log(s+" "+str);
 
//6

let usages = [350, 150, 100];
let totalBill = 0;

for (let usage of usages) {
    let sum = 0;

    if (usage <= 100) {
        sum = usage * 8;
    } else if (usage <= 300) {
        sum = 100 * 8 + (usage - 100) * 12;
    } else {
        sum = 100 * 8 + 200 * 12 + (usage - 300) * 15;
    }

    totalBill += sum; // Add the calculated bill for each usage to the total
}

console.log("Total Bill:", totalBill);



 

