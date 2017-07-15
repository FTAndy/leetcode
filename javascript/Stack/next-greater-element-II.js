/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var next = []
    next.length = nums.length
    next.fill(-1)
    var stack = []
    for (var i = 0; i <= nums.length * 2 - 1; i++) {
        var num = nums[i%nums.length]
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            next[stack.pop()] = num
        }
        if (i < nums.length) {
            stack.push(i)
        }
    }
    return next
};
