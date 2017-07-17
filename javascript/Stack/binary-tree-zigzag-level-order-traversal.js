/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    let i = 0
    let curLevel = []
    let nextLevel = []
    let result = []
    curLevel.push(root)
    while (!(curLevel.length == 0 && nextLevel.length == 0)) {
        if (curLevel.length == 0) {
            i++
            curLevel = nextLevel
            nextLevel = []
        }
        while (curLevel.length > 0) {
            let node = curLevel.shift()
            result[i] = result[i] || []
            if (node.left) {
                nextLevel.push(node.left)
            }
            if (node.right) {
                nextLevel.push(node.right)
            }
            if (i % 2 == 0) {
                result[i].push(node.val)
            } else {
                result[i].unshift(node.val)
            }
        }
    }
    return result
};
