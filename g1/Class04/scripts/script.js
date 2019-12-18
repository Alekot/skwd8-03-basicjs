
// Declaration of empty array
// let array = [];

// Delacration of array with elements
let arrayWithNumber = [1, 2, 3, 4, 5];
// console.log(arrayWithNumber);

// Declaration of array in multiple lines
// let arrayInMultipleLines = [
//     `1assssssssssssssssssssssssssssssssssssssssssssss`,
//     `1assssssssssssssssssssssssssssssssssssssssssssss`,
//     `1assssssssssssssssssssssssssssssssssssssssssssss`,
//     1,
//     undefined,
//     null
// ];

// Selecting second element from array
// let secondNumberInArray = arrayWithNumber[1];
// console.log(secondNumberInArray);

// Selection not existing element in array
// let notExistingIndex = arrayWithNumber[7];
// console.log(notExistingIndex);

// Changing value of element in array
// arrayWithNumber[3] = "Hello World";
// console.log(arrayWithNumber);

// Getting the array length
// console.log(arrayWithNumber.length);

// Getting the last element in the array
// console.log(arrayWithNumber[arrayWithNumber.length - 1]);

// Adding element on the end of an array with index
// arrayWithNumber[arrayWithNumber.length] = "Hello Sedc";
// console.log(arrayWithNumber);

// Adding elements in the end of the array using build in function push()
// arrayWithNumber.push("0");
// console.log(arrayWithNumber);
// arrayWithNumber.push(12, 32, 43, 12);
// console.log(arrayWithNumber);

// arrayWithNumber[8] = "Trajan";
// console.log(arrayWithNumber);

// arrayWithNumber.length;

// let lastNumeber = arrayWithNumber.pop();
// let firstNumber = arrayWithNumber.shift();
// arrayWithNumber.pop();
// let num = arrayWithNumber[4];
// console.log(lastNumeber);
// console.log(firstNumber);
// console.log(arrayWithNumber);


// While loop
// let x = 0;
// while (x < 10) {
//     console.log("im " + x);
//     x++;
// }

// console.log("after loop")

// While loop on existing array
// let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// let counter = 7; 
// while (counter < days.length) {  
// 	console.log(days[counter] + ', ');  
// 	counter++; 
// }

// endles loop
// while (true) {
    
// }

// Do While loop
// do {
//     console.log(days[2]);
// } while (counter < days.length);


// While loop to get elements from user input untill is entered 'admin'
// let x = 1;
// while (x !== 'admin') {
//     x = prompt('')
// } 

/// declare iterator; condition;         incerement iterator
// for (let i = 0; i < arrayWithNumber.length; i++){
//     console.log(arrayWithNumber[i]);
// }

//Declaring for loop
// for (let i = arrayWithNumber.length - 1; i >= 0; i--){
//     console.log(arrayWithNumber[i], "I = " + i);
// }

// let number = 1.2333333333;
// console.log(number);
// console.log(number.toFixed(2));

// STUDENT EXERCISE 1
function sumOfPow(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++){
        sum = sum + Math.pow(i, 2);   
    }
    return sum;
}

// console.log(sumOfPow(101, 150));

// CREATE A FUNCTION THAT TAKES 2 PARAMETERS
// 1. MIN AND 2. MAX
// RETURN AN ARRAY OF THE NUMBERS BETWEEN MIN AND MAX

function createArray(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++){
        arr.push(i);   
    }
    return arr;
}


// For of loop
//let arr = createArray(1, 10);
// let arr2 = ["Trajan", "Ivo"];
// console.log("ForOf")
// for (let num of arr2) {
//     console.log(num);
// }


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);   
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// break keyword breaks the loop
// for (let i = 1; i < arr.length; i++){
//     if (i % 7 === 0) {
//         break;
//     }
//     console.log(i);
// }

// continue keyword skips the given index and goes to next item

// for (let i = 1; i < arr.length; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
