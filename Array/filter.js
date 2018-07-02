//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
/****
 * callback is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed
 */
/**************************** 1 /****************************/
//Filtering out all small values
function isBigEnough(value) {
    return value >= 10;
  }
  
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]

/**************************** 2 /****************************/
//Filtering invalid entries from JSON
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }
  
  var arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array\n', arrByID); 
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries); 
  // Number of Invalid Entries = 5
  /**************************** 3 ****************************/
  //Searching in array
  var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  /**
   * Array filters items based on search criteria (query)
   */
  function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }
  
  console.log(filterItems('ap')); // ['apple', 'grapes']
  console.log(filterItems('an')); // ['banana', 'mango', 'orange']
  /**************************** 4 ****************************/
  //ES2015 Implementation

  const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  /**
   * Array filters items based on search criteria (query)
   */
  const filterItems = (query) => {
    return fruits.filter((el) =>
      el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
  
  console.log(filterItems('ap')); // ['apple', 'grapes']
  console.log(filterItems('an')); // ['banana', 'mango', 'orange']