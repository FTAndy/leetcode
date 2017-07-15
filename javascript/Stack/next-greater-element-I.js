/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
// var nextGreaterElement = function(findNums, nums) {
//     var popArray = []
//     var indexs = []
//     for (var i = 0; i < findNums.length; i++) {
//         var index = nums.indexOf(findNums[i])
//         var newNums = nums.concat()
//         var nextGreaterNum = newNums.splice(index, newNums.length).find(a => a > findNums[i]) || -1
//         indexs.push(nextGreaterNum)
//     }
//     return indexs
// };
    var nextGreaterElement = function(findNums, nums) {
        var numsGreaterElementMap = {}
        var stack = []
        var findNumsNextGreaterElements = []
        for (var i = 0; i < nums.length; i++) {
            while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
                numsGreaterElementMap[stack[stack.length - 1]] = nums[i]
                stack.pop()
            }
            stack.push(nums[i])
        }
        for (var i = 0; i < findNums.length; i++) {
            findNumsNextGreaterElements.push(numsGreaterElementMap[findNums[i]] || -1)
        }
        return findNumsNextGreaterElements
    }
