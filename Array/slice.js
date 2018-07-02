//The slice() method returns a shallow copy of a portion of an array into a new array object 
//selected from begin to end (end not included). The original array will not be modified.

//slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:


var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


