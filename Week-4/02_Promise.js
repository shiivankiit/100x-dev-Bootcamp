//Revisiting the lecture agai.

//Promise:-A promise in Javascript is an object that represent the eventual completion or
//failure of an asyn operation and it's resulting value.Promise are used to handle asynchronus
//operation more effectively than traditional callbacks functions, 


//You have to write two example of reading a file.
//1-->synchronus task.
//2-->Asynchronus task.

//------------Sync-----------------//
//This is an I/O bound task which basically means you are asking the operating system to read the file and in
// sync function your js thread stuck here while os is reading the file.
const fs=require("fs");
const contents=fs.readFileSync("c.txt","utf-8");
console.log(contents);

//-------------Async----------------//
const content2=fs.readFile("c.txt","utf-8",function(err,data){
    console.log(data);
});
let sum=0;
for(let i=0;i<1000;i++){
   sum=sum+i;
}
console.log(sum);

console.log(content2);

//---------------Promise--------------//
function callback(){
    console.log("hi there");
}
setTimeout(callback,3000);
//As we all know that setTimeout is asynchronus operation.
//Now we can write the same function using promisifed version.
//-----------------------------
//-------------------Asynchronus Promisifed Class.


function setTimeoutPromisifed(ms){
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p;
}

//Promise chaning
setTimeoutPromisifed(3000)
.then(function(){
    console.log('hi there');
    return setTimeoutPromisifed(3000);
}).then(function(){
    console.log('hello');
    return setTimeoutPromisifed(5000);
}).then(function(){
    console.log('Fine');
    return setTimeoutPromisifed(4000);
})


//----------------------------------------Create a Promisifed version of readfile-------------------------//
const fs = require("fs");
function readFilePromisified(filepath,encoding){
        return new Promise((resolve,reject)=>{
            fs.readFile(filepath,encoding,(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            })
        })
}
function callback(data){
    console.log(data);
}
function callbackErr(){
    console.log("error while reading the file");
}
readFilePromisified("c.txt","utf-8")
.then(callback)
.catch(callbackErr)


//Doubt:---inside promise fs.readfile still takes callback as a third argumrnts.

/* Key idea---Promise doesn't remove the callback internally--it hides it externally*/
/* Inside:--fs.readfile still works the old way(callback-based)*/
/*Outside:--No callback visible you use .then and .catch
  readfilePromisified('c.txt','utf-8')
  .then(data=> console.log(data)*/
/* Promisify = “wrap a callback API inside a Promise so the outside world doesn’t deal with callbacks” */

//Why prmosie used over callback.cons of callbacks.
/*
    What is callback hell
    :-It happens when async operations depend on each other and you
    keep nesting callbacks.

    fs.readFile("a.txt","utf-8",(err,data1)=>{
        if (err) return console.log(err);
    fs.readFile("b.txt","utf-8",(err,data2)=>{
        if(err) return consol.log(err);
    fs.readFile("c.txt","utf-8",(err,data3)=>{
        if(err) return console.log(err);
        console.log(data1,data2,data3);
        })
        })
        })
    --Deep nesting('pyramind of doom)
    --Hard to read
    --Error handling repeated everywhere
    --Difficult to maintain


How promise fix this

   readFilePromisified("a.txt", "utf-8")
  .then(data1 => {
    return readFilePromisified("b.txt", "utf-8");
  })
  .then(data2 => {
    return readFilePromisified("c.txt", "utf-8");
  })
  .then(data3 => {
    console.log(data3);
  })
  .catch(err => console.log(err));

  Promise organize callback into a predictable chain.
  “Promises avoid callback hell by replacing nested callbacks 
  with a flat, chainable structure and centralized error handling.
*/ 



// Revision of the class.
function afterfileisread(err,data){
         console.log(data);
}
//Whenever a file is read it will throw a callback queue.
fs.readFile('a.txt','utf-8',afterfileisread);

//
const reading=fs.readFileSync('a.txt','utf-8');
console.log(reading);


//Async-Behaviour.

/*
Javascript normally runs one statement at a time.Because javascript is a singel threaded.
Each statement must finish before the next statement run.
If a task takes a long time, it can block the page and make the browser feel frozen.
Asynchronous programming lets JavaScript start a long-running task, like fetching a file, 
and continue running other code while waiting for the result.

2-Async callbaks.
A callback is a function passed to another function.
In asynchronus javascript,callbacks are often used to handle result that are ready later.

A callback is not asynchronous by itself.

Callbacks become part of asynchronous programming when they are used by asynchronous APIs, 
like setTimeout(), events, or fetch().


*/
//Log hi after 1sec 3sec and 5sec.

setTimeoutPromisifed(1000)
.then(function(){
    console.log('hi');
    return setTimeoutPromisifed(3000);
})
.then(function(){
    console.log('hello');
    return setTimeoutPromisifed(4000);
})
.then(function(){
    console.log('hi there');
    return setTimeoutPromisifed(5000);
});

//----------Try writing a Promise class by your own---------------------//

