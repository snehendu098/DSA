// Count number of unique numbers
//
// [1,1,2,2,3,3,4,4,5,5,6,6,7,8,8]
// output --> 8
/* CONDITIONS
    i = 0
    j = 1
    array[i] !== array[j]
    // 1. i++
    // 2. arrau[i] = array[j]
 */

function uniqueArray(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}

console.log(uniqueArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 67, 57]));
