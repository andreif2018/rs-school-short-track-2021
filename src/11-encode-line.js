/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const result = [];
  let index = 0;
  let counter = 1;
  let previous = null;
  array.forEach((item) => {
    if (previous === item) {
      counter += 1;
      if (counter > 1) result[index] = counter.toString() + previous;
      else result[index] = previous;
    } else {
      counter = 1;
      index += 1;
      if (counter > 1) result[index] = counter.toString() + item;
      else result[index] = item;
      previous = item;
    }
  });
  return result.join('');
}

module.exports = encodeLine;
