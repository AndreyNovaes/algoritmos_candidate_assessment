const operations = new Map();

operations.set('addition', (arrOfNumbers) => {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    sum += arrOfNumbers[i];
  }
  return sum;
})

operations.set('subtraction', (arrOfNumbers) => {
  let sumOfDifferences = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    sumOfDifferences -= arrOfNumbers[i];
  }
  return sumOfDifferences;
})

operations.set('multiplication', (arrOfNumbers) => {
  let sumOfProducts = 1;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    sumOfProducts *= arrOfNumbers[i];
  }
  return sumOfProducts;
})

operations.set('division', (a, b) => {
  if (b === 0) {
    return 'Absurdo! - Nerckie';
  }
  return a / b;
})

console.log(operations.get('addition')([1, 2, 3, 4, 5])); // 15
console.log(operations.get('subtraction')([10, 2, 3])); // - 15
console.log(operations.get('multiplication')([2, 3, 4])); // 24
console.log(operations.get('division')(10, 2)); // 5
console.log(operations.get('division')(10, 0)); // Absurdo! - Nerckie
