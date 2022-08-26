// Function constructors

function Circle(radius) {
	this.radius = radius
}
Circle.prototype.getArea = function () {
	Math.PI * Math.pow(this.radius, 2)
}
var myCircle = new Circle(10) //new Object();
console.log(myCircle)

var myOtherCircle = new Circle(20)
console.log(myOtherCircle)
