// Implement a function that takes an array of integers as input and returns the sum of the two largest numbers.

// Sum of the two largest numbers in an array:
// Input: [5, 8, 2, 10, 3]
// Output: 18 (sum of 10 and 8)

function sumOfTwoLargest(arr) {
  arr.sort((a, b) => {
    return b - a;
  });

  return arr[0] + arr[1];
}

const input = [5, 8, 2, 10, 3];
console.log(sumOfTwoLargest(input));
