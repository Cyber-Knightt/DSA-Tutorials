/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);  // add dummy node
    let fast = dummy;
    let slow = dummy;

    // move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // move both until fast reaches end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // remove the nth node
    slow.next = slow.next.next;

    return dummy.next; // return new head
};