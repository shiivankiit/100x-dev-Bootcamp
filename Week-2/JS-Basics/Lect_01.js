console.log("Hii");

//Variables in javascript.
let name = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function-scoped

//Data-types in Javascript.
let number = 42;    //Number
let string = "Hello world"   //String
let isActive = false     //Boolean
let numbers = [1,2,3,4]  //Array

//Functions.
function greet(nameofperson){

    console.log("hello " + nameofperson)
    console.log("namaste " + nameofperson)
    console.log("kiwean aa singh " + nameofperson)

}
let firstName="harkirat";
let secondName="kirat";
let thirdName="singh";

greet(firstName);
greet(secondName);
greet(thirdName);

//Find the sum from 1 to 100.
function sumofNo(){
    let sum=0;
    for(let i=1;i<=100;i++){
        sum=sum+i;
    }
    console.log(sum)
}
sumofNo();
