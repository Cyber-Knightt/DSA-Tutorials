/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0; // in edges

    function height(node) {
        if (!node) return 0; // height in nodes

        const left = height(node.left);
        const right = height(node.right);

        // longest path through this node (in edges) is left + right
        maxDiameter = Math.max(maxDiameter, left + right);

        // return height (in nodes) to parent
        return 1 + Math.max(left, right);
    }

    height(root);
    return maxDiameter;
};