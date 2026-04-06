//Writing Promises,async and await.

const fs=require("fs");
fs.readFile("c.txt","utf-8",function(err,data){
    if(err){
        console.log("Error while reading the file")
    } else{
        console.log(data);
    }
})

//Promise state
//Whenevwr you create a promise it expects a function inside them.
const p=new Promise((resolve,rejects)=>resolve);
console.log(p);

//--------------------------------------------------

//create a promisified version of fs.readfile.
//create a promisifed version of setTimeout.
//create a promisified version of writeFile.

//1-
function fsReadFilePromise(fileName,encoding){
        return new Promise(function(resolve,reject){
            fs.readFile(fileName,encoding,function(err,data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        });
}
fsReadFilePromise("a.txt","utf-8")
       .then(function(data){
        console.log(data);
       })
       .catch(function(e){
        console.log(e);
       })

//setTimeoutPromisified

function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },delay)
    })
}

setTimeoutPromisified(1000)
  .then(function(){
    console.log("1 second have passed");
  })