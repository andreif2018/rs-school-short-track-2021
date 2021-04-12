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
    this.queue = new ListNode();
    this.queue.value = null;
    this.queue.next = null;
    this.backup = [];
    this.order = 0;
  }

  get size() {
    return this.order;
  }

  enqueue(element) {
    if (this.queue.value === null) this.queue.value = element;
    else {
      const node = new ListNode();
      const tempo = this.queue;
      node.value = element;
      node.next = tempo;
      this.queue = node;
    }
    this.order += 1;
    this.backup.unshift(element);
  }

  dequeue() {
    const result = this.backup.pop();
    this.queue = new ListNode();
    this.backup.forEach((item) => {
      this.enqueue(item);
    });
    this.order -= 1;
    return result;
  }
}
module.exports = Queue;
