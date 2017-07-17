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
            if (i % 2 == 0) {
                let node = curLevel.shift()
                result[i] = result[i] || []
                result[i].push(node.val)
                if (node.left) {
                    nextLevel.push(node.left)
                }
                if (node.right) {
                    nextLevel.push(node.right)
                }
            } else {
                let node = curLevel.shift()
                result[i] = result[i] || []
                result[i].unshift(node.val)
                if (node.left) {
                    nextLevel.push(node.left)
                }
                if (node.right) {
                    nextLevel.push(node.right)
                }
            }
        }
    }
    return result
};
