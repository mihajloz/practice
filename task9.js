// Write a function that takes an array of integers as input and returns an array with the top K largest numbers, where K is an input parameter.

// Get the top K largest numbers from an array:
// Input: [10, 5, 8, 3, 2, 9], K = 3
// Output: [10, 9, 8] (top 3 largest numbers)

function topLargestNumbers(arr, K) {
  if (K >= arr.length) {
    return arr;
  }

  const sortedArr = arr.sort((a, b) => b - a);
  const topK = sortedArr.slice(0, K);
  return topK;
}

const input = [10, 5, 8, 3, 2, 9];
const K = 3;
console.log(topLargestNumbers(input, K));
