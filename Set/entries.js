//The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.

const set1 = new Set();
set1.add(42);
set1.add('forty two');

const iterator1 = set1.entries();

for (let entry of iterator1) {
  console.log(entry);
  // expected output: [42, 42]
  // expected output: ["forty two", "forty two"]
}
