import { Shape } from "./Shape";

export class Circle extends Shape {
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
    constructor(theX: number, theY: number, private _radius: number)  {
        // call superclass constructor
        super(theX, theY);
    }
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    // call superclass method, override the getInfo() method
    getInfo(): string {
        return super.getInfo() + `. radius=${this._radius}`;
    }
}