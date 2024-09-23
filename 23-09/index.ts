////////////////////////////////////// Task 1  //////////////////////////////////

let number: number = 5;


if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}


///////////////////////////////////// Task 2 //////////////////////////////////

let array: Array<number> = [50, 25, 40 ,60];
let number2: number = 20;
array.sort();
for (let i = 0; i < array.length ; i++) {
    if (array[i] > number2) {
        console.log(`${array[i]} is larger than ${number2}`);
    }
};

///////////////////////////////////// Task 3 //////////////////////////////////

type User = {
    Name: string;
    Age: number;
    isAdmin: boolean;
  };
  
  let users: User[] = [
    { Name: "rahaf", Age: 35, isAdmin: true },
    { Name: "rawaah", Age: 40, isAdmin: false },
    { Name: "batool", Age: 45, isAdmin: true }
  ];

  let oldestAdmin: User | null = null;
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      if (oldestAdmin === null || users[i].Age > oldestAdmin.Age) {
        oldestAdmin = users[i];
      }
    }
  }
  
  if (oldestAdmin) {
    console.log(`Oldest Admin: ${oldestAdmin.Name}`);
  } 