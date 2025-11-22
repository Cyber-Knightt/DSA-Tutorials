/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummy = new ListNode(0, head);
    let current = dummy;

    // Traverse and remove nodes
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next; // delete node
        } else {
            current = current.next; // move forward
        }
    }

    return dummy.next;
};