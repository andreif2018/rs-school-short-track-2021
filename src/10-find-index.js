/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let right = array.length - 1;
  let left = 0;
  while (right >= left) {
    const center = Math.floor((left + right) / 2);
    if (value === array[center]) {
      return center;
    }
    if (value > array[center]) {
      left = center + 1;
    } else right = center - 1;
  }
  return undefined;
}

module.exports = findIndex;
