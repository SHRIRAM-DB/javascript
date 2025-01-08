let str="aabcccccaaa";

let compressed = "";
count = 1;

for(i=1;i<=str.length;i++){
    if(str[i] === str[i-1]){
        count++;
    }
    else{
        compressed += str[i-1]+count;
        count = 1
    }
}

console.log(compressed);

