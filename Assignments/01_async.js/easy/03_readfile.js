// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs=require("fs");
const path=require("path")

const filepath=path.join(__dirname,"a.txt");

function callback(err,data){
    if(err){
        console.log(err);
    } else{
        console.log(data);
        
    }
  //  console.log("file reading is done");
}
 fs.readFile(filepath,"utf-8",callback);

let s=0;
for(let i=0;i<1000;i++){
    s=s+i;
}
console.log(s);

//clock 
let ctr=0;
function callback(){
    console.log(ctr);
    ctr=ctr+1;
}
setInterval(callback,1000);

let x=0;
for(let i=0;i<10000;i++){
    x=x+i;
}
console.log(x);