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

