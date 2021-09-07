// Checking sum zero of an array
// [-5,-4,-3, -2, -1, 0 , 2, 4, 6 , 8]
// [-4, 4] -> output

let arr = [-5, -4, -3, -2, -1, 0, 3, 4, 6, 8];

function getSumPair(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return `[${array[i]}, ${array[j]}]`;
      }
    }
  }
}

console.log(getSumPair(arr));
