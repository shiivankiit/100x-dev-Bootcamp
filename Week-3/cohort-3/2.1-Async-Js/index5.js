let ctr=0;
function callback(){
    console.log(ctr);
    ctr=ctr+1;
}
setInterval(callback,1000);

let sum=0;
for(let i=0;i<100;i++){
    sum=sum+i;
}
console.log(sum);
