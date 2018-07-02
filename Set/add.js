//The add() method appends a new element with a specified value to the end of a Set object.

const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (let item of set1) {
  console.log(item);
  // expected output: 42
  // expected output: 13
}

var mySet = new Set();

mySet.add(1);
mySet.add(5).add('some text'); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
for (let item of mySet) {
    console.log(item);
    // expected output: 42
    // expected output: 13
  }