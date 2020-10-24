import { Shape } from './Shape';

export class Rectangle extends Shape {
    
    constructor(theX: number, theY: number,
                private _width: number, private )
    
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
}