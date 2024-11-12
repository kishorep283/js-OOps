class Shape{
    area(){

    };
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return 3.14*(this.radius*this.radius);
    }
}
class Rectangle extends Shape{
    constructor(width,length){
        super();
        this.width=width;
        this.length=length;
    }
    area(){
        return this.width*this.length;
    }
}
var circle =new Circle(4);
console.log("Radius of Circle is:" + circle.area())
var rectangle=new Rectangle(4,5);
console.log("Area of rectangle is:" + rectangle.area());
