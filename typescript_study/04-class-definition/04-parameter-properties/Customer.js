"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// use $ tsc -t es5 Customer.ts to call the js file
// the thing after tsc is called 'compiler flag'
// rather than tsc Customer.ts
var myCustomer = new Customer("Haoran", "Yu");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
