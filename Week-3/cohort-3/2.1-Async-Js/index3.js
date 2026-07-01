//Asynchronus Programming.

const fs=require('fs');
const path=require('path');

const filepath=path.join(__dirname,'a.txt');
const filepath1=path.join(__dirname,'b.txt');

const contents=fs.readFile(filepath,'utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    
})
const contents2=fs.readFile(filepath1,'utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data); 
    }
    
})
console.log("hello");
 