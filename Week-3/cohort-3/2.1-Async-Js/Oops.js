class Shape{
    constructor(color){
        this.color=color;
    }
    paint(){
        console.log('paint with color'+this.color);
    }
}

class Rectangle extends Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        super(color);
    }

    static whoami(){
        return 'I am a rectangle';
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    perimeter(){
        return 2*(this.width*this.height);
    }
}

class Circel extends Shape{
    constructor(radius,color){
        this.radius=radius;
        super(color);
    }

    area(){
        return 3.14 * this.radius * this.radius;
    }

    perimeter(){
        return 2 * 3.14 * (this.radius);
    }

}

class Square extends Shape{
    constructor(side,color){
        this.side=side;
        super(color);
    }

    area(){
        return this.side * this.side;
    }

    perimeter(){
        return 4 * this.side;
    }

}
//rect is called the instance of the Rectangle class.
const rect = new Rectangle(2,4,'red');
const area = rect.area();
console.log(area);

// Date is also a class.

const d=new Date();
console.log('Date',d.getDate());
console.log('Month',d.getMonth());
console.log('Day',d.getDay());


