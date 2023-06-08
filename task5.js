// Create a function that takes an array of numbers as input and returns an array with only the prime numbers from the original array.

// Filter prime numbers from an array:
// Input: [2, 3, 4, 5, 6, 7, 8, 9]
// Output: [2, 3, 5, 7]

function returnPrime(arr) {
  const primes = [];

  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;

    if (arr[i] < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      primes.push(arr[i]);
    }
  }
  return primes;
}

const input = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(returnPrime(input));
