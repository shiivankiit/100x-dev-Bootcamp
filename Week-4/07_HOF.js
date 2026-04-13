//High order function in Javascript.

//map().
const nums = [1, 2, 3];

const result = nums.map(num => num * 2);

console.log(result); // [2, 4, 6]

//--------------------------------------------

//filter()
const number=[1,2,3,4,5];
const final_result=number.filter(num=>num%2===0);
console.log(final_result); //[2,4]
//number--this is the element in the array.
//---------------------------------------------

//reduce()
const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const resultt = arr.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(resultt);