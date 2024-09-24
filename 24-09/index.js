/////////////////////////////////////////////  task 1 ///////////////////////////////////////////////
///Sum All Elements in an Array
function sumAllElements() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (element) {
        sum += element;
    });
    return sum;
}
console.log(sumAllElements(1, 2, 3, 4, 5));
///////////////////////////////////////////// task 2 ///////////////////////////////////////////////
function positive() {
    var arry = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arry[_i] = arguments[_i];
    }
    arry.forEach(function (element) {
        if (element < 0) {
            return "Array contains negative numbers";
        }
    });
    return "Array contains only positive numbers";
}
///////////////////////////////////////////// task 3 ///////////////////////////////////////////////
var names = ["ayah", "hasan", "ali", "bani domi"];
var longestName = "";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1.length > longestName.length) {
        longestName = name_1;
    }
}
console.log("The longest name is:", longestName);
///////////////////////////////////////////// task 4 ///////////////////////////////////////////////
var string = "Hello World";
var character = "l";
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
        count++;
    }
}
console.log(character + " appears " + count + " times in the string");
/////////////////////////////////////// task 5 ////////////////////////////////////////////////////
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = [];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                break;
            }
            if (i === number - 1) {
                primeNumbers.push(number);
            }
        }
    }
}
console.log("Prime numbers in the array:", primeNumbers);
