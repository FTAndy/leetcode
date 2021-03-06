/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 && t2) {
        t2.val = t1.val + t2.val
        if (t1.left && t2.left) {
            mergeTrees(t1.left, t2.left)
        } else if (t1.left) {
            t2.left = t1.left
        }
        if (t1.right && t2.right) {
            mergeTrees(t1.right, t2.right)
        } else if (t1.right) {
            t2.right = t1.right
        }
    }
    return t2 || t1
};
