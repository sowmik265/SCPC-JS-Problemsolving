//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const originalString = "hello world";
const reversedString = reverseString(originalString);
console.log(reversedString);


//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const sumOfPositiveNumbers = (arr) => {
    return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}
const numbers = [2, -5, 10, -3, 7];
const result = sumOfPositiveNumbers(numbers);
console.log(result);


//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) {

    const frequency = {};

    arr.forEach((element) => {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    });

    let mostFrequentElement;
    let highestFrequency = 0;
    for (const element in frequency) {
        if (frequency[element] > highestFrequency) {
            mostFrequentElement = element;
            highestFrequency = frequency[element];
        }
    }

    return mostFrequentElement;
}

const numbers3 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result3 = findMostFrequentElement(numbers3);
console.log(result3);


//   Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

const numbers4 = [1, 3, 6, 8, 11, 15];
const target = 9;
const result4 = findTwoNumbersWithSum(numbers4, target);
console.log(result4);


//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator.";
    }
}

// Examples:
console.log(calculator(5, '+', 3));
console.log(calculator(10, '-', 4));
console.log(calculator(6, '*', 5));
console.log(calculator(15, '/', 3));
console.log(calculator(7, '/', 0));
console.log(calculator(5, '%', 3));


//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
    const charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?{}[]|";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);


//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentNumeral = romanNumerals[roman[i]];
        const nextNumeral = romanNumerals[roman[i + 1]];

        if (nextNumeral > currentNumeral) {
            result += nextNumeral - currentNumeral;
            i++; 
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

// Examples:
console.log(romanToInt("III")); 
console.log(romanToInt("IX")); 
console.log(romanToInt("XXI")); 
console.log(romanToInt("XLII")); 
console.log(romanToInt("XCIV"));
console.log(romanToInt("MMXXI")); 


//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Error: The array must contain at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "Error: All elements in the array are the same.";
    }
  
    return secondSmallest;
  }
  
  // Examples:
  console.log(findSecondSmallest([1, 3, 6, 8, 11, 15])); 
  console.log(findSecondSmallest([7, 5, 2, 5, 3, 3, 1, 4])); 
  console.log(findSecondSmallest([5, 5, 5])); 
  console.log(findSecondSmallest([9])); 
  







