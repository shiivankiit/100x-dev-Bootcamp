// Create a variable for each of the following: your favorite color, your height in centimeters, 
// and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log.

const color = "red";
let height = 175;
const likepizza = true;

//Log all varibales to console.
console.log("Favourite color :", color);
console.log("height :", height);
console.log("likepizza :", likepizza);


// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a, b) {
    let no = a + b;
    console.log("sum of no is " + no);
}
sum(2, 3);

// Write a function called canVote that returns
// true or false if the age of a user is > 18.

function canVote(age) {
    if (age > 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}
canVote(19);

// Write an if/else statement that checks if a number is even or odd.
// If it's even, print "The number is even." Otherwise, print "The number is odd."
function evenorodd(num) {
    if (num % 2 == 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}
evenorodd(4);

// Write a function called sum that finds the sum from 1 to a number
function sum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sum(5);

