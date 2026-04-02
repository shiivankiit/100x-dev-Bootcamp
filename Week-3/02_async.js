//Normal function in Javascript.

//Sum of two number.
function sum(a, b) {
    return a + b;
}
let ans = sum(2, 3);
console.log(ans);

//Sum from 1 to a number.
function sumofno(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}
const print = sumofno(10);
console.log(print);

//Synchronus:Any code which is running by a singel thread line by line.

//-------I/O heavy Operation------------//
const fs = require("fs");
const path = require("path")
const contents = fs.readFileSync(path.join(__dirname,"b.txt"), "utf-8");
console.log(contents);

//Example-2 of asyncoperation with callback function.
const fs = require("fs")
const path = require("path")
function print(err,data){
    console.log(data);
}
fs.readFile(path.join(__dirname,"a.txt"),"utf-8",print);
fs.readFile(path.join(__dirname,"b.txt"),"utf-8",print);
console.log("!Done");

//Js architecture of async code.
function timeout(){
    console.log("click the button");
}
console.log("Hi");
setTimeout(timeout,1000);
console.log("welcome to the loupe");