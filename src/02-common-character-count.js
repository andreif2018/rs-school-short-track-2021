/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('');
  const array2 = s2.split('');
  const hash1 = {};
  const hash2 = {};
  let result = 0;
  array1.forEach((item) => {
    if (item in hash1) hash1[item] += 1;
    else hash1[item] = 1;
  });
  array2.forEach((item) => {
    if (item in hash2) hash2[item] += 1;
    else hash2[item] = 1;
  });
  Object.keys(hash1).forEach((item) => {
    if (hash1[item] < hash2[item] && hash2[item] !== undefined) result += hash1[item];
    else if (hash1[item] > hash2[item] && hash2[item] !== undefined) result += hash2[item];
    else if (hash1[item] === hash2[item]) result += hash1[item];
  });
  return result;
}

module.exports = getCommonCharacterCount;
