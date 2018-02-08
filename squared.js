const testArray = [1, 2, 3, 6, 7, 8, 9, 25];

function squared(array) {
  const mainArray = [2];

  mainArray[0] = _.filter(array, num => num % Math.sqrt(num) === 0);
  mainArray[1] = _.filter(array, num => num % Math.sqrt(num) !== 0);

  return mainArray;
}

console.log(squared(testArray));
