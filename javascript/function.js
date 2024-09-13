function oppo()
{
    console.log("this is oppo phone")
}
oppo()
function apple()
{
    console.log("this is iphone phone")
}
apple()
function redmi()
{
    console.log("this is redmi phone")
}
redmi()

a=10;
b=20;
function addition()
{
 total=a+b;
 console.log(total)
}
addition()

var favouriteactor="thala";
var favouriteplayer="dhoni";
var favouritemovie="geetha govintham";
function favourite()
{
    console.log("Favourite Actour:"+favouriteactor);
    console.log("Favourite Player:"+favouriteplayer);
    console.log("Favourite Movie:"+favouritemovie);
}
favourite()

function area(length,breadth)
{
    console.log("area is:"+ length*breadth)
}
area(10,60)


function additions(x,y)
{
    return x+y;
}

let z=additions(20,80)
console.log(z);

function area(l,b)
{
    console.log(l*b);
}
area(10,20)

var d="helloworld";
function greet()
{
    console.log(d);
}
greet()

function getRandomNumber(){
    return Math.random();
}
const randomnumber= getRandomNumber();
console.log(randomnumber);

function displaygreeting(name)
{
    console.log("hello"+name);
}
displaygreeting("shriram")

function add(a,b){
    result=a+b;
    return result;
}

let p=add(20,10);
console.log(p);

function concatstrings(firstname,lastname){
    console.log(firstname+lastname);
}
concatstrings("iron","man")

function isadult(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}

calculateArea(5);
greetUser();
function calculateArea(radius) {
 const PI=3.14;
 var area =Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
    var userName = "John";
    console.log(userName);
   }

   function addition(n){
    for(i=1;i<=n;i+=2){
        console.log(i);
        n++;
    }}
    addition(5)
    
    let m=3;
    for(i=1;i<=m;i++){
        console.log(m)
    }
    
    function sum (n){
        let str=" ";
        for(i=1;i<=n;i++){
          
            console.log(n);
        }
    }
    sum(5)
    
    let n=10;
    let sum=5;
    let str=" ";
    for(i=1;i<=n;i++){
        str+=n+" ";
    }
    console.log(str.trim);
    
    function classifyNumber(n){
        if(n%3==0 && n%5==0){
            return "Divisible by both 3 and 5";
        }
        else if(n%3==0){
            return "Divisible by 3";
        }
        else if(n%5==0){
            return "Divisible by 5";
        }
        else{
            return "Not divisible 3 or 5"
        }
    }
    let a=classifyNumber(15);
    console.log(a);
    
    function getDayName(n){
        if(n==1){
            console.log("Sunday");
        }
        else if(n==2){
            console.log("Monday");
        }
        else if(n==3){
            console.log("Tuesday");
        }
        else if(n==4){
            console.log("Wesnesday");
        }
        else if(n==5){
            console.log("Thursday");
        }
        else if(n==6){
            console.log("Friday");
        }
        else if(n==7){
            console.log("Saturday");
        }
        else{
            console.log("Invalid Day");
        }
    }
     getDayName(4);
        
        function MultiplicationTable(n,r){
            for(i=0;i<=n;i++){
                let s=n*r;
                console.log(n+"*"+r+"="+s);
                r--;
            }
        }
        MultiplicationTable (6,7);
        
        let n=0;
        for(i=10;i>=n;i--){
            if(i==2){
                console.log("get")
            }
            else if(i==1){
             console.log("ready");
            }
            else if(i==0){
            console.log("go")
            }
            else{
              console.log(i);
        }
        }
        
        
        let word="\"hello world!\"";
        console.log(word);
        console.log(word.slice(0,-3));