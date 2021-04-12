/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sum(r, v) {
    return parseInt(r, 10) + parseInt(v, 10);
  }
  if (n > 9) {
    const tempo = n.toString().split('');
    const result = tempo.reduce(sum, 0);
    if (result > 9) return getSumOfDigits(result);
    return result;
  } return n;
}

module.exports = getSumOfDigits;
