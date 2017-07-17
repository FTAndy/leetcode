/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let tree = []
    if (root.left) {
        tree = tree.concat(postorderTraversal(root.left))
    }
    if (root.right) {
        tree = tree.concat(postorderTraversal(root.right))
    }
    tree.push(root.val)
    return tree
};

var postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let tree = []
    let stack = []
    let cur = root
    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur)
            tree.unshift(cur.val)
            cur = cur.right
        } else {
            cur = stack.pop()
            cur = cur.left
        }
    }
    return tree
}
