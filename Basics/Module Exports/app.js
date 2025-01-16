// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only Share Minimum)

const names = require('./name')
const sayHi = require('./utils')
const data = require('./alternate_method')
require('./someFn')

// console.log(data);
// console.log(names);

sayHi("Sumeet");
sayHi(names.john);
sayHi(names.peter);
