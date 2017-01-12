setTimeout(function(){
   window.location.reload(1);
}, 1000);

// var customer =  {
// 	name: "John Smith",
// 	speak: function() {
// 		return "My name is " + this.name;
// 	},

// 	address: {
// 		street: '123 Main',
// 		city: 'San Francisco',
// 		state: 'CA'
// 	}
// }
// document.write("Customer : " + customer.speak() + "<br />")

// document.write("Customer : " + customer.name + " lives at " + customer.address.street + "<br />")

// 	//add props

// customer.address.country = 'US'

// document.write(customer.address.country + "<br />")

// 	// Construction function

// function Person(name, street) {
// 	this.name = name;
// 	this.street = street;

// 	this.info = function() {
// 		return this.name + " Lives at " + this.street;
// 	}
// }

// var bobSmith = new Person('Bob Smith', '234 Main st')

// document.write(bobSmith.info() + "<br />")

// 	// check the objec of a spesific type

// document.write('Bob is a Person : ' + (bobSmith instanceof Person) + "<br />")

// 	// passing an object to a function and changing its props:

// function changeName(person) {
// 	person.name = "Sue Smith"
// }

// changeName(bobSmith)

// document.write("Bob became : " + bobSmith.name + "<br />")

// 	// 
// var person1 = new Person('Paul', '123Main');
// var person2 = new Person('Paul', '123Main');

// document.write("Are they equal : "+ (person1 === person2) + "<br />")

//==============================================================================

// === prototypes ===

// function getSum(num1, num2) {
// 	return num1 + num2
// }

// document.write("Num of arguments : " + getSum.length + "<br />")

// 	//== adding props and methods to an obj

// function Mammal(name) {
// 	this.name = name;
// 	this.getInfo = function() {
// 		return "The mammals name is : " + this.name; 
// 	}
// }

// Mammal.prototype.sound = "Grrrr";

// Mammal.prototype.makeSound = function() {
// 	return this.name + " says " + this.sound
// }

// var grover = new Mammal("Grover")

// document.write(grover.makeSound() + "<br />")

// 	//listing all the props of an object

// for(var prop in grover) {
// 	document.write(prop + " : " + grover[prop] + "<br />")
// }