//Sum value in object array.
//Input:{ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }.
//Output:{ food: 60, travel: 20, bills: 100 }.

function sum(user) {
  //Here we use two nested loop
  //1:---for..in for nested loop.
  //2:---for..of or for loop for inner loop.
  let result = {};
  for (let key in obj) {
    let arr = obj[key];
    let sum = 0;
    for (let value of arr) {
      //console.log(value);
      sum = sum + value;
      result[key] = sum;
    }
  }
  console.log(result);
}
var obj = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60]
}
sum(obj);


//Count word occurence in array.
//Input:["apple", "banana", "apple", "orange", "banana", "apple"]
//Output:{ apple: 3, banana: 2, orange: 1 }
//Here the catch is that our input is array and output is object.

function countword(arr) {
  //for array we use for of loop
  //and we need to convert array into the object.
  let result = {};
  for (let value of arr) {
    if (result[value]) {
      result[value]++;
    } else {
      result[value] = 1;
    }
  }
  return result;
}
let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countword(arr));

//Swap keys and values of object.
//Input:{ a: "x", b: "y", c: "z" }
//Output:{ x: "a", y: "b", z: "c" }
//Here logic is something like a swap of two numbers.

function Swap(obj1) {
  let results = {};
  for (let key in obj1) {
    let value = obj1[key];
    results[value] = key;
  }
  return results;
}
let obj1 = { a: "x", b: "y", c: "z" };
console.log(Swap(obj1));

//4. **Find the largest value key**
//  - Input:{ a: 10, b: 50, c: 20 }
//  - Output:b
function largestvalue(obj) {
  let maxkey = null;
  let maxValue = -Infinity;
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxkey = key;
    }
  }
  return maxkey;
}
let obj = { a: 10, b: 50, c: 20 }
console.log(largestvalue(obj));

// 5. **Flatten object of arrays into one array**
//     - Input:{ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
//     - Output:["apple", "banana", "carrot", "pea"];
// What i learn from this quesion
// --How flat function works.
// And an Object is a built-in global object (constructor) in JavaScript.
// 🧠 Why do we use Object.*() methods?
// 👉 To work with objects easily without writing manual loops
// Object have lot of properties to use like--Objetc.key()--Object.value() and many more.
// Simpel Understanding---Instead of using loop use Objetc.
// 👉 Instead of writing:
// for(let key in obj){
// manual work
// }
// 👉 You can use:
// Object.keys(obj)
// Object.values(obj)

let object = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
let value = Object.values(object);
value = value.flat()
console.log(value);

6. ** Group people by city **
  - Input:
[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]
Output: { Delhi: ["A", "C"], Mumbai: ["B"] }
logic: --Cnvrt the array into object
const arr = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
];
const result = {};
for (let i = 0; i < arr.length; i++) {
  const city = arr[i].city;
  const name = arr[i].name;

  if (!result[city]) {
    result[city] = [];
  }
  result[city].push(name);
}
console.log(result);

7. ** Filter object by values > 50 **
  - Input: { a: 20, b: 60, c: 40, d: 90 }
- Output: { b: 60, d: 90 }

function greater(obj) {
  let result = {};
  for (let key in obj) {
    if (obj[key] > 50) {
      let value = key;
      result[value] = obj[key];
    }
  } return result;
}
let obj = { a: 20, b: 60, c: 40, d: 90 }
console.log(greater(obj));

8. Find student with highest average mark
  - Input: { A: [80, 90], B: [70, 75, 85] }
- Output: A

function avgMarks(obj) {
  //First we iterate through the object and store the arr inside a variable.
  let student = "";
  let maxavrg = 0;
  for (let key in obj) {
    let arr = obj[key];
    let sum = 0;
    for (let value of arr) {
      sum = sum + value;
    }
    //Now we need to find the average marks
    let avrg = sum / arr.length;
    //Now we need to find the maxaVrg value and print their key.
    if (avrg > maxavrg) {
      maxavrg = avrg;
      student = key;
    }
  }
  return student;
}
let obj = { A: [80, 90], B: [70, 75, 85] }
console.log(avgMarks(obj));

//9. **Unique values across all object arrays**
// - Input:{ x: [1,2,3], y: [2,3,4], z: [4,5] } 
// - Output:[1,2,3,4,5]

const obj1 = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
const result = [...new Set(Object.values(obj1).flat())];
console.log(result);
