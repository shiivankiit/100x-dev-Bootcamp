//Sum value in object array.
//Input:{ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }.
//Output:{ food: 60, travel: 20, bills: 100 }.

function sum(user) {
   //Here we use two nested loop
   //1:---for..in for nested loop.
   //2:---for..of or for loop for inner loop.
   let result={};
   for(let key in obj){
    let arr=obj[key];
    let sum=0;
    for(let value of arr){
        //console.log(value);
        sum=sum+value;
        result[key]=sum;
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

function countword(arr){
   //for array we use for of loop
   //and we need to convert array into the object.
   let result={};
   for(let value of arr){
     if(result[value]){
        result[value]++;
     } else{
        result[value]=1;
     }
   }
   return result;
}
let arr=["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countword(arr));

//Swap keys and values of object.
//Input:{ a: "x", b: "y", c: "z" }
//Output:{ x: "a", y: "b", z: "c" }
//Here logic is something like a swap of two numbers.

function Swap(obj1){
    let results={};
    for(let key in obj1){
       let value=obj1[key];
       results[value]=key;
    }
   return results;
}
let obj1={a:"x",b:"y",c:"z"};
console.log(Swap(obj1));

//4. **Find the largest value key**
   //  - Input:{ a: 10, b: 50, c: 20 }
   //  - Output:b
        function largestvalue(obj){
           let maxkey=null;
           let maxValue=-Infinity;
           for(let key in obj){
            if(obj[key]>maxValue){
               maxValue=obj[key];
               maxkey=key;
            }
           }
           return maxkey;
        }
        let obj={a:10,b:50,c:20}
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
let value=Object.values(object);
 value=value.flat()
 console.log(value);
