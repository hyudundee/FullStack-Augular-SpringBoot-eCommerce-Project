class Customer {
    private _firstName;
    private _lastName;
    // parameters properties shortcut
    constructor(private _firstName: string, private _lastName: string) {
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


// generate tsc template file
// tsc --init

// run 'tsc' will compile all .ts files