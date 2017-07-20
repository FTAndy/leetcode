/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let cur
    let stack = [root]
    while (stack.length > 0) {
        cur = stack.pop()
        if (cur.right) {
            stack.unshift(cur.right)
        }
        if (cur.left) {
            stack.unshift(cur.left)
        }
    }
    return cur.val
};
