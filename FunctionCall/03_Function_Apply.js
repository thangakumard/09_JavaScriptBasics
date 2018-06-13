/***************
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*****************/
var person = {
    fullName: function(city, country) {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
person.fullName.apply(person1, ["Oslo", "Norway"]);