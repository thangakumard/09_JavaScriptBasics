//The set() method adds or updates an element with a specified key and value to a Map object.
var map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: undefined

