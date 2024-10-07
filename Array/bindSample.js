const person ={
    name:"Mosh",
    walk(){
        console.log(this);
    }
};

person.walk();
const walk1 = person.walk.bind(person);
walk1();