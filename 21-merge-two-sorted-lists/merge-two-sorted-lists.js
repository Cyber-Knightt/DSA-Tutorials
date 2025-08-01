/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;  // attach list1 node
            list1 = list1.next;    // move list1 forward
        } else {
            current.next = list2;  // attach list2 node
            list2 = list2.next;    // move list2 forward
        }
        current = current.next; // move current pointer forward
    }

    // Step 3: Attach remaining nodes (only one list may have leftovers)
    current.next = list1 !== null ? list1 : list2;

    // Step 4: Return the real head (skip dummy)
    return dummy.next;
};