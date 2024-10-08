for(count=1;count<=10;count=count+2){
    console.log(count);
}

for(i=10;i>=1;i=i-1){
    console.log(i);
}

for(i=2;i<=10;i+=2){
    if(i%2==0){
        console.log(i)
    }
}

for(i=1;i<=5;i++){
    console.log(i*i);
}

for(i=1;i<=5;i++){
    let a=i*2;
    console.log(i+"x2="+a);
}

for(i=1;i<=10;i++){
    let b=i*5;
    console.log(i+"x5="+b);
}

for(count=1;count<=10;count=count+2){
    console.log(count);
}

for(i=10;i>=1;i=i-1){
    console.log(i);
}

for(i=2;i<=10;i+=2){
    if(i%2==0){
        console.log(i)
    }
}

for(i=1;i<=5;i++){
    console.log(i*i);
}

for(i=1;i<=5;i++){
    let a=i*2;
    console.log(i+"x2="+a);
}

for(i=1;i<=10;i++){
    let b=i*5;
    console.log(i+"x5="+b);
}

let word="Malayalam";
let letters=word.split("")
let reverseletter=letters.reverse();
let reverseword=reverseletter.join("")
console.log(word)
console.log(reverseword)
if(word.toLowerCase()==reverseword.toLowerCase()){
    console.log("It is a palindrom")
}
else{
    console.log("It not a palindrom")
}

let sum=1
let n=5
for(i=1;i<=n;i++){
   sum*=i
}
console.log(sum)

let name=["malayalam"];
let str=name.join("");
console.log(str);

let array=[1,2,4,2];
array.pop(array.push)
console.log(array);

let some="shriram"
let st=" "
for(i=some.length-1;i>=0;i--){
    st+=some[i]
}
console.log(st);

let num=12323;

let rem=0;
let reversenum=0;

while(num>0){
    rem=num%10;
    reversenum=reversenum*10+rem;
    num=Math.floor(num/10)
}
console.log(reversenum)

let small=["guna","shriramamamam"]