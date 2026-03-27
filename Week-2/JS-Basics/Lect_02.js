//Complex Types

function islegal(user){
    if(user.age>=18){
        console.log(user.name + " is allowed to vote");
    } else{
        console.log(user.name + " is not allowed to vote");
    }
}
var user1 = {
    name : "harkirat",
    age : 17,
    password : "edfrt56",
    address:{
        city:"cmd"
    },
    metadata:{
        likes:"girls"
    }
}
var user2 ={
    name : "ramanjeet",
    age:32,
    password:"erdfdudy"
}
islegal(user1);
islegal(user2);
console.log(user1.address.city);