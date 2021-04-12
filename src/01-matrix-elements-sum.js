/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const tempo = [];
  let result = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    const internal = [];
    for (let i = 0; i < matrix.length; i++) {
      internal.push(matrix[i][j]);
    }
    tempo.push(internal);
  }
  tempo.forEach((internal) => {
    for (let i = 0; i < internal.length; i++) {
      if (internal[i] === 0) break;
      else result += internal[i];
    }
  });
  return result;
}

module.exports = getMatrixElementsSum;
