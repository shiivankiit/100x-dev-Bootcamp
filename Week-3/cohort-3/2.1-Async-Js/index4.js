//How async works and how it executes internally.

function timeout(){
    console.log('click the button');
}
console.log('Hi');
//I/O task.
setTimeout(timeout,1200);

console.log('Welcome to the loupe');

//Expensive operation
  let c=0;
for(let i=0;i<=1000;i++){
  
    c=c+i;
}
console.log('Expensive operation done');
