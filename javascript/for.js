// for(count=1;count<=100;count++){
//     console.log("john")
// }

// for(i=1;i<=10;i++){
//     console.log(i);
// }


// let n=10;
// let str=" ";
// for(i=1;i<=n;i+=1)
// {
//     let b=i*1;
//      console.log(str);
//    str=str+b+" ";
  
// }

// let a=5;
// let sum=0;
// let m=3;
// for(i=1;i<=m;i++){
//     sum+=i*a;
// }
// console.log(sum); 

// let tweet="learning java script is fun!"
// console.log(tweet.length);

// let number=12345;
// let strnumber=number.toString();
// console.log(strnumber)

// let num=123;
// console.log(`${num}`);

// let name="Real world example When checking if a word exists in a paragraph"
// console.log(name.includes("o"));
// console.log(name.slice(0,5));
// console.log()

// str="I am Shriram. My home drive is \"C:\\shriram\\home\"";
// console.log(str);

// function checkword(str){
//     str="javaScript"
//     return str;
// }
// let a=checkword();
// console.log(a.includes("java"));

// let text="JavaScript is Awesome!"
// console.log(text.toLowerCase());
// console.log(text.slice(13,21));
// console.log(text.replace("Awesome","cool"))

// 1. Given an array of integers find the number of multiples of 5.

// let arr=[44,29,50,29,43];
// count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%5==0){
//             console.log(count);
//     }
//     count++;
//     }

// 2.Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array which are between a and b

let integers=[80,43,6,14,23];
let a=5;
let b=20;
count=0;
for(i=0;i<integers.length;i++){
    if(integers[i]>a && integers[i]<b){
        console.log(count);
    }
    count++;
}

// 3.. Given an array of strings count the number of elements which are starting with a vowel

let s=["apple","eat","swim","ice cream"];
count=0;
for(i=0;i<s.length;i++){
    if(s[i][0]==="a" || s[i][0]==="e" || s[i][0]==="i" || s[i][0]==="o" || s[i][0]==="u"){
        count++;
        console.log(count); 
    }
     
}

// 4. Given an array of float find the average of the numbers.

let average=[50.3,55.2,43.0];
let sum=0;
for(i=0;i<average.length;i++){
    sum+=average[i]
}
console.log(Math.floor(sum/average.length));

