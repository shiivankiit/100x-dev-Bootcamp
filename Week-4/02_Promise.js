//Promise.
//You have to write two exampel of reading a file.
//1-->synchronus task.
//2-->Asynchronus task.

const fs=require("fs");
const contents=fs.readFileSync("c.txt","utf-8");
console.log(contents);

const content2=fs.readFile("c.txt","utf-8",function(err,data){
    console.log(data);
})
console.log(content2);

//Promise.
function callback(){
    console.log("hi there");
}
setTimeout(callback,3000);
//As we all know that setTimeout is asynchronus operation.
//Now we can write the same function using promisifed version.
//-----------------------------
//Asynchronus Promisifed Class.

function setTimeoutPromisifed(ms){
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p;
}
function callback(){
    console.log("3 second have pass");
}
setTimeoutPromisifed(3000).then(callback)

//Create a Promisifed version of readfile
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
    --Error handling repeated ecerywhere
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