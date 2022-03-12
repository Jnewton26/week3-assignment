// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

const firstElement = ages.shift(); {
    console.log(ages);
    console.log(firstElement);
}
const lastElement = ages.pop(); {
    console.log(ages);
    console.log(lastElement);
}
// Programmatically subtract the value of the first element in the array from the value in the last element of the array
// (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
// Print the result to the console.

var subtraction = (lastElement - firstElement); {
    console.log(subtraction);
}
// Add a new age to your array and repeat the step above to ensure it is dynamic 
// (works for arrays of different lengths).

ages.push(24);
console.log(ages.push);
// Use a loop to iterate through the array and calculate the average age.
// Print the result to the console.

var total = 0;
for (var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avg = total / ages.length;
console.log(avg);

/////////////////////////////////////////////////////////////////////////////

// •Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// •Use a loop to iterate through the array and calculate the average number of letters per name.
// Print the result to the console.

avg = names.join('').length / names.length
console.log(names.splice('').join('').length);
console.log(avg);

// •Use a loop to iterate through the array again and concatenate all the names together, separated by spaces,
// and print the result to the console.

let concNames = ('');

for (let i = 0; i < names.length; i++) {
    concNames = concNames.concat(names[i]);
    console.log(concNames);
}
/////////////////////////////////////////////////////////////////////////////

// 3. Create a new array called nameLengths. 
const namesArray = ['Kelly', 'Sam', 'Kate'];
const nameLengths = [5, 3, 4];

//• Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// Print the result to the console. 

for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}
// • Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). 

let a = ['Hey'];
let funcTwoParameters = a.map(function (element) {
    return a.length;
}
)
// • Write a function that takes two parameters, firstName and lastName, and returns a full name
// (the full name should be the first and the last name separated by a space). 

function add(firstName, lastName) {
    return firstName + lastName;
}
console.log(add('Jacky', ' Newton'));
// • Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; {
    for (let i = 0; i < listOfNumbers.length; i++) {
        return false(listOfNumbers.join('').length > 100);
    } console.log(listOfNumbers.join('').length);
}
    //Write a function that takes an array of numbers and returns the average of all the elements in the array.


    // • Write a function that takes two arrays of numbers and returns true
    // if the average of the elements in the first array is greater than the average of the elements in the second array.


    // • Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
    // and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


    // • Create a function of your own that solves a problem. In comments, write what the function does and why you created it
