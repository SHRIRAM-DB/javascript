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

    console.log("--------------------------------------------------------------------------------------------");


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

    console.log("--------------------------------------------------------------------------------------------");


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

console.log("--------------------------------------------------------------------------------------------");


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

  console.log("--------------------------------------------------------------------------------------------");


  a=12;
  b=5;
  multiple=a*b;
  arr=multiple.toString().split("")
  number=arr[arr.length-1];
  if(0==number){
    console.log("YES")
  }
  
  else{
    console.log("NO")
  }
  
  
console.log("-------------------------------------------------------------------------------------------------");
  

arr= [1, 2, 3, 4, 5, 6];
count_of_odd=0;
count_of_even=0;

for(i=0;i<arr.length;i++){
  if(i%2==0){
    count_of_odd++
  }
  else{
    count_of_even++;
  }
}
console.log("even:"+count_of_even)
console.log("odd:"+count_of_odd)


console.log("-----------------------------------------------------------------------------------------------");

  