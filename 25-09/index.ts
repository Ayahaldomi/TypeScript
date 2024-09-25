//////////////////////////////////////////// Task 1 /////////////////////////////////////////////////////////////

interface person  {
    name : string;
    age : number;
    isEighteen():void;
}

var person : person = {
    name: "John Doe",
    age: 25,
    isEighteen: function() {
        if (this.age >= 18) {
            console.log(this.name + " is 18 years old or older.");
        } else {
            console.log(this.name + " is younger than 18 years old.");
        }
    }
}

person.isEighteen();


//////////////////////////////////////////////////// Task 2 ////////////////////////////////// 

interface Teacher {
    name: string;
    subject: string[];
    teach(): void;
}

var Teacher : Teacher = {
    name: "Mr. Smith",
    subject: ["Math", "Science"],
    teach: function() {
        Teacher.subject.forEach(element => {
            console.log(this.name + " is teaching " + element);
 
        });
    }
}

Teacher.teach();


///////////////////////////////////////////////// Task 3 /////////////////////////////////////////////////

interface Product {
    name: string;
    price: number;
    quantity: number;
  }
  
  const products: Product[] = [
    { name: 'Product 1', price: 100, quantity: 3 },
    { name: 'Product 2', price: 200, quantity: 6 },
    { name: 'Product 3', price: 150, quantity: 7 }
  ];

  function increasePrice(products: Product[]): void {
    products.forEach((product) => {
      if (product.quantity > 5) {
        product.price *= 1.1; // Increase price by 10%
      }
    });
  }
  
  increasePrice(products);
  console.log(products);

  /////////////////////////////////////////////// Task 4 //////////////////////////////////////////

  interface Device {
    start?(): void; // Optional method
  }
  
  function initializeDevice(device: Device): void {
    if (device.start) {
      device.start(); // If start() is defined, call it
    } else {
      console.log("Device starting with default settings.");
    }
  }
  
  // Example devices
  const deviceWithStart: Device = {
    start: () => {
      console.log("Device starting with custom settings.");
    }
  };
  
  const deviceWithoutStart: Device = {}; // No start() method
  
  // Testing the function
  initializeDevice(deviceWithStart);   // Output: "Device starting with custom settings."
  initializeDevice(deviceWithoutStart); // Output: "Device starting with default settings."
  
