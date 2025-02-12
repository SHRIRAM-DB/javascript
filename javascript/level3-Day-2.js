let n=4
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

let square=Math.cbrt(27)
console.log(square)

let num=243;
let pow=3;
for(i=0;i<num;i++){
  pow*=3;
  if(pow===num){
    console.log("YES")
    break;
  }
  else if(pow>num){
    console.log("NO")
    break;
  }
}
































