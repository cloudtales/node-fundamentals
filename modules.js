console.log(arguments); // We are inside a function !!all the time!! , to be more precisse we are inside an IIFE, which includes the require object, the modules export etc.
console.log(require('module').wrapper);

// module.exports style
const C = require('./test-module-1');
const calc1 = new C();

console.log(calc1.add(2, 5));

// exports style
const calc2 = require('./test-module-2');
console.log(calc2.add(2, 5));
console.log(calc2.multiply(2, 5));

const { add: Add, multiply: Multiply, divide } = require('./test-module-2'); // Require + Destructuring (+AS)
console.log(Add(2, 5));

// caching
// first console.log is only executed once due to caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
