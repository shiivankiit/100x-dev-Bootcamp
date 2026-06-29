//classes.
//Every class has a constructor.
 class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
 }
//whenever you create a object ...class constructor gets called.
//class in a blueprint while object is a physical stuff of that class.
let dog = new Animal('dog',4,'bhow bhow');
console.log(dog);

//Date class
const currentDate=new Date();
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
