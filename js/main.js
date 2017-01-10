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