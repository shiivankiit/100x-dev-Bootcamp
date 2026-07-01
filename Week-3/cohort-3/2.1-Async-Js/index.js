const { log } = require("console");

function sum(a,b){
    return a+b;
}
let ans=sum(2,3);
console.log(ans);

//Function sum from 1 to a number
function sumOfno(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
let final=sumOfno(100);
console.log(final);


//Synchronus code:Synchronus code is executed line by line ,in the order it's written . Each operation waits for 
//the previous one to complete befor moving on to the next one.

function sumOfno(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
let final=sumOfno(100);
console.log(final);
let final2=sumOfno(200);
console.log(final2);
let final3=sumOfno(300);
console.log(final3);

