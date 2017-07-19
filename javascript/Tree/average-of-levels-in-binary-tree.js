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
var averageOfLevels = function(root) {
    let result = []
    let cur = [root]
    while (cur.length > 0) {
        let sum = 0
        let length = cur.length - 1
        for (let i = 0; i <= length; i++) {
            let node = cur.shift(0)
            sum += node.val
            if (node.left) {
                cur.push(node.left)
            }
            if (node.right) {
                cur.push(node.right)
            }
        }
        result.push(sum/(length + 1))
    }
    return result
};
