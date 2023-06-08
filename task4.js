// Implement a function that takes two arrays as input and returns the common elements between them.

// Find common elements between two arrays:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function findCommonElements(arr1, arr2) {
  let commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    let currentElement = arr1[i];

    if (arr2.includes(currentElement)) {
      commonElements.push(currentElement);
    }
  }

  return commonElements;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(findCommonElements(array1, array2));
