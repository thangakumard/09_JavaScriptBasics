const first = [1,2,3];
const second = [4,5,6];

//Merging arrays 
// You can insert new elements while merging arrays
const combined = first.concat(second);
const combined = [...first, ...second];
const combined = [...first, 'a', ...second,'b'];

//cloning arrays
const clone = [...first]