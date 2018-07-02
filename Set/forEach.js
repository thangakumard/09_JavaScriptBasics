//-The forEach() method executes a provided function once for each value in the Set object, in insertion order.

function logSetElements(value1, value2, set) {
    console.log('s[' + value1 + '] = ' + value2);
  }
  
  new Set(['foo', 'bar', undefined]).forEach(logSetElements);
  
  // expected output: "s[foo] = foo"
  // expected output: "s[bar] = bar"
  // expected output: "s[undefined] = undefined"
  localStorage();
  