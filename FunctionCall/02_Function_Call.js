/***************
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*****************/

var person = {
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    },
    detail: function(city, country) {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(person1); 
person.detail.call(person1,"Belleue", "USA");