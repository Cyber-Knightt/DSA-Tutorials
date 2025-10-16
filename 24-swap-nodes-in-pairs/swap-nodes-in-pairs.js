/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // Dummy node before head
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;
    while (current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;

        // Swapping nodes
        first.next = second.next;
        second.next = first;
        current.next = second;

        // Move current two nodes ahead
        current = first;
    }
    return dummy.next;
};