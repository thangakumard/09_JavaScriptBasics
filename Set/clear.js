//The clear() method removes all elements from a Set object.
const set1 = new Set();
set1.add(1);
set1.add('foo');

console.log(set1.size);
// expected output: 2

set1.clear();

console.log(set1.size);
// expected output: 0

