//Write a program to greet person give their first and last name.

// let firstname='Jamesh';
// let lastname='watt';

// console.log(`Hello ${firstname} ${lastname}`);
// console.log('Hello ' +firstname+ " and last name is " +lastname);

//for-loop.
// let sum=0;
// for(let i=0;i<10;i++){
//    sum=sum+i;
// }
// console.log(sum);


//complex primitive [Array and objects]
// let arr=[2,3,4,5,6,7,8,9,10,18,14]
// let result=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       result.push(arr[i])
//     }
// }
// console.log(result);

//Program to print max no in an array.
let arr=[2,3,4,5,6,7,8,9,10,18,14];
//let max=-Infinity;
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);

