//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift(); 

console.log('myFish after:', myFish); 
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted); 
// Removed this element: angel

//Using shift() method in while loop
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
Specifications