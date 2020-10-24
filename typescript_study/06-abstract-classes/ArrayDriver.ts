import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new Circle(5, 10, 15);
let myRectangle = new Rectangle(0, 0, 10, 15);

let theShapes: Shape[] = [];

// adding other types will cause error
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
