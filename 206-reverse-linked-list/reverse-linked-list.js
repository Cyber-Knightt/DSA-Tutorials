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
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    // reverse the rest of the list
    let newHead = reverseList(head.next);
    // put head at the end
    head.next.next = head;
    head.next = null;
    return newHead;
};