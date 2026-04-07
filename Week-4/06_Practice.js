
//Write a promisified function which read and write the file...and trim the file
//write a promisified a function that takes a file prefix as an input (a)
//and cleans ({prefix1.txt}),({prefix2.txt}),{prefix3.txt}.

const fs=require("fs");
function cleanFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,"utf-8",function(err,data){
            if(err){
                reject();
            } else{
                const trimm = data.trim();
                fs.writeFile(filePath,trimm,function(){
                    resolve();
                })
            }
        })
    })
}

async function cleanManyFiles(prefix){
    await cleanFile(prefix + "1.txt");
    await cleanFile(prefix + "2.txt");
    await cleanFile(prefix + "3.txt");
}

cleanManyFiles("a")
    .then(function(){
          console.log("All 3 file have been cleaned");
    })
    .catch(function(){
        console.log("error while cleaning these 3 files");
    })
