//Classes in JavaScript.
//Here i defined the class.
class Shape{
    constructor(color){
        this.color=color
    }
       paint() {
			console.log(`Painting with color ${this.color}`);
    }
}
class Rectangle extends Shape{
   //The job of a constructor is to attach value to this keyword which is passed an argument while
   //creating an object.
   constructor(width, height, color) { 
    //Here we use super ki Mera jo parent class hai uske constructor ko call karenge with the property.
    //Basically super keyword call the super class constructor.
        super(color);
	    this.width = width;
	    this.height = height;
   }
   //Non-static method you call them on object
   //This variables takes the shape of the object on which it is called.
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   perimeter(){
    return 2*(this.width + this.height);
   }
   //While this is static method you can't call them on the object you can directly call them on class.
   static add(a,b){
    return a+b;
   }

   
}
class Square extends Shape{
    constructor(side,color){ 
        super(color);
        this.side=side;
       
    }
    area(){
       return  this.side * this.side
    }
}
class Circel extends Shape{
    constructor(radius,color){
        super(color)
        this.radius=radius;
        
    }
    area(){
        return 3.14 * this.radius * this.radius;
    }
}

//With the help of object how we use this class.
const rect = new Rectangle(2, 4,"red");
const area = rect.area();
const perimeter=rect.perimeter();
console.log(area)
console.log(perimeter)
//This is static where you calling them on the class.
console.log(Rectangle.add(20,30))
const c1= new Circel(5,"red");
console.log(c1.paint());

//Revisiting the lecture again and code base. 

//Constructor:-A special method inside the class that is called when you cretae an instance
//(an object) of the class.It is used to initalize the property of the object.

//This varibale takes the shape of the input which is passed as an arguments. and it refer to current object.
//When used inside a class, this refers to the instance (object) created from that class.


//Inheritance:--
//Inheritance in javascript classes allows one class to inherit properties and method from another
//class. This mechanism enables code reuse, making it easier to create new classes that are based
//on existing ones,without having to duplicate the code.

//And we use extend to inherit the class.
//Mostly we use it when every class has a same method exist then we create a seprate class with the property
//and then every other class extends form that class.


//Super:-Keyword which is used to acess the parent class.
//1--Calling the parent class constructor.
//2--Call method of the parent class.