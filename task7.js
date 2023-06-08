// Implement a function that takes an array of objects with "name" and "age" properties and returns the average age of all the objects.

//Calculate the average age from an array of objects:
// Input: [{ name: "John", age: 25 }, { name: "Jane", age: 30 }, { name: "Mike", age: 20 }]
// Output: 25 (average of 25, 30, and 20)

function avgAge(arr) {
  function ageSum(sum, person) {
    return sum + person.age;
  }

  const ageTotal = arr.reduce(ageSum, 0);
  const averageAge = ageTotal / arr.length;
  return averageAge;
}

const arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];
console.log(avgAge(arr));
