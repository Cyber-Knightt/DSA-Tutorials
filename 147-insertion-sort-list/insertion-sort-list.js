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
var insertionSortList = function(head) {
    if (!head) return head;

    let dummy = new ListNode(0);
    let current = head;

    while (current) {
        let nextNode = current.next;

        // find the correct position in sorted list
        let prev = dummy;
        while (prev.next && prev.next.val < current.val) {
            prev = prev.next;
        }

        // insert current between prev and prev.next
        current.next = prev.next;
        prev.next = current;

        current = nextNode;
    }

    return dummy.next;
};