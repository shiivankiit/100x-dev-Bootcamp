//I/O heavy operations.
//--Refer to task in a computer that involves a lot of data
//transfer between the program and external system or devices.

const fs=require('fs');//requiring external libraries.and allows you to work with file system.
const path=require('path');
const filepath=path.join(__dirname,'a.txt');

const contents=fs.readFileSync(filepath,'utf-8');
console.log(contents);


//Functional arguments.
//Passing a function as an argument to another function.

function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function op(a,b,op){
    let val=op(a,b);
    return val;
}
const ans=dooperation(1,2,sum);
console.log(ans);
