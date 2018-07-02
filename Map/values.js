//The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.
var map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

var iterator1 = map1.values();

console.log(iterator1.next().value);
// expected output: "foo"

console.log(iterator1.next().value);
// expected output: "bar"
