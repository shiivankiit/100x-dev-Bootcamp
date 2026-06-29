// const dog = {
//     name:"doggie",
//     legCount:2,
//     speaks:"bhow bhow"
// }
// const cat={
//     name:"cat",
//     legCount:4,
//     speaks:"meow meow"
// }
// function printStr(animal){
//     console.log(`animal ${animal.name} ${animal.speaks}`);
// }
// printStr(dog);
// printStr(cat);


//JSON:---In json format you will send data to some other person.

const user='{"name":"harkirat","age":"21","gender":"male"}'
//JSON.parse  ..... JSON.stringify.
const users=JSON.parse(user);
console.log(users["age"]);


const userdata={
    name:"harkirat",
    gender:"male"
}
const finalstring=JSON.stringify(userdata);
console.log(finalstring);


//Math methods:-Math.ceil,Math.floor,Math.random(),Math.max(),Math.min(),Math.pow(),Math.sqrt().
