// //Sum value in object array.
// //Input:{ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }.
// //Output:{ food: 60, travel: 20, bills: 100 }.

// function sum(user) {
//   //Here we use two nested loop
//   //1:---for..in for nested loop.
//   //2:---for..of or for loop for inner loop.
//   let result = {};
//   for (let key in obj) {
//     let arr = obj[key];
//     let sum = 0;
//     for (let value of arr) {
//       //console.log(value);
//       sum = sum + value;
//       result[key] = sum;
//     }
//   }
//   console.log(result);
// }
// var obj = {
//   food: [10, 20, 30],
//   travel: [5, 15],
//   bills: [40, 60]
// }
// sum(obj);


// //Count word occurence in array.
// //Input:["apple", "banana", "apple", "orange", "banana", "apple"]
// //Output:{ apple: 3, banana: 2, orange: 1 }
// //Here the catch is that our input is array and output is object.

// function countword(arr1) {
//   //for array we use for of loop
//   //and we need to convert array into the object.
//   let result = {};
//   for (let value of arr1) {
//     if (result[value]) {
//       result[value]++;
//     } else {
//       result[value] = 1;
//     }
//   }
//   return result;
// }
// let arr1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
// console.log(countword(arr));

// //Swap keys and values of object.
// //Input:{ a: "x", b: "y", c: "z" }
// //Output:{ x: "a", y: "b", z: "c" }
// //Here logic is something like a swap of two numbers.

// function Swap(obj1) {
//   let results = {};
//   for (let key in obj1) {
//     let value = obj1[key];
//     results[value] = key;
//   }
//   return results;
// }
// let obj1 = { a: "x", b: "y", c: "z" };
// console.log(Swap(obj1));

// //4. **Find the largest value key**
// //  - Input:{ a: 10, b: 50, c: 20 }
// //  - Output:b
// function largestvalue(obj) {
//   let maxkey = null;
//   let maxValue = -Infinity;
//   for (let key in obj) {
//     if (obj[key] > maxValue) {
//       maxValue = obj[key];
//       maxkey = key;
//     }
//   }
//   return maxkey;
// }
// let obj = { a: 10, b: 50, c: 20 }
// console.log(largestvalue(obj));

// // 5. **Flatten object of arrays into one array**
// //     - Input:{ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
// //     - Output:["apple", "banana", "carrot", "pea"];
// // What i learn from this quesion
// // --How flat function works.
// // And an Object is a built-in global object (constructor) in JavaScript.
// // 🧠 Why do we use Object.*() methods?
// // 👉 To work with objects easily without writing manual loops
// // Object have lot of properties to use like--Objetc.key()--Object.value() and many more.
// // Simpel Understanding---Instead of using loop use Objetc.
// // 👉 Instead of writing:
// // for(let key in obj){
// // manual work
// // }
// // 👉 You can use:
// // Object.keys(obj)
// // Object.values(obj)

// let object = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
// let value = Object.values(object);
// value = value.flat()
// console.log(value);

// // 6. ** Group people by city **
// //   - Input:
// // [
// //   { name: "A", city: "Delhi" },
// //   { name: "B", city: "Mumbai" },
// //   { name: "C", city: "Delhi" }
// // ]
// // Output: { Delhi: ["A", "C"], Mumbai: ["B"] }
// // logic: --Cnvrt the array into object
// const arr = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ];
// const result = {};
// for (let i = 0; i < arr.length; i++) {
//   const city = arr[i].city;
//   const name = arr[i].name;

//   if (!result[city]) {
//     result[city] = [];
//   }
//   result[city].push(name);
// }
// console.log(result);

// // 7. ** Filter object by values > 50 **
// //   - Input: { a: 20, b: 60, c: 40, d: 90 }
// // - Output: { b: 60, d: 90 }

// function greater(obj) {
//   let result = {};
//   for (let key in obj) {
//     if (obj[key] > 50) {
//       let value = key;
//       result[value] = obj[key];
//     }
//   } return result;
// }
// let obj = { a: 20, b: 60, c: 40, d: 90 }
// console.log(greater(obj));

// // 8. Find student with highest average mark
// //   - Input: { A: [80, 90], B: [70, 75, 85] }
// // - Output: A

// function avgMarks(obj) {
//   //First we iterate through the object and store the arr inside a variable.
//   let student = "";
//   let maxavrg = 0;
//   for (let key in obj) {
//     let arr = obj[key];
//     let sum = 0;
//     for (let value of arr) {
//       sum = sum + value;
//     }
//     //Now we need to find the average marks
//     let avrg = sum / arr.length;
//     //Now we need to find the maxaVrg value and print their key.
//     if (avrg > maxavrg) {
//       maxavrg = avrg;
//       student = key;
//     }
//   }
//   return student;
// }
// let obj = { A: [80, 90], B: [70, 75, 85] }
// console.log(avgMarks(obj));

// //9. **Unique values across all object arrays**
// // - Input:{ x: [1,2,3], y: [2,3,4], z: [4,5] } 
// // - Output:[1,2,3,4,5]

// const obj1 = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
// const result = [...new Set(Object.values(obj1).flat())];
// console.log(result);


// // 10. **Pick only given keys from object**
// //     - Input:{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
// //     - Output:{ name: "Rahul", city: "Noida" }

// const obj={name:"Rahul",age:23,city:"Noida"};
// const keys=["name","city"];

// let result={};
// for(let i=0;i<keys.length;i++){
//     let key=keys[i];
//     result[key]=obj[key]
// }
// console.log(result);

// // 11:- Input:
// //     { a: 3, b: 1, c: 2 }
// // - Output:[["b",1], ["c",2], ["a",3]]

// const obj={a:3,b:1,c:2}
// const entries=Object.entries(obj);
// const result=entries.sort((a,b)=>a[1]-b[1]);
// console.log(result);

// 13. **Count number of keys in object**
//     - Input:{ a: 1, b: 2, c: 3 }
//     - Output:3

// let obj={a:1,b:2,c:3};
// let count=0;
// for(let key in obj){
//     count++;
// }
// console.log(count);

// 14. **Capitalize string values inside object**
//     - Input:{ name: "alice", city: "delhi" }
//     - Output:{ name: "Alice", city: "Delhi" }

// let obj={name:"alice",city:"delhi"}
// let result={};
// for(let key in obj){
//     let value=obj[key];
//     result[key]=value.charAt(0).toUpperCase()+value.slice(1);
   
// }
//  console.log(result);

// 15. **Convert object to query string**
//     - Input:{ name: "Alice", age: 25 }
//     - Output:"name=Alice&age=25"

// let obj={name:"Alice",age:25}
// const queryString=new URLSearchParams(obj).toString();
// console.log(queryString);

// 16. **Count even and odd numbers in array**
//     - Input:
//         [1,2,3,4,5,6]
//     - Output:
//         { even: 3, odd: 3 }

// const arr=[1,2,3,4,,6]
// let result={};
// let even=0;
// let odd=0;

// for(let key of arr){
//     if(key%2==0){
//          even++;
//     } else {
//          odd++;
//     }
// }
// result.even=even;//Manually inserting the key here using (.)operator.
// result.odd=odd;
// console.log(result);

//--------------------------------------------------------------------------------------------
// 17. **Find common keys between two objects**
//     - Input:{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
//     - Output:["b","c"].

//We can solve it using nested loop,singel loop,and using inbuilt-method to.

// let obj1={ a: 1, b: 2, c: 3 };
// let obj2={ b: 4, c: 5, d: 6 }

//singel loop.
// let commonkey=[];
// for(let key in obj1){
//     if(key in obj2){
//         commonkey.push(key);
//     }
// }
// console.log(commonkey);

//Nested loop.
// let arr=[]
// for(let key1 in obj1){
//    for(let key2 in obj2){
//     if(key1==key2){
//         arr.push(key1);
//     }
//    }
// }
// console.log(arr);

//Built in methods
// const commonKeys = Object.keys(obj1).filter(key =>
//     Object.keys(obj2).includes(key)
// );

// console.log(commonKeys);

//-------------------------------------------------------------------------------------------------

// 18. **Convert array of objects to lookup by id**
//     - Input:[{ id: 1, name: "A" }, { id: 2, name: "B" }]
//     - Output:{ 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }

// const arr=[{id:1,name:"A"},{id:2,name:"B"}]
// //here we use a reduce mehtod to solve this question.
// const result=arr.reduce((acc,curr)=>{
//     acc[curr.id]=curr;
//     return acc;
// },{})
// console.log(result);
//------------------------------------------------------------------

//19. **Check if all values in object are numbers**
    // - Input:{ a: 1, b: "hello", c: 3 }
    // - Output:false.

// let obj={ a: 1, b: "hello", c: 3 };

// let checkValue=true;
// for(let key in obj){
//     if(typeof obj[key] !== "number"){
//         checkValue=false;
//         break;//when value is false it breaks the loop and return the answer.
//     }
// }
// console.log(checkValue);