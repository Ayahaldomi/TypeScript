////////////////////////////////////// Task 1  //////////////////////////////////
var number = 5;
if (number % 2 === 0) {
    console.log("".concat(number, " is an even number."));
}
else {
    console.log("".concat(number, " is an odd number."));
}
///////////////////////////////////// Task 2 //////////////////////////////////
var array = [50, 25, 40, 60];
var number2 = 20;
array.sort();
for (var i = 0; i < array.length; i++) {
    if (array[i] > number2) {
        console.log("".concat(array[i], " is larger than ").concat(number2));
    }
}
;
var users = [
    { Name: "rahaf", Age: 35, isAdmin: true },
    { Name: "rawaah", Age: 40, isAdmin: false },
    { Name: "batool", Age: 45, isAdmin: true }
];
var oldestAdmin = null;
for (var i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        if (oldestAdmin === null || users[i].Age > oldestAdmin.Age) {
            oldestAdmin = users[i];
        }
    }
}
if (oldestAdmin) {
    console.log("Oldest Admin: ".concat(oldestAdmin.Name));
}
