//Arrays
//Array let you group data together.

const user = ["harkirat", "raman", "diljeet"]
console.log(user)//prints the complete array.
console.log(user[1]);
//you can also print the whole array using for loop.

//Arrays of objects.

function islegaltovote(user){
      if(user.age>18){
        console.log(user.name +" is allowed to vote");
      } else{
        console.log(user.name+" is not allowed to vote");
      }
}
var users = [{
    name: "kirat",
    age: 33
}, {
    name:"ramanjeet",
    age:32
}]
islegaltovote(users[0]);
islegaltovote(users[1]);