var Customer = /** @class */ (function () {
    // use constructor keyword
    // this. is a must
    function Customer(theFirst, theLast) {
        this.firstname = theFirst;
        this.lastname = theLast;
    }
    return Customer;
}());
// if constructor is defined, it will be used
var myCustomer = new Customer("Haoran", "Yu");
// these two lines may results in errs because fname and lname are now private
// console.log(myCustomer.firstname);
// console.log(myCustomer.lastname);
// commands
// tsc class.ts
// node class.js
// even with erros ts compiled can also generate js file
// and the code will still run
// tsc --noEmitOnError class.js will prevent it
