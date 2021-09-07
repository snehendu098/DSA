// Checking sum zero of an array
// [-5,-4,-3, -2, -1, 0 , 2, 4, 6 , 8]
// [-4, 4] -> output

// optimized solution
const array = [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8];

function check(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(check(array));
