//I/O bound task,Synchronus vs Asynchronus code.

//fs comes with internal fileSystem
const fs=require("fs")//This line of code get you the code of the fileSystem.
//utf-8 encodes the content of file
const content = fs.readFileSync("a.txt","utf-8")
console.log(content);


//Asynchronus code.

const fs=require("fs");

function fileReadCallback(err,contents){
    console.log(contents)
}
fs.readFile("a.txt","utf-8",fileReadCallback);

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