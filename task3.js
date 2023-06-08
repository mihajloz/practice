// Write a function that takes a string as input and determines whether it is a palindrome (reads the same forwards and backwards).

// Check if a string is a palindrome:
// Input: "racecar"
// Output: true

function palindromeCheck(str) {
  return str === str.split("").reverse().join("");
}

const input = "racecar";
console.log(palindromeCheck(input));
