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
   constructor(width, height, color) { 
        super(color);
	    this.width = width;
	    this.height = height;
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   perimeter(){
    return 2*(this.width + this.height);
   }

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

//With the help of object how i use this class.
const rect = new Rectangle(2, 4,"red");
const area = rect.area();
const perimeter=rect.perimeter();
console.log(area)
console.log(perimeter)
console.log(Rectangle.add(20,30))
const c1= new Circel(5,"red");
console.log(c1.paint());
