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
// var preorderTraversal = function(root) {
//     if (!root) {
//         return []
//     }
//     let tree = []
//     tree.push(root.val)
//     if (root.left) {
//         tree = tree.concat(preorderTraversal(root.left))
//     }
//     if (root.right) {
//         tree = tree.concat(preorderTraversal(root.right))
//     }
//     return tree
// };

var preorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let tree = []
    let cur = root
    let stack = []
    while (cur || stack.length > 0) {
        if (cur) {
            tree.push(cur.val)
            stack.push(cur.right)
            cur = cur.left
        } else {
            cur = stack.pop()
        }
    }
    return tree
}
