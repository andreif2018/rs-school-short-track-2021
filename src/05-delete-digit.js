/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const converted = n.toString();
  const arr = converted.split('');
  const tempo = [];
  arr.forEach((item, index) => {
    const before = arr.slice(0, index);
    const after = arr.slice(index + 1);
    tempo.push(parseInt(before.join('') + after.join(''), 10));
  });
  let result = 0;
  tempo.forEach((item) => {
    if (item > result) result = item;
  });
  return result;
}

module.exports = deleteDigit;
