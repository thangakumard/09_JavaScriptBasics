/*******
Syntax
    var new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // Return element for new_array
    }[, thisArg])
Parameters
callback
    Function that produces an element of the new Array, taking three arguments:
 
currentValue
    The current element being processed in the array.
indexOptional
    The index of the current element being processed in the array.
arrayOptional
    The array map was called upon.
thisArgOptional
    Value to use as this when executing callback.
Return value
    A new array with each element being the result of the callback function.
 */
//Mapping an array of numbers to an array of square roots
//The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

//Using map to reformat objects in an array
//The following code takes an array of objects and creates a new array containing the newly reformatted objects.

var kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

//Using map generically
//This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]