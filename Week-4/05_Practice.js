// Q: Write a function that

// 1. Reads the contents of a file
// 2. Trims the extra space from the left and right
// 3. Writes it back to the file

//This is the easy way..but not a good way bcz thread got stuck
const fs=require("fs");
let content=fs.readFileSync("a.txt","utf-8");
const trimmContent=content.trim();
fs.writeFileSync("a.txt",trimmContent);

//Now do it in async way by adding a callback to it.
fs.readFile("b.txt","utf-8",function(err,data){
     let trimm=data.trim();
     fs.writeFile("b.txt",trimm,function(){
        console.log("Done!");
     });
})

//Now moving ton approach no 3 using Promise
function readandwritePromsie(filePath,cb){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,"utf-8",function(err,data){
            data=data.trim();
            fs.writeFile(filePath,data,function(){
                resolve();
            })
        })
              
    })
}
//You can also do this using .then and .catch approach 
//But easy and cleaner way to do this using async and await.
async function main(){
    await readandwritePromsie("c.txt");
    console.log("Done with the file work")
}
main();

//4th approach where we use try and catch block.so the sucess and err with the code.
function cleanFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,"utf-8",function(err,data){
            if(err){
                reject();
            } else{
                const trimee=data.trim();
                fs.writeFile(filePath,trimee,function(err){
                    if(err){
                        reject();
                    } else{
                        resolve();
                    }
                })
            }
        })
    })
}
async function main(){
    try{
        await cleanFile("a.txt")
        console.log("done while cleaning the file");
    } catch(e){
        console.log("error while cleaning the file");
    }
}
main();