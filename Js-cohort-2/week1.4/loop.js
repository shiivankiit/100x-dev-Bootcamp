//Calculate sum from 0 to 100.
let sum=0;
for(let i=0;i<=100;i++){
    sum=sum+i;
}
console.log(sum);

//Function:A function in Javascript is a set of statements that perform a task or calculates a value.
//It should take some input and return an output where there is some obvious relationship between the input and output.


//You can also solve it by taking an arguments.
function findsum(){
    let sum=0;
    for(let i=0;i<=100;i++){
        sum+=i;
    }
    return sum;
}
console.log(findsum());


//callback function:-Step 1:-Can you call one function inside another function? Answer:Yes.

//find the square of input.
function squareinput(n){
    return n*n;
}

function cubeinput(n){
    return n*n*n;
}
//Find the sumofsquare of input.
function sumofsqures(a,b,callback){
   let val1=callback(a);
   let val2=callback(b);

   return val1+val2;
}

function sumofcubes(a,b){
    let val3=cubeinput(a);
    let val4=cubeinput(b);

    return val3+val4;
}

console.log(sumofsqures(2,3));
console.log(sumofcubes(4,5));


