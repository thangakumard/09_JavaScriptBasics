/******
 The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.

The keys() method is an alias for this method (for similarity with Map objects); it behaves exactly the same and returns values of Set elements.
 * 
 */

const set1 = new Set();
set1.add(42);
set1.add('forty two');

var iterator1 = set1.values();

console.log(iterator1.next().value);
// expected output: 42

console.log(iterator1.next().value);
// expected output: "forty two"
