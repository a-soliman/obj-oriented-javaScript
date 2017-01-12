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

// 	//varify for a prop of the prototype of an obj

// document.write("name property of grover : " + grover.hasOwnProperty("name") + "<br />")
// document.write("sound property of grover : " + grover.hasOwnProperty("sound") + "<br />")

	// creating a function to search within the array

// Array.prototype.inArray = function inArray(value) {
// 	for(var i = 0; i < this.length ; i++) {
// 		if(this[i] === value) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// var sampArray = [1,2,3,4,5];

// document.write("3 in Array : " + sampArray.inArray(3) + "<br />")

	// securing the props by making them vars inside the constructor

// function SecretCode() {
// 	var secretNum = 78;

// 	this.guessNum = function(num) {
// 		if(num > 78) {
// 			return "Lower!"
// 		} else if(num < 78) {
// 			return "Higher!"
// 		} else {
// 			return "You Guessed it :)"
// 		}
// 	}
// }

// var secret = new SecretCode();

// document.write("Value of secretNum : " + secret.secretNum + "<br />")

// document.write("Is 70 the number ? ==> " + secret.guessNum(70) + "<br />")

// SecretCode.prototype.getSecret = function() {
// 	return this.secretNum
// }

// document.write("The Secret Number is " + secret.getSecret() + "<br />")

	// === getters and seters ===

// var address = {
// 	street: "No Street",
// 	city: "No City",
// 	state: "No State",

// 	get getAddress() {
// 		return this.street + ", " + this.city + ", " + this.state + "."
// 	},

// 	set setAddress(theAddress) {
// 		var parts = theAddress.toString().split(", ")
// 		this.street = parts[0] || "";
// 		this.city = parts[1] || "" ;
// 		this.state = parts[2] || "";
// 	}
// }