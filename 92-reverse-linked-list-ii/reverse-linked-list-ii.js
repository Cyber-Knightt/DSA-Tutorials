/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Step 1: Move `prev` to node before reversal starts
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // `start` points to the first node of the sublist
    let start = prev.next;
    // `then` points to the node that will be reversed
    let then = start.next;

    // Step 2: Reverse nodes between left and right
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
};