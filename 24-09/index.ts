/////////////////////////////////////////////  task 1 ///////////////////////////////////////////////

///Sum All Elements in an Array

function sumAllElements(...nums: number[]):number {
    var sum = 0;
    nums.forEach(element => {
        sum += element;
        
    });
    return sum;
}

console.log(sumAllElements(1, 2, 3, 4, 5)); 


///////////////////////////////////////////// task 2 ///////////////////////////////////////////////

function positive (...arry: number[]): string {
    arry.forEach(element =>{
        if (element<0){
            return "Array contains negative numbers";
        }
    });
    return "Array contains only positive numbers";
}

///////////////////////////////////////////// task 3 ///////////////////////////////////////////////

let names: string[] = ["ayah", "hasan", "ali", "bani domi"];  
    
let longestName: string = ""; 

for (let name of names) {
    if (name.length > longestName.length) {
        longestName = name;
    }
}

console.log("The longest name is:", longestName);

///////////////////////////////////////////// task 4 ///////////////////////////////////////////////


let string: string = "Hello World"; 
let character: string = "l"; 
let count: number = 0; 
for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
        count++;
    }
}
console.log(character + " appears " + count + " times in the string");

/////////////////////////////////////// task 5 ////////////////////////////////////////////////////

   
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let primeNumbers: number[] = []; 

for (let number of numbers) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
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