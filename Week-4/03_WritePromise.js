//Writing Promises,async and await.

// What is Promise.

/* 
  A promise in javascript is an object that represent the eventual result 
  of an asynchronus operation - either a success (resolved) or a failure (rejected).

  It's commonly used for things like.
  - Fetching data from the an API.
  - Reading files.
  - Timers(setTimeout).
  - Database request.

Promise States:-
  1.Pending->The operation is still running.
  2.Fullfilled->The operation completed successfuly.
  3.Rejected->The operation failed.

*/
const fs=require("fs");
fs.readFile("c.txt","utf-8",function(err,data){
    if(err){
        console.log("Error while reading the file")
    } else{
        console.log(data);
    }
})

//Promise state
//Whenevwr you create a promise it expects a function inside as an input.
//Here p is the object of the promise class.
const p=new Promise((resolve,rejects)=>resolve);
console.log(p);

//--------------------------------------------------

//create a promisified version of fs.readfile.
//create a promisifed version of setTimeout.
//create a promisified version of writeFile.

//1-
function fsReadFilePromise(fileName,encoding){
        //We don't have to write resolve,reject the person who is 
        //written promise class is responsible for writing resolve and reject fn.
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
//You never pass a callback as an argument in the promisified version.
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
  .catch(function(){
    console.log('an error came');
  })
  .finally(function(){
    console.log('finally catch or then ran');
  })

function writeFile(filepath,data,encoding){
    return new Promise(function(resolve,reject){
        fs.writeFile(filepath,data,encoding,function(err){
            if(err){
                resolve(err);
            }else{
                resolve('File written sucessfully');
            }
        })
    })
}
writeFile('a.txt','Hi there','utf-8')
.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})



//Practice.
function fsReadfile(filepath,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(filepath,encoding,function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
fsReadfile('a.txt','utf-8')
.then(function(){
    console.log('The data is' + data);
})
.catch(function(){
    console.log('The error is' + err);
})