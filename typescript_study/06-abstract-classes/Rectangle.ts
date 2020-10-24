import { Shape } from './Shape';

export class Rectangle extends Shape {
    calculateArea(): number {
        return this._length * this._width;
    }
    
    constructor(theX: number, theY: number,
                private _width: number, private _length: number) {
        super(theX, theY);
    }
    
    public set width(value: number) {
        this._width = value;
    }
    
    public get width(): number {
        return this._width;
    }
    
    private set length(value: number) {
        this._length = value;
    }

    private get length(): number {
        return this._length;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
}