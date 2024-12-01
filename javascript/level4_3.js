let n=6;

for(i=n;i>0;i--){
 let str="";
 let st="";
 let gap="";
 for(j=i;j>0;j--){
   str+=i+" ";
 }
 for(k=i;k>0;k--){
   st+=i+" "
 }
 for(l=1;l<=n-i;l++){
   gap+="    "
 }
 console.log(str+gap+st)
}




let m=(n*2)-2;
for(i=1;i<=n;i++) {
  let str=""
  let st=""
  let gap=""
  let ga=" "
  for(j=1;j<=i;j++){
    str+=i+" "
  }
  for(k=1;k<=i;k++){
    st+=i+" "
  }
  for(l=1;l<=m;l++){
    gap+="  "
  }
 
 console.log(st+gap+str)
 m=m-2;
}

