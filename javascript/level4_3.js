let n=3;
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
    gap+=" "
  }
  for(o=0;o<n-i;o++){
     ga+="  "
   }
 console.log(st.trim()+gap+ga+str)
 m=m-2;
}

