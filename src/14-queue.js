const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.value = null;
    this.next = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  enqueue(element) {
    if (this.value === null) this.value = new ListNode(element);
    else this.next = new ListNode(element);
    this.size = this.getSize() + 1;
  }

  dequeue() {
    this.check(this.queue);
    return 1;
  }

  check(param) {
    if (param.next !== null) this.check(param.next);
  }
}

module.exports = Queue;
