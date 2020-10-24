class Customer {
    private _firstName;
    private _lastName;
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
    
    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}
// use $ tsc -t es5 Customer.ts to call the js file
// the thing after tsc is called 'compiler flag'
// rather than tsc Customer.ts
let myCustomer = new Customer("Haoran", "Yu");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);


