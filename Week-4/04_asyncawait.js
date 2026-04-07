//Async and await.

//write a promisified version of fs.readfile.
const fs=require("fs");
function fsReadFilePromise(fileName,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,encoding,function(err,data){
            if(err){
                reject(err);
            } else{
                resolve(data);
            }
        })            
    }
)}
fsReadFilePromise("a.txt","utf-8")
    .then(function(data){
         console.log(data);
         fsReadFilePromise("b.txt","utf-8")
            .then(function(data){
                console.log(data)
                fsReadFilePromise("c.txt","utf-8")
                  .then(function(data){
                    console.log(data)
                  })
            })
    })
//Instead of calling like this the better way is to use async and await.
//aync and await are just syntactic sugar on the top of .then  and .catch();
//and it stills an asynchronus operation.
async function main(){
    let file1content= await fsReadFilePromise("a.txt","utf-8");
    let file2content=await fsReadFilePromise("b.txt","utf-8");
    let file3content=await fsReadFilePromise("c.txt","utf-8");

    console.log(file1content);
    console.log(file2content);
    console.log(file3content);
}
main();
