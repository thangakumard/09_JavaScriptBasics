/*
Array.from() lets you create Arrays from:

array-like objects (objects with a length property and indexed elements) or
iterable objects (objects where you can get its elements, such as Map and Set).
Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array (or subclass object) that is being created. More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array. This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.

The length property of the from() method is 1.*/
//** 1 **/
//Array from a String
console.log(Array.from("foo"));

//** 2 **/
//Array from a Set
console.log(Array.from(new Set(['foo'], ['second'])));

//** 3 **/
// Array from Map
var m = new Map([[1,2], [2,4], [4,8]]);
console.log(Array.from(m));

var mapper = new Map([['1','a'],['2','b']]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));

//** 4 **/
//Array from an Array-like object (arguments)
function f() {
    return Array.from(arguments);
  }
  
  f(1, 2, 3);

  //** 5 **/
  //Using arrow functions and Array.from
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);      
// [2, 4, 6]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]