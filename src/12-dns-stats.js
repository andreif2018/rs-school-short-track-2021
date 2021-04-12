/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const array = domains.map((item) => item.split('.'));
  const tempo = [];
  array.forEach((item) => {
    let previous = '';
    for (let i = item.length - 1; i >= 0; i--) {
      tempo.push(`${previous}.${item[i]}`);
      previous += `.${item[i]}`;
    }
  });
  const result = {};
  tempo.forEach(((item) => {
    if (Object.keys(result).includes(item)) result[item] += 1;
    else result[item] = 1;
  }));
  return result;
}

module.exports = getDNSStats;
