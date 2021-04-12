/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function check(param, k) {
  const node = new ListNode();
  if (param.value !== k) {
    node.value = param.value;
    if (param.next !== null) node.next = check(param.next, k);
    else node.next = null;
  } else return check(param.next, k);
  return node;
}

function removeKFromList(l, k) {
  return check(l, k);
}

module.exports = removeKFromList;
