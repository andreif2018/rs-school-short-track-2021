/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(value) {
  const converted = value.split('-');
  if (converted.length !== 6) return false;
  const regex = /^([A-F]|\d){2}$/;
  let result = true;
  converted.forEach((item) => {
    if (!item.match(regex)) result = false;
  });
  return result;
}

module.exports = isMAC48Address;
