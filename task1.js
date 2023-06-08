// Write a function that takes a string as input and returns the longest word in the string.

// Find the longest word in a string:
// Input: "The quick brown fox"
// Output: "quick"

function longestWord(str) {
  // split string by spaces to make an array of words
  let wordsArray = str.split(" ");
  // set longest word to the first word in the array
  let longestWord = "";

  // iterate through the array
  for (let i = 0; i < wordsArray.length; i++) {
    // check if current word is longer than current longest word
    if (wordsArray[i].length > longestWord.length) {
      // if it is, set longest word to current word
      longestWord = wordsArray[i];
    }
  }

  return longestWord;
}

const input = "The quick brown fox11111111111";
const findLongestWord = longestWord(input);
console.log(findLongestWord);
