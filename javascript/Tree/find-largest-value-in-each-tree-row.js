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
var largestValues = function(root) {
    if (!root) {
        return []
    }
    let result = []
    let stack = [root]
    while (stack.length > 0) {
        const length = stack.length - 1
        let cur = []
        for (let i = 0; i <= length; i++) {
            let node = stack.pop()
            cur.push(node.val)
            if (node.left) {
                stack.unshift(node.left)
            }
            if (node.right) {
                stack.unshift(node.right)
            }
        }
        result.push(Math.max.apply(null, cur))
    }
    return result
};
