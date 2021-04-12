/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexList = [];
  arr.forEach((item, index) => {
    if (item === -1) indexList.push(index);
  });
  let tempo = arr.filter((item) => item !== -1);
  tempo = tempo.sort((a, b) => a - b);
  indexList.forEach((item) => {
    tempo.splice(item, 0, -1);
  });
  return tempo;
}

module.exports = sortByHeight;
