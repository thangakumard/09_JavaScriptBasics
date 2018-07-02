var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
  });
  
  console.log(promise1);