let n=3;
let m=n*n
for(i=1;i<=n;i++){
  let first=""
  let second=""
  let gap=""
  for(j=1;j<=i;j++){
    first+=j+" "
  }
  for(k=i;k>=1;k--){
    second+=k+" "
  }
  for(g=1;g<=m;g++){
    gap+=" "
  }
  console.log(first.trim()+gap+second.trim())
  m=m-4
}