//////////////////////////////////////////// Task 1 /////////////////////////////////////////////////////////////
var person = {
    name: "John Doe",
    age: 25,
    isEighteen: function () {
        if (this.age >= 18) {
            console.log(this.name + " is 18 years old or older.");
        }
        else {
            console.log(this.name + " is younger than 18 years old.");
        }
    }
};
person.isEighteen();
var Teacher = {
    name: "Mr. Smith",
    subject: ["Math", "Science"],
    teach: function () {
        var _this = this;
        Teacher.subject.forEach(function (element) {
            console.log(_this.name + " is teaching " + element);
        });
    }
};
Teacher.teach();
var products = [
    { name: 'Product 1', price: 100, quantity: 3 },
    { name: 'Product 2', price: 200, quantity: 6 },
    { name: 'Product 3', price: 150, quantity: 7 }
];
function increasePrice(products) {
    products.forEach(function (product) {
        if (product.quantity > 5) {
            product.price *= 1.1; // Increase price by 10%
        }
    });
}
increasePrice(products);
console.log(products);
function initializeDevice(device) {
    if (device.start) {
        device.start(); // If start() is defined, call it
    }
    else {
        console.log("Device starting with default settings.");
    }
}
// Example devices
var deviceWithStart = {
    start: function () {
        console.log("Device starting with custom settings.");
    }
};
var deviceWithoutStart = {}; // No start() method
// Testing the function
initializeDevice(deviceWithStart); // Output: "Device starting with custom settings."
initializeDevice(deviceWithoutStart); // Output: "Device starting with default settings."
