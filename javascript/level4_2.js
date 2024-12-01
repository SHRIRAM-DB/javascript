

let date1="jan-12-2029";
let date2="jan-23-2024";


let sp1=date1.split("-");
let sp2=date2.split("-");


if(sp1[2]<sp2[2]){
 console.log(date1)
}
else if(sp1[2]>sp2[2]){
 console.log(date2);
}


//Given an array of string as ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"] Find the oldest date. In the given example the oldest date is OCT-10-1987.

let arr=["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"];


for(i=0;i<arr.length;i++){
    s=arr[i].split(", ");
    console.log(s);
    
    console.log(s);
}

