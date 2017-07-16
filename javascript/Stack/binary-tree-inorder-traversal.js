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
// var inorderTraversal = function(root) {
//     if (!root) {
//         return []
//     }
//     var currentArray = []
//     if (root.left) {
//         currentArray = currentArray.concat(inorderTraversal(root.left))
//     }
//     currentArray.push(root.val)
//     if (root.right) {
//         currentArray = currentArray.concat(inorderTraversal(root.right))
//     }
//     return currentArray
// };
// var inorderTraversal = function (root) {
//     if (!root) {
//         return []
//     }
//     let stack = []
//     let tree = []
//     let currentNode = root
//     while (currentNode || stack.length > 0) {
//         while (currentNode) {
//             stack.push(currentNode)
//             currentNode = currentNode.left
//         }
//         currentNode = stack.pop()
//         tree.push(currentNode.val)
//         currentNode = currentNode.right
//     }
//     return tree
// }
var inorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let stack = []
    let tree = []
    let topNode = root
    while (topNode || stack.length > 0) {
        if (topNode) {
            stack.push(topNode)
            topNode = topNode.left
        } else {
            topNode = stack.pop()
            tree.push(topNode.val)
            topNode = topNode.right
        }
    }
    return tree
}
