const os = require('os');

console.log(os.totalmem());
console.log(os.freemem());

//Template string
//ES6 / ES2015 : ECMAScript 6
console.log(`Balance Memory : ${os.totalmem - os.freemem}`);