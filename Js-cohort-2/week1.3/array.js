const initalArray=[1,2,3]
initalArray.push(2);
console.log(initalArray);
initalArray.pop();//removes value from the last array.
console.log(initalArray);
initalArray.shift();//removes value from the starting of the array
console.log(initalArray);
initalArray.unshift(4,5);//puts value at the starting of the array
console.log(initalArray);

//concat
let arr=[1,2,3,4,5];
let arr2=[6,7,8,9,3];
let arr3=arr.concat(arr2);
console.log('Concat value is:',arr3);


//loop.

for(let i=0;i<initalArray;i++){
    console.log(initalArray[i]);
}

//for each();
function logThing(str){
    console.log(str);
}
initalArray.forEach(logThing);//it expects a function as an argument. also called callbacks.

//callbacks:-- calling one function inside another function.

// function log1(){
//     console.log('Hello world');
// }

// function log2(){
//     console.log('Hello world2');
// }
// function logwhatsPresent(fn){
//     fn();
// }
// logwhatsPresent(log2());



